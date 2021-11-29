import { Box } from "@material-ui/core";
import React from "react";
import { profileContent } from "./_content";
import clsx from "clsx";
import CustomInput from "../../../components/common/CustomInput";
import { useSelector } from "react-redux";

export default function GeneralInfo() {
    const {
        user_details: { user_details }
    } = useSelector((state) => state.AuthReducer);
    console.log("general log");
    return (
        <>
            <Box
                component="div"
                className="tmz__profile--generalInfo"
                position="relative"
            >
                {profileContent.generalInfo.map((_row, _rowIndex) => {
                    return (
                        <Box component="div" display="flex" key={_rowIndex}>
                            {_row.row.length !== 0 &&
                                _row.row.map((_el, _i) => {
                                    return (
                                        <Box
                                            component="div"
                                            display=""
                                            className={clsx(
                                                _row.row.length > 1
                                                    ? _row.row.length === _i + 1
                                                        ? "pr-3"
                                                        : "pr-3 pl-3"
                                                    : "px-3",
                                                _row.row.length > 1 && _i === 0
                                                    ? "pl-3"
                                                    : ""
                                            )}
                                            width="100%"
                                            key={_i}
                                        >
                                            <CustomInput
                                                name={_el.name}
                                                placeholder={_el.placeholder}
                                                type={_el.type}
                                                disabled={_el.disabled}
                                                label={_el.label}
                                                fullWidth={false}
                                                className={clsx(
                                                    "font__size--md",
                                                    _el.disabled
                                                        ? "border--gray__1"
                                                        : "border--primary__1"
                                                )}
                                                key={_el.name}
                                                value={user_details[_el.name]}
                                                selectList={
                                                    _el.type === "select"
                                                        ? _el.list
                                                        : []
                                                }
                                            />
                                        </Box>
                                    );
                                })}
                        </Box>
                    );
                })}
            </Box>
        </>
    );
}
