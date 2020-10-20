import { FETCH_ORDER_DATA, FETCH_REVIEW_DATA, FETCH_SERVICES_FALIURE, FETCH_SERVICES_SUCCESS, FETCH_SERVICE_DATA, LOGIN_NEW_USER } from "../AgencyActions/AgencyActions";


const initialState = {
    loading: true,
    user : [],
    services : [],
    reviews: [],
    orders:[],
    error: ''
}


export const agencyReducer = (state = initialState, actions) => {
    switch (actions.type){
        case LOGIN_NEW_USER :
            const newUser = actions.user;
            return {
                ...state,
                user : newUser
            }
        case FETCH_SERVICE_DATA :
            return {
                ...state,
                loading : true
            }
        case FETCH_SERVICES_SUCCESS :
            return {
                ...state,
                loading: false,
                services: actions.services,
                error: ''
            }
        case FETCH_SERVICES_FALIURE :
            return {
                ...state,
                loading: false,
                services: [],
                error: actions.error
            }
        case FETCH_REVIEW_DATA:
            return {
                ...state,
                reviews: actions.reviews
            }
        case FETCH_ORDER_DATA:
            return{
                ...state,
                orders: actions.orders
            }
        default:
            return state;
    }
}