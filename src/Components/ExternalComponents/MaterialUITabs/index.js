import React, {useState} from 'react';
// Material UI Components
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// External Components
import TabPanel from './TabsContents/MaterialUITabPanel'
import TabProps from './TabsContents/MaterialUIProps'
// Data 

const MaterialUITabs = (props) => {

    const TabsData = props.data

    // Tab currently show, default value is first in array
    const [value, setValue] = useState(0);

    // On Click changes the clicked value to new value
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    // Returns Title and Icon from each object in Data
    const displayTabs = TabsData.map((tab,index) => (
            <Tab label={tab.title} 
                icon={tab.icon}
                {...TabProps(index)}
                key={index}
            />
        )
    )

    // Returns Content from each object in Data
    const displayTabPanels = TabsData.map((tab,index) => (
            <TabPanel value={value} index={index} key={index}>
                {tab.content}
            </TabPanel>
        )
    )

    return (
        <div className={`m-auto w-${props.width}`}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    {displayTabs}
                </Tabs>
            </AppBar>
            {displayTabPanels}
        </div>
    );
}

export default MaterialUITabs