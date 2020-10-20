import { createStore } from "redux";
import { agencyReducer } from "../AgencyReducer/AgencyReducer";


export const agencyStore = createStore(agencyReducer);