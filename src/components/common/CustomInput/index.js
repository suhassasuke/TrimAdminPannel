import {
    FormControl,
    IconButton,
    InputAdornment,
    MenuItem,
    OutlinedInput,
    Select,
    Typography,
    InputBase
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { error, textmd, textlg, textsm } from "../../../style/init/_variables";
import clsx from "clsx";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { grey } from "@material-ui/core/colors";

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
const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        position: "relative",
        fontSize: 16,
        padding: "18.5px 14px",
        transition: theme.transitions.create(["border-color", "box-shadow"])
    }
}))(InputBase);
const useStyle = makeStyles({
    inputLabel: {
        fontSize: textmd,
        position: "relative"
    },
    inputDesc: {
        fontSize: textsm,
        color: grey[700],
        lineHeight: 1.3
    },
    inputRequired: {
        color: error,
        fontSize: textlg,
        position: "absolute"
    },
    error: {
        color: error
    },
    errorMsg: {
        position: "absolute",
        top: "100%",
        left: 0
    }
});

export default function CustomInput(props) {
    const {
        name,
        type,
        label,
        placeholder,
        required,
        value = "",
        fullWidth = true,
        className = "",
        handleInputChange,
        isPassword = false,
        selectList = [],
        endAdornment = "",
        startAdornment = "",
        validation = {},
        inputBottomLabel = null,
        isError = false,
        errorMsg = ""
    } = props;
    const [inputValue, setInputValue] = useState("");
    const [passwordShow, setPasswordShow] = useState(false);
    const handleClickShowPassword = () => {
        setPasswordShow(!passwordShow);
    };
    const classes = useStyle();

    const handleChange__input = (e) => {
        const { value } = e.target;
        if (validation.regex !== undefined && validation.regexOnInputCheck) {
            if (!validation.regex.test(value)) {
                return false;
            }
        }
        if (
            validation.maxLength &&
            String(value).length > validation.maxLength
        ) {
            return false;
        }
        setInputValue(e.target.value);
    };
    const handleChange__select = (e) => {
        let _error = false,
            _errorMsg = "";
        const { name, value } = e.target;
        if (required && value === "") {
            _error = true;
            _errorMsg = "Select a value";
        }
        handleInputChange(value, name, _error, _errorMsg, "blur");
    };
    const handleOnBlur = (e) => {
        let _error = false,
            _errorMsg = "";
        const { name, value } = e.target;
        if (required && value === "") {
            _error = true;
            _errorMsg = "Required value";
        }
        if (validation.regex !== undefined) {
            if (!validation.regex.test(value)) {
                _error = true;
                _errorMsg = _errorMsg || validation.errorMsg.regex;
            }
        }
        if (validation.minLength) {
            if (String(value).length < validation.minLength) {
                _error = true;
                _errorMsg = _errorMsg || validation.errorMsg.minLength;
            }
        }
        handleInputChange(value, name, _error, _errorMsg, "blur");
    };
    function getInputByType(type) {
        switch (type) {
            case "select":
                return (
                    <Select
                        autoWidth={true}
                        value={inputValue}
                        onChange={handleChange__select}
                        IconComponent={ExpandMoreIcon}
                        className={`borderRadius__0 ${className} ${
                            isError ? "border--error__2" : ""
                        }`}
                        input={<BootstrapInput />}
                        inputProps={{
                            name: name
                        }}
                        id={`select-${name}`}
                        onBlur={handleOnBlur}
                    >
                        <MenuItem value="">
                            <em>Select</em>
                        </MenuItem>
                        {selectList.map((_l) => (
                            <MenuItem key={_l.id} value={_l.name}>
                                {_l.label}
                            </MenuItem>
                        ))}
                    </Select>
                );

            case "text":
            case "password":
            case "email":
                return (
                    <CustomInputField
                        name={name}
                        type={
                            isPassword
                                ? passwordShow
                                    ? "text"
                                    : "password"
                                : type
                        }
                        required={required}
                        placeholder={placeholder}
                        value={inputValue}
                        inputProps={{ "aria-label": placeholder, name: name }}
                        onChange={handleChange__input}
                        onBlur={handleOnBlur}
                        fullWidth={fullWidth}
                        className={`borderRadius__0 ${className} ${
                            isError ? "border--error__2" : ""
                        }`}
                        endAdornment={
                            <InputAdornment position="end">
                                {isPassword ? (
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                        tabIndex={-1}
                                    >
                                        {passwordShow ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                ) : (
                                    endAdornment
                                )}
                            </InputAdornment>
                        }
                        startAdornment={
                            <InputAdornment position="start">
                                {startAdornment}
                            </InputAdornment>
                        }
                    />
                );
            default:
                break;
        }
    }

    useEffect(() => {
        setInputValue(value);
    }, [value]);
    return (
        <>
            <Typography
                variant="caption"
                className={clsx(classes.inputLabel, "font__weight--500")}
            >
                {label}
                {required ? (
                    <Typography
                        variant="caption"
                        className={clsx(
                            classes.inputRequired,
                            "font__weight--500"
                        )}
                    >
                        <sup>{" * "}</sup>
                    </Typography>
                ) : (
                    ""
                )}
            </Typography>
            <FormControl fullWidth className="mb-5 ">
                {getInputByType(type)}
                {inputBottomLabel && (
                    <Typography
                        variant="caption"
                        className={clsx(
                            "my-2",
                            classes.inputDesc,
                            isError ? classes.error : ""
                        )}
                    >
                        {inputBottomLabel}
                    </Typography>
                )}
                {!inputBottomLabel && isError && (
                    <Typography
                        variant="caption"
                        className={clsx(
                            "my-1",
                            classes.inputDesc,
                            classes.error,
                            classes.errorMsg
                        )}
                    >
                        {errorMsg}
                    </Typography>
                )}
            </FormControl>
        </>
    );
}
