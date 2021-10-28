import LocalStorageService from "./LocalStorage";

export const userServices = {
    handleLogin,
    logout,
	setAuthInit
};

function handleLogin(resp) {
    // return resp.text().then((text) => {
    //     const data = text && JSON.parse(text);
    //         if (resp.status === 401) {
    //             // auto logout if 401 resp returned from api
    //             logout();
    //         }
    //         const error = (data && data.message) || resp.statusText;
    //         return Promise.reject(error);
    //     }
    //     return data;
    // });
}
function logout() {
    localStorage.removeItem("tza_access_token");
    window.location.href = "/";
}
function setAuthInit(_res) {
    LocalStorageService.setAccessToken(_res.token);
    LocalStorageService.setRoleToken(_res.data.user_details.role);
}
