import React from "react";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import { roleBasedPagePermission } from "../../../utils/roleBasedPagePermission";
import { routeUrls } from "../../../urls/routeUrls";
import { MenuHomeIcon, MenuOrderIcon } from "../../../assets/images/SVG";

export default function SidebarNav() {
    const location = useLocation();

    const listItems = [
        {
            id: 1,
            className: "",
            url: routeUrls.commonUrls.dashboard,
            subUrls: [],
            geticon: (_color) => <MenuHomeIcon color={_color} />,
            liItemName: "Home",
            routeName: "home" //same as given in roleBasedPermission page
        },
        {
            id: 2,
            className: "",
            url: routeUrls.commonUrls.orders,
            subUrls: [],
            geticon: (_color) => <MenuOrderIcon color={_color} />,
            liItemName: "Orders",
            routeName: "orders" //same as given in roleBasedPermission page
        }
    ];
    function checkURLMatchByParts(mainUrl, UrlToMatchList) {
        return UrlToMatchList.some((_u) => mainUrl.indexOf(_u) > -1);
    }
    return (
        <>
            <Box component="div" className="tza__sidebar">
                <List
                    component="nav"
                    aria-label="Side navbar"
                    className="tza__sidebar--wrapper p-0"
                >
                    {listItems?.map((listItem, index) => {
                        if (
                            roleBasedPagePermission[listItem.routeName].indexOf(
                                localStorage.getItem("tza_role")
                            ) === -1
                        )
                            return null;

                        let selected =
                            location.pathname === listItem.url ||
                            checkURLMatchByParts(
                                location.pathname,
                                listItem.subUrls
                            );
                        return (
                            <Link
                                to={listItem.url}
                                key={index}
                                className="tza__sidebar--navlinks"
                            >
                                <ListItem
                                    button
                                    selected={selected}
                                    className="tza__sidebar--navlink_item"
                                >
                                    <Box component="div">
                                        {listItem.geticon(
                                            selected ? "#000000" : undefined
                                        )}
                                    </Box>
                                    <ListItemText
                                        primary={listItem.liItemName}
                                        className="tza__sidebar--navlink-title"
                                    />
                                </ListItem>
                            </Link>
                        );
                    })}
                </List>
            </Box>
        </>
    );
}
