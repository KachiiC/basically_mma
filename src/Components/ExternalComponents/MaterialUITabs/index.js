import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// External Components
import TabPanel from './MaterialUITabPanel'
import MaterialTabProps from './MaterialUIProps'
// Data 

const MaterialUITabs = (props) => {

    const TabsData = props.data

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const displayTabs = TabsData.map((tab,index) => (
            <Tab label={tab.title} 
                icon={tab.icon}
                {...MaterialTabProps(index)} 
            />
        )
    )

    const displayTabPanels = TabsData.map((tab,index) => (
            <TabPanel value={value} index={index}>
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