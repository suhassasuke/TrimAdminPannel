import { API } from "../../constants/common/api.type";

// action creator funtion
export default function actionCreator({
    url = "",
    method = "GET",
    data = null,
    accessToken = null,
    onSuccess = null,
    onFailure = null,
    label = "",
    headersOverride = null
}) {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            accessToken,
            onSuccess,
            onFailure,
            label,
            headersOverride
        }
    };
}
