import React, { useState, useEffect } from "react";
import ProfileContainer from "./ProfileContainer";

export default function Profile() {
    const tabs = [
        {
            id: "general",
            title: "General Info"
        },
        // {
        //     id: "timeslots",
        //     title: "timeslots"
        // },
        // {
        //     id: "kycVerify",
        //     title: "KYC Verify"
        // },
        // {
        //     id: "bankDetails",
        //     title: "Bank Details"
        // }
    ];
    const [activeTab, setActiveTab] = useState("");
    const [showTabs, setShowTabs] = useState({
        general: false,
        timeslots: false,
        kycVerify: false,
        bankDetails: false
    });
    function changeSelectedTab(e, _newValue) {
        let _temp = {};
        tabs.forEach((_t, _i) => {
            _temp[_t.id] = _i === _newValue;
        });
        setShowTabs(_temp);
        setActiveTab(tabs[_newValue].id);
        window.location.hash = `#${tabs[_newValue].id}`;
    }
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
            setActiveTab("general");
            setShowTabs({
                completed: true
            });
            window.location.hash = "#general";
        }
    }, []);
    return (
        <ProfileContainer
            activeTab={activeTab}
            changeActiveTab={changeSelectedTab}
            tabs={tabs}
        />
    );
}
