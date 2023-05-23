import axios from "axios";
import {applicationsApi} from "./constants";

export const deleteApplication = async (id) => {
    await axios.delete(applicationsApi, {params: {id}})
}
