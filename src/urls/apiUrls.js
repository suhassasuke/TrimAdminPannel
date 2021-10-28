const apiUrl = process.env.REACT_APP_API_URL;
export const userUrls = {
    getUrlByUserType: (type) => {
        return {
            LOGIN: `${apiUrl}/api/${type}/login`,
            REGISTER: `${apiUrl}/${type}/register`,
            DELETE: "something"
        };
    }
};
