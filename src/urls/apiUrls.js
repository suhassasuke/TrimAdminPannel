const apiUrl = process.env.REACT_APP_API_URL;
export const userUrls = {
    getUrlByUserType: (type) => {
        return {
            LOGIN: "something",
            REGISTER: `${apiUrl}/${type}/register_freelancer`,
            DELETE: "something"
        };
    }
};
