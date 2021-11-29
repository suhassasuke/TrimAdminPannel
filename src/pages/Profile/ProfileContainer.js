import { Box, Container, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import HorizontalTabs from "../../components/ResponsiveTabs/HorizontalTabs";
import DisplayImage from "./ProfileInfo/DisplayImage";
import GeneralInfo from "./ProfileInfo/General";

const getTabContent = (props) => {
	console.log("");
    switch (props.activeTab) {
        case "general":
            return <GeneralInfo />;

        default:
            break;
    }
};
export default function ProfileContainer(props) {
    const { activeTab, changeActiveTab, tabs } = props;
    return (
        <Container>
            <Grid container>
                <Grid item md={4}>
                    <DisplayImage />
                </Grid>
                <Grid item md={8}>
                    {activeTab && (
                        <HorizontalTabs
                            tabDetails={tabs}
                            activeTab={tabs.findIndex(
                                (_t) => _t.id === activeTab
                            )}
                            onChangeTab={changeActiveTab}
                        />
                    )}
                    <Box component="div" className="tmz__profile--infoBox">
                        {getTabContent(props)}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
