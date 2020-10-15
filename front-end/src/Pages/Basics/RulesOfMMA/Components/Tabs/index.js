import React from 'react';
// CSS
//Components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabsTitles from './RulesTabs'


const TabPanel = (props) => {
  
  const {children, value, index, ...other} = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`} {...other} >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const tabOrder = (index) => {
  return {
      id: `scrollable-auto-tab-${index}`,'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const RulesTabs = () => {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const titleList = TabsTitles.map((title) => (
      <Tab label={title.tab} {...tabOrder(`${title.order}`)} />
    )
  )

  const displayTabs = TabsTitles.map((title) => (
        <TabPanel value={value} index={title.order}>
          <h3>{title.tab}</h3>
          <div className="rules-tab-paragraph"> 
            <p>{title.paragraph}</p>
          </div>
        </TabPanel>
      )
  )


  return (
      <div className="site-section-container">
        <h4 className="site-section-title"> Unified Rules of MMA</h4>
        <AppBar position="static" color="default">
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" 
              variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
                {titleList}
            </Tabs>
        </AppBar>
        <div className="rules-tab-background">
          {displayTabs}
        </div>
      </div>
  );
}

export default RulesTabs