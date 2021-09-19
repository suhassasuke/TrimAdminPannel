import React from "react";
import { Box, ClickAwayListener, Grid } from "@material-ui/core";

const TooltipPopup = (props) => {
    const { children, aligned = "left", handleClickAway } = props;
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box
                position="absolute"
                className={`tz__tooltipPopup tz__tooltipPopup--${
                    aligned === "right" ? "alignRight" : "alignLeft"
                } background__white mt-4 pr-3 pl-3 pt-4 pb-4`}
            >
                <Box component="span" className="arrowUp background__white"></Box>
                {children}
            </Box>
        </ClickAwayListener>
    );
};

export default TooltipPopup;
