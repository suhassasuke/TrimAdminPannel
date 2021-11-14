import React from "react";
import clsx from "clsx";
import {
    Box,
    Button,
    Checkbox,
    Grid,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Typography
} from "@material-ui/core";
import DataTableSkeleton from "../../components/DataTable/DataTableSkeleton";
import DataTable from "../../components/DataTable/DataTable";

function noRuleContent(_columns, _contentText) {
    return (
        <TableRow>
            <TableCell colSpan={_columns}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ padding: "30px 0px" }}
                >
                    <Grid
                        item
                        md={12}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        className="mb-5"
                    >
                        <Typography variant="h5">{_contentText}</Typography>
                    </Grid>
                </Grid>
            </TableCell>
        </TableRow>
    );
}
function loadingStateContent(_colCount) {
    return [...Array(10)].map((ele, _i) => {
        return <DataTableSkeleton key={_i} colCount={_colCount} />;
    });
}
function completedOrdersTables(props) {
    const headCells = [
        {
            id: "id",
            numeric: true,
            disablePadding: true,
            label: "Booking ID",
            align: "left",
            sort: true,
            customClass: clsx()
        },
        {
            id: "customer_details",
            numeric: false,
            disablePadding: false,
            label: "Customer details",
            align: "left",
            customClass: clsx()
        },
        {
            id: "customer_address",
            numeric: false,
            disablePadding: false,
            label: "Address",
            align: "left",
            customClass: clsx()
        },
        {
            id: "service_type",
            numeric: false,
            disablePadding: false,
            label: "Service type",
            align: "left",
            customClass: clsx()
        },
        {
            id: "amount",
            numeric: true,
            disablePadding: false,
            label: "Amount",
            align: "right",
            customClass: clsx()
        },
        {
            id: "booked_time",
            numeric: false,
            disablePadding: false,
            label: "Booked Time",
            align: "left",
            customClass: clsx()
        }
    ];
    return (
        <DataTable
            headCells={headCells}
            list={props.tableRows}
            noRuleContent={noRuleContent}
            loadingContent={loadingStateContent}
            showContent={props.isShowTable}
            rowContentCallback={getTableRowContent}
        />
    );
}
function upcomingOrdersTables(props) {
    const headCells = [
        {
            id: "id",
            numeric: true,
            disablePadding: true,
            label: "Booking ID",
            align: "left",
            sort: true,
            customClass: clsx()
        },
        {
            id: "customer_details",
            numeric: false,
            disablePadding: false,
            label: "Customer details",
            align: "left",
            customClass: clsx()
        },
        {
            id: "customer_address",
            numeric: false,
            disablePadding: false,
            label: "Address",
            align: "left",
            customClass: clsx()
        },
        {
            id: "service_type",
            numeric: false,
            disablePadding: false,
            label: "Service type",
            align: "left",
            customClass: clsx()
        },
        {
            id: "booked_time",
            numeric: false,
            disablePadding: false,
            label: "Booked Time",
            align: "left",
            customClass: clsx()
        }
    ];
    return (
        <DataTable
            headCells={headCells}
            list={props.tableRows}
            noRuleContent={noRuleContent}
            loadingContent={loadingStateContent}
            showContent={props.isShowTable}
            rowContentCallback={getTableRowContent}
        />
    );
}
function pendingOrdersTables(props) {
    const headCells = [
        {
            id: "id",
            numeric: true,
            disablePadding: true,
            label: "Booking ID",
            align: "left",
            sort: true,
            customClass: clsx()
        },
        {
            id: "customer_details",
            numeric: false,
            disablePadding: false,
            label: "Customer details",
            align: "left",
            customClass: clsx()
        },
        {
            id: "customer_address",
            numeric: false,
            disablePadding: false,
            label: "Address",
            align: "left",
            customClass: clsx()
        },
        {
            id: "service_type",
            numeric: false,
            disablePadding: false,
            label: "Service type",
            align: "left",
            customClass: clsx()
        },
        {
            id: "booked_time",
            numeric: false,
            disablePadding: false,
            label: "Booked Time",
            align: "left",
            customClass: clsx()
        },
        {
            id: "approve_reject_action",
            numeric: false,
            disablePadding: false,
            label: "Action",
            align: "right",
            customClass: clsx()
        }
    ];
    return (
        <DataTable
            headCells={headCells}
            list={props.tableRows}
            noRuleContent={noRuleContent}
            loadingContent={loadingStateContent}
            showContent={props.isShowTable}
            rowContentCallback={getTableRowContent}
            actionCallback={props.actionCallback}
        />
    );
}
function declinedOrdersTables(props) {
    const headCells = [
        {
            id: "id",
            numeric: true,
            disablePadding: true,
            label: "Booking ID",
            align: "left",
            sort: true,
            customClass: clsx()
        },
        {
            id: "customer_details",
            numeric: false,
            disablePadding: false,
            label: "Customer details",
            align: "left",
            customClass: clsx()
        },
        {
            id: "customer_address",
            numeric: false,
            disablePadding: false,
            label: "Address",
            align: "left",
            customClass: clsx()
        },
        {
            id: "service_type",
            numeric: false,
            disablePadding: false,
            label: "Service type",
            align: "left",
            customClass: clsx()
        }
    ];
    return (
        <DataTable
            headCells={headCells}
            list={props.tableRows}
            noRuleContent={noRuleContent}
            loadingContent={loadingStateContent}
            showContent={props.isShowTable}
            rowContentCallback={getTableRowContent}
        />
    );
}

function getTableRowContent(_props) {
    console.log(_props);
    return _props.headCells.map((_h, _i) => {
        return (
            <TableCell component="td" scope="row" className={""} key={_i}>
                {getTableCellContent(
                    _h,
                    _props.rowValue,
                    _props.actionCallback
                )}
            </TableCell>
        );
    });
}
function getTableCellContent({ id }, _value, actioncallback) {
    switch (id) {
        case "id":
            return (
                <Typography
                    variant="body1"
                    className=" text--md text-color__black"
                >
                    {_value.id}
                </Typography>
            );

        case "customer_details":
            return (
                <Typography
                    variant="body1"
                    className=" text--md text-color__black"
                >
                    {_value.customer.first_name + _value.customer.last_name}
                </Typography>
            );

        case "customer_address":
            return (
                <Typography
                    variant="body1"
                    className=" text--md text-color__black"
                >
                    {_value.customer_address}
                </Typography>
            );
        case "service_type":
            return (
                <Typography
                    variant="body1"
                    className=" text--md text-color__black"
                >
                    {_value.service_type.service_name.service_name}
                </Typography>
            );
        case "amount":
            return (
                <Typography
                    variant="body1"
                    className=" text--md text-color__black"
                >
                    {_value.amount}
                </Typography>
            );
        case "booked_time":
            return (
                <Typography
                    variant="body1"
                    className=" text--md text-color__black"
                >
                    {_value.booking_date}
                </Typography>
            );
        case "approve_reject_action":
            return (
                <Box
                    component="div"
                    display="flex"
                    justifyContent="flex-end"
                    flexWrap="wrap"
                >
                    <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        className="my-1"
                        onClick={() => actioncallback("accept", _value.id)}
                    >
                        {"Accept"}
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        className="ml-2 my-1"
                        onClick={() => actioncallback("reject", _value.id)}
                    >
                        {"Reject"}
                    </Button>
                </Box>
            );

        default:
            return null;
    }
}
export default function OrdersTables(props) {
    let table = null;
    if (props.type === "completed") {
        table = completedOrdersTables(props);
    } else if (props.type === "upcoming") {
        table = upcomingOrdersTables(props);
    } else if (props.type === "pending") {
        table = pendingOrdersTables(props);
    } else if (props.type === "declined") {
        table = declinedOrdersTables(props);
    }

    return table;
}
