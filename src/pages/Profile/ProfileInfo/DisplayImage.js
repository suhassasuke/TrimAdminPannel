import {
    Box,
    List,
    ListItem,
    ListItemText,
    Popover,
    Slide
} from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileImageDefault from "../../../assets/images/default_profile_image.png";
import "../profile.scss";
import EditIcon from "@material-ui/icons/Edit";
import ModalUi from "../../../components/Modal/Modal";
import ToastService from "../../../services/toast.services";
import { authUserActions } from "../../../redux/actions/auth/auth.actions";
import LocalStorageService from "../../../services/LocalStorage";

const FadeTransition = React.forwardRef((props, ref) => {
    return <Slide ref={ref} {...props} direction="right" />;
});

export default function DisplayImage(props) {
    const {
        user_details: {
            profile_image,
            user_details: { first_name }
        }
    } = useSelector((state) => state.AuthReducer);

    const dispatch = useDispatch();

    const [profileImage, setProfileImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showImageModal, setShowImageModal] = useState(false);
    const [showImageUploadedModal, setShowImageUploadedModal] = useState(false);
    const imageUploadRef = useRef(null);
    const popoverRef = useRef(null);

    const handleEditClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "edit_image_popup" : undefined;

    function openUploader() {
        imageUploadRef.current.click();
    }
    function handleImageUpload(e) {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        setSelectedFile(e.target.files[0]);
        setShowImageUploadedModal(true);
    }
    function changeImageUpload(_e) {
        setShowImageUploadedModal(false);
        ToastService.notify("Uploading image");
        console.log(selectedFile);
        let formData = new FormData();
        formData.append("profile_image", selectedFile);
        dispatch(
            authUserActions.setProfilePicture(
                LocalStorageService.getRole(),
                formData
            )
        );
    }

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    useEffect(() => {
        if (profile_image) setProfileImage(profile_image);
    }, [profile_image]);
    return (
        <>
            <Box
                component="div"
                className="tmz__profile--image"
                position="relative"
            >
                <Box component="div" className="tmz__profile--image_wrapper">
                    {profileImage ? (
                        <img src={profileImage} alt={first_name} />
                    ) : (
                        <img src={ProfileImageDefault} alt={first_name} />
                    )}
                </Box>
                <Box
                    component="div"
                    className="tmz__profile--image_actions"
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    onClick={handleEditClick}
                >
                    <EditIcon />
                </Box>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    ref={popoverRef}
                    TransitionComponent={FadeTransition}
                >
                    <List
                        component="nav"
                        aria-label="secondary mailbox folders"
                    >
                        <ListItem button onClick={openUploader}>
                            <ListItemText primary="Upload image" />
                        </ListItem>
                        {profileImage && (
                            <ListItem
                                button
                                onClick={() => setShowImageModal(true)}
                            >
                                <ListItemText primary="View image" />
                            </ListItem>
                        )}
                    </List>
                </Popover>
                <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="tmz__upload--profile_image"
                    multiple
                    type="file"
                    ref={imageUploadRef}
                    onChange={handleImageUpload}
                />
            </Box>
            {showImageModal && (
                <ModalUi
                    showImageModal={true}
                    isOpen={showImageModal}
                    modalTitle={"Profile Picture"}
                    image={profileImage}
                    maxWidth={"md"}
                    fullWidth={true}
                    actionButtonLabel={"Cancel"}
                    handleModalClose={() => setShowImageModal(false)}
                    imageWrapperClass={"tmz__profile--image_modal"}
                />
            )}
            {showImageUploadedModal && (
                <ModalUi
                    showImageModal={true}
                    isOpen={showImageUploadedModal}
                    modalTitle={"Preview Profile Picture"}
                    image={preview}
                    maxWidth={"md"}
                    fullWidth={true}
                    actionButtonLabel={"Upload"}
                    handleModalClose={changeImageUpload}
                    imageWrapperClass={"tmz__profile--image_modal"}
                />
            )}
        </>
    );
}
