import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from "@material-ui/core";
import React from "react";
import clsx from 'clsx';
import "./Modal.scss";

function uploadModal(props) {
    return null;
}

function imageModal(props) {
    return (
        <Dialog
            fullScreen={props.fullScreen || false}
            fullWidth={props.fullWidth || false}
            maxWidth={props.maxWidth || "md"}
            open={props.isOpen}
            onClose={props.handleModalClose}
            aria-labelledby="responsive-dialog-title"
			className={clsx('tmz__modal')}
        >
            {props.modalTitle && <DialogTitle>{props.modalTitle}</DialogTitle>}
            <DialogContent>
                <Box component="div" className={props.imageWrapperClass}>
                    <img src={props.image} alt={""} />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={props.handleModalClose}
                    color="primary"
                    autoFocus
					variant="contained"
                    className="button--primary  p-1"
                >
                    {props.actionButtonLabel}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

function imageSliderModal(props) {
    return null;
}

export default function ModalUi(props) {
    let modal = null;

    if (props.showUploadModal) {
        modal = uploadModal(props);
    } else if (props.showImageModal) {
        modal = imageModal(props);
    } else if (props.showImageSliderModal) {
        modal = imageSliderModal(props);
    }

    return modal;
}
