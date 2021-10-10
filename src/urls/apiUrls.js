const apiUrl = process.env.REACT_APP_API_URL;
export const userUrls = {
    getUrlByUserType: (type) => {
        return {
            LOGIN: `${apiUrl}/${type}/login`,
            REGISTER: `${apiUrl}/${type}/`,
            DELETE: "something"
        };
    }
};
