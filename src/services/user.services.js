import LocalStorageService from "./LocalStorage";

export const userServices = {
    logout,
    setAuthInit
};

function logout() {
    LocalStorageService.removeAccessToken();
	LocalStorageService.removeRole();
    window.location.href = "/";
}
function setAuthInit(_res) {
    LocalStorageService.setAccessToken(_res.token);
    LocalStorageService.setRole(_res.data.user_details.role);
}
