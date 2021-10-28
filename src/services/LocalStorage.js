const LocalStorageService = (function () {
    let __service;

    function __getService() {
        if (!__service) {
            __service = this;
            return __service;
        }
    }

    /**---set token in localStorage */
    function __setAccessToken(token) {
        window.localStorage.removeItem("tza_access_token");
        localStorage.setItem("tza_access_token", token);
    }

    /**---get token from localStorage */
    function __getAccessToken(token) {
        if (localStorage.getItem("tza_access_token")) {
            return localStorage.getItem("tza_access_token");
        } else {
            return false;
        }
    }

    /**---get token from localStorage */
    function __removeToken() {
        localStorage.removeItem("tza_access_token");
    }

    return {
        getService: __getService,
        setAccessToken: __setAccessToken,
        getAccessToken: __getAccessToken,
        removeAccessToken: __removeToken
    };
})();

export default LocalStorageService;
