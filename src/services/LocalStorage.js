const LocalStorageService = (function () {
    /**---set token in localStorage */
    function __setAccessToken(token) {
        window.localStorage.removeItem("tza_access_token");
        localStorage.setItem("tza_access_token", token);
    }

    /**---get token from localStorage */
    function __getAccessToken(token) {
        if (localStorage.getItem("tza_access_token")) {
            return localStorage.getItem("tza_access_token");
        }
        return false;
    }

    /**---get token from localStorage */
    function __removeToken() {
        localStorage.removeItem("tza_access_token");
    }

    /**---set role  to localStorage */
    function __setRole(_role) {
        window.localStorage.removeItem("tza_role");
        localStorage.setItem("tza_role", _role);
    }
    function __getRole() {
        if (localStorage.getItem("tza_role")) {
            return localStorage.getItem("tza_role");
        }
        return null;
    }
    /**---remove role  to localStorage */
    function __removeRole(_role) {
        window.localStorage.removeItem("tza_role");
    }

    return {
        setAccessToken: __setAccessToken,
        getAccessToken: __getAccessToken,
        removeAccessToken: __removeToken,
        setRole: __setRole,
        getRole: __getRole,
        removeRole: __removeRole
    };
})();

export default LocalStorageService;
