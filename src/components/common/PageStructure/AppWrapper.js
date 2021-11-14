import { Box } from "@material-ui/core";
import React from "react";
import SidebarNav from "./Sidebar";

export default function AppWrapper(props) {
    return (
        <Box component="div" display="flex" className="tza__app--wrapper">
            <Box component="div" className="tza__app--sidebar">
                <SidebarNav {...props} />
            </Box>
            <Box component="div" className="tza__app--main">
                <Box component="div" className="tza__app--main__wrapper">
                    {props.children}
                </Box>
            </Box>
        </Box>
    );
}
