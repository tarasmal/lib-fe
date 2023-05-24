import axios from "axios";
import {applicationsApi} from "./constants";

export const deleteApplication = async (id) => {
    await axios.delete(applicationsApi, {params: {id}})
}

export const updateApplication = async (id, data) => {
    await axios.post(applicationsApi, data, {params: {id}})
}
