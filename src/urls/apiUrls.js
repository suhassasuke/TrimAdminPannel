const apiUrl = process.env.REACT_APP_API_URL;
const userUrls = {
    getUrlByUserType: (type) => {
        return {
            LOGIN: `${apiUrl}/api/${type}/login`,
            REGISTER: `${apiUrl}/${type}/register`,
            DELETE: "something"
        };
    },
	getUserDetailsByRole: (role)=> {
		if(role === "freelancer"){
			return `${apiUrl}/api/freelancers/freelancer_details`
		}
	}
};
const ordersUrls = {
    get_orders: `${apiUrl}/api/dashboard_details/booking_history`,
    getOrdersByStatus: (type, f_id) =>
        `${apiUrl}/api/book_service/service_booking?freelancers__id=${f_id}&booking_status=${type}`,
    accept_decline_service: `${apiUrl}/api/book_service/accept_service`
};

export const apiUrls = {
    userUrls,
    ordersUrls
};
