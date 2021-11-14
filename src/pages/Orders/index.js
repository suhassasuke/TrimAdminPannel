import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import HorizontalTabs from "../../components/ResponsiveTabs/HorizontalTabs";
import OrdersTables from "./OrdersTables";
import { useDispatch, useSelector } from "react-redux";
import { ordersActions } from "../../redux/actions/Orders/orders.action";
import LocalStorageService from "../../services/LocalStorage";

export default function Orders() {
    const { user_details } = useSelector((state) => state.AuthReducer);
    const {
        fetchedCompletedOrders,
        fetchedUpcomingOrders,
        fetchedDeclinedOrders,
        fetchedPendingOrders,
        isLoading,
        disable,
        reRender
    } = useSelector((state) => state.OrdersReducer);
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(null);
    const [showTabs, setShowTabs] = useState({
        completed: false,
        upcoming: false,
        declined: false,
        pending: false
    });
    const tabs = [
        {
            id: "completed",
            title: "Completed"
        },
        {
            id: "upcoming",
            title: "Upcoming"
        },
        {
            id: "pending",
            title: "Pending"
        },
        {
            id: "declined",
            title: "Declined"
        }
    ];
    const initialApiCalls = {
        completed: (_currentRowsPerPage, _page_num) => {
            dispatch(
                ordersActions.getOrdersByTab(
                    LocalStorageService.getAccessToken(),
                    "GET",
                    {
                        id: user_details.id,
                        tab: "completed",
                        status: "completed"
                    }
                )
            );
        },
        upcoming: (_currentRowsPerPage, _page_num) => {
            dispatch(
                ordersActions.getOrdersByTab(
                    LocalStorageService.getAccessToken(),
                    "GET",
                    {
                        id: user_details.id,
                        tab: "upcoming",
                        status: "booked"
                    }
                )
            );
        },
        declined: (_currentRowsPerPage, _page_num) => {
            dispatch(
                ordersActions.getOrdersByTab(
                    LocalStorageService.getAccessToken(),
                    "GET",
                    {
                        id: user_details.id,
                        tab: "declined",
                        status: "cancelled"
                    }
                )
            );
        },
        pending: (_currentRowsPerPage, _page_num) => {
            dispatch(
                ordersActions.getOrdersByTab(
                    LocalStorageService.getAccessToken(),
                    "GET",
                    {
                        id: user_details.id,
                        tab: "pending",
                        status: "pending"
                    }
                )
            );
        },
        selectAll: (e) => {},
        un_selectAll: (type) => {}
    };
    function changeSelectedTab(e, _newValue) {
        let _temp = {};
        tabs.forEach((_t, _i) => {
            _temp[_t.id] = _i === _newValue;
        });
        setShowTabs(_temp);
        setActiveTab(tabs[_newValue].id);
        window.location.hash = `#${tabs[_newValue].id}`;
    }
    function orderTableAction(_type, _id) {
        console.log("OrderAction", _type, _id);
        switch (_type) {
            case "accept":
                dispatch(
                    ordersActions.orderAcceptDecline(
                        LocalStorageService.getAccessToken(),
                        {
                            booking_service_id: _id,
                            status: 1
                        }
                    )
                );
                break;
            case "reject":
                dispatch(
                    ordersActions.orderAcceptDecline(
                        LocalStorageService.getAccessToken(),
                        {
                            booking_service_id: _id,
                            status: 0
                        }
                    )
                );
                break;

            default:
                break;
        }
    }
    function renderTableData(_activeTab) {
        switch (_activeTab) {
            case "completed":
                initialApiCalls.completed();
                break;

            case "upcoming":
                initialApiCalls.upcoming();
                break;

            case "pending":
                initialApiCalls.pending();
                break;

            case "declined":
                initialApiCalls.declined();
                break;

            default:
                initialApiCalls.completed();
                break;
        }
    }
    useEffect(() => {
        if (activeTab) renderTableData(activeTab);
    }, [activeTab]);
    useEffect(() => {
        if (reRender) renderTableData(activeTab);
    }, [reRender]);
    useEffect(() => {
        let urlHash = window.location.hash.replace("#", "");
        let flag = 0;

        tabs.forEach((_t) => {
            if (_t.id === urlHash) {
                setActiveTab(_t.id);
                setShowTabs({
                    ...showTabs,
                    [_t.id]: true
                });
                flag = 1;
                return false;
            }
        });
        if (flag === 0) {
            setActiveTab("completed");
            setShowTabs({
                completed: true
            });
            window.location.hash = "#completed";
        }
    }, []);
    return (
        <>
            <h1>Orders</h1>
            {activeTab && (
                <HorizontalTabs
                    tabDetails={tabs}
                    activeTab={tabs.findIndex((_t) => _t.id === activeTab)}
                    onChangeTab={changeSelectedTab}
                />
            )}
            <Box component="div" className="tza__orders--table__container">
                {showTabs.completed && (
                    <Box
                        component="div"
                        className="tza__orders--table__wrapper tza__orders--wrapper__completed"
                    >
                        {OrdersTables({
                            type: "completed",
                            tableRows: fetchedCompletedOrders,
                            disableRow: !disable.completed,
                            isShowTable: !isLoading.completed,
                            actionCallback: orderTableAction
                        })}
                    </Box>
                )}

                {showTabs.upcoming && (
                    <Box
                        component="div"
                        className="tza__orders--table__wrapper tza__orders--wrapper__upcoming"
                    >
                        {OrdersTables({
                            type: "upcoming",
                            tableRows: fetchedUpcomingOrders,
                            disableRow: !disable.upcoming,
                            isShowTable: !isLoading.upcoming,
                            actionCallback: orderTableAction
                        })}
                    </Box>
                )}

                {showTabs.pending && (
                    <Box
                        component="div"
                        className="tza__orders--table__wrapper tza__orders--wrapper__pending"
                    >
                        {OrdersTables({
                            type: "pending",
                            tableRows: fetchedPendingOrders,
                            disableRow: !disable.pending,
                            isShowTable: !isLoading.pending,
                            actionCallback: orderTableAction
                        })}
                    </Box>
                )}

                {showTabs.declined && (
                    <Box
                        component="div"
                        className="tza__orders--table__wrapper tza__orders--wrapper__declined"
                    >
                        {OrdersTables({
                            type: "declined",
                            tableRows: fetchedDeclinedOrders,
                            disableRow: !disable.declined,
                            isShowTable: !isLoading.declined,
                            actionCallback: orderTableAction
                        })}
                    </Box>
                )}
            </Box>
        </>
    );
}
