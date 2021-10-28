import { authConstants } from "../../constants/auth/auth.type"

export const setAuthDetails= (res) => {
	return {
		type: authConstants.SET_AUTH_DETAILS,
		payload: res
	}
}