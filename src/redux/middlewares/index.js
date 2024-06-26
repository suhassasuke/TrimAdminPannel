import axios from "axios";
import LocalStorageService from "../../services/LocalStorage";
import ToastService from "../../services/toast.services";
import { API } from "../constants/common/api.type";
import { accessDenied, apiError, apiStart, apiEnd } from "./middleware.action";

const apiMiddleware =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action) {
            next(action);

            if (action.type !== API) return;

            const {
                url,
                method,
                data,
                onSuccess,
                onFailure,
                label,
				accessToken,
                headersOverride
            } = action.payload;

            // axios default configs
            axios.defaults.baseURL = process.env.REACT_APP_API_URL || "";
            axios.defaults.headers.common["Content-Type"] = "application/json";
           
            if (LocalStorageService.getAccessToken()) {
                axios.defaults.headers.common[
                    "Authorization"
                ] = `JWT ${LocalStorageService.getAccessToken()}`;
            }

            if (headersOverride) {
                // adding new header for search api
                axios.defaults.headers.common["condition"] = headersOverride;
            }

            if (label) {
                dispatch(apiStart(label));
            }

            await axios({
                url,
                method,
                headersOverride,
                data
            })
                .then(({ data }) => {
                    dispatch(onSuccess(data));
                })
                .catch((error) => {
                    console.log("Error", url, error);

                    if (
                        error.response &&
                        (error.response.status === 403 ||
                            error.response.status === 401)
                    ) {
                        ToastService.notify(error.response.statusText);
                        LocalStorageService.removeAccessToken();
                        window.location.href = "/";
                        dispatch(accessDenied(window.location.pathname));
                    }
                    if (error.response && error.response.status === 500) {
                        dispatch(onFailure(error.response.data)); // enabling it to detect 500 errors
                    }
                })
                .finally(() => {
                    if (label) {
                        dispatch(apiEnd(label));
                    }
                });
        }
    };

export default apiMiddleware;
