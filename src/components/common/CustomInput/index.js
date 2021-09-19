import { OutlinedInput, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { textmd } from "../../../style/init/_variables";
import clsx from "clsx";

const CustomInputField = withStyles({
    root: {
        "& .MuiOutlinedInput-notchedOutline": {
            border: 0
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: 0
        }
    }
})(OutlinedInput);
const useStyle = makeStyles({
    inputLabel: {
        fontSize: textmd,
    }
});

export default function CustomInput(props) {
    const {
        name,
        type,
        label,
        placeholder,
        required,
        value,
        fullWidth = true,
        className = ""
    } = props;
    const [inputValue, setInputValue] = useState("");
    const classes = useStyle();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        setInputValue(value);
        return () => {
            setInputValue("");
        };
    }, []);
    return (
        <>
            <Typography variant="caption" className={clsx(classes.inputLabel, "font__weight--500")}>
                {label}
            </Typography>
            <CustomInputField
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
                value={inputValue}
                inputProps={{ "aria-label": placeholder }}
                onChange={handleChange}
                fullWidth={fullWidth}
                className={`borderRadius__0 ${className}`}
                disableRipple={true}
            />
        </>
    );
}
