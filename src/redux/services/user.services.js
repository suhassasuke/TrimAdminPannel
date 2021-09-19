import { userUrls } from "../../urls/Users/apiUrls";
import actionCreator from "../actions/common/actionCreator";
import { userConstants } from "../constants/auth/user.constants";


export const userServices = {
    login,
    logout,
    register,
    remove
}

function login(data, successCallback, failureCallback){
    return  actionCreator({
		method:'POST',
		data,
		url: userUrls.LOGIN,
		onSuccess: (result) => successCallback(result),
		onFailure: (error) => failureCallback(error),
		label: userConstants.LOGIN_REQUEST,
	});
}
function logout(){
    localStorage.removeItem('tz_access_token');
}
function register(user){
    
    return ;
}
function remove(){

    return;
}