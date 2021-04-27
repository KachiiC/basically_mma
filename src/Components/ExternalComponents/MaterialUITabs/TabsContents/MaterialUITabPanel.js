import React from 'react'
import PropTypes from 'prop-types';
// MATERIAL UI COMPONENTS
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const MaterialUITabPanel = (props) => {

    // Takes the index and content (as a child property) as keys for toggling
    const { children, value, index, ...other } = props;
  
    return (
        <div role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>
                        {children}
                    </Typography>
                </Box>
            )}
        </div>
    );
}

MaterialUITabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

export default MaterialUITabPanel