import React from 'react';
// CSS
//Components
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabsTitles from './TabTitles'


function TabPanel(props) {
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

function tabOrder(index) {
  return {
      id: `scrollable-auto-tab-${index}`,'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

function RulesTabs() {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const titleList = TabsTitles.map((title) => {
    return (
      <Tab label={title.tab} {...tabOrder(`${title.order}`)} />
    )
  })

  const displayTabs = TabsTitles.map((title) => {
    return (
      <TabPanel value={value} index={title.order}>
        {title.paragraph}
      </TabPanel>
    )
  }
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