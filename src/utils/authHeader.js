export function authHeader() {
    // return authorization header with token
    let _token = JSON.parse(localStorage.getItem("tz_access_token"));

    if (_token) {
        return { Authorization: "Bearer " + _token };
    } else {
        return {};
    }
}