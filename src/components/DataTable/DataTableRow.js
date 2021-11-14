import { makeStyles, TableRow } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    buttonMargin: {
        marginRight: "15px"
    },
    table: {
        minWidth: 650
    },
    td: {
        "&:last-child": {
            width: "180px"
        }
    },
    tr: {
        verticalAlign: "top"
    },
    activeMargin: {
        marginLeft: "10px",
        marginRight: "16px"
    },
    addMarginTop: {
        marginTop: "-12px"
    },
    priorityColWidth: {
        width: "80px"
    },
    actionIcon: {
        width: "16px",
        height: "16px"
    },
    disableAction: {
        // height: "100%",
        // width: "100%",
        position: "relative",
        background: "#fff",
        opacity: 0.7,
        zIndex: 99,
        pointerEvents: "none"
    }
});

const DataTableRow = (props) => {
    const { isItemSelected = false, rowName = "", rowContentCallback } = props;
    const classes = useStyles();
    // console.log(props, "Default");

    return (
        <TableRow
            className={classes.tr}
            hover
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={rowName}
            selected={isItemSelected}
        >
            {rowContentCallback(props)}
        </TableRow>
    );
};

export default DataTableRow;
