export const LOGIN_NEW_USER = 'LOGIN_NEW_USER';
export const FETCH_SERVICE_DATA = 'FETCH_SERVICE_DATA';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FALIURE = 'FETCH_SERVICES_FALIURE';
export const FETCH_REVIEW_DATA = 'FETCH_REVIEW_DATA';
export const FETCH_ORDER_DATA = 'FETCH_ORDER_DATA';



export const addLoggedinUser = user => {
    return {type: LOGIN_NEW_USER, user}
}


export const fetchServicesData = () => {
    return { type: FETCH_SERVICE_DATA}
}

export const fetchServicesSuccess = services => {
    return {type: FETCH_SERVICES_SUCCESS, services}
}

export const fetchServicesFailure = error => {
    return {type: FETCH_SERVICES_FALIURE, error}
}

export const fetchReviewData = reviews => {
    return { type: FETCH_REVIEW_DATA, reviews}
}

export const fetchOrderData = orders => {
    return { type: FETCH_ORDER_DATA, orders}
}