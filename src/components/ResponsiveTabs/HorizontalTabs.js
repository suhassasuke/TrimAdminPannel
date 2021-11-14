import { AppBar, Tabs, Tab, Box, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
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
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
}
export default function HorizontalTabs({ tabDetails, activeTab, onChangeTab }) {
    return (
        <>
            <AppBar position="static" color="default">
                <Tabs
                    value={activeTab}
                    onChange={onChangeTab}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {tabDetails.map((_t, _i) => {
                        return (
                            <Tab key={_i} label={_t.title} {...a11yProps(_i)} />
                        );
                    })}
                </Tabs>
            </AppBar>
        </>
    );
}
