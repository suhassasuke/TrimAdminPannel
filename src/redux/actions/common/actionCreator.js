import { API } from "../../constants/common/Api.Types";


// action creator funtion
export default function actionCreator({
    url = "",
    method = "GET",
    data = null,
    accessToken = null,
    onSuccess = () => { },
    onFailure = () => { },
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