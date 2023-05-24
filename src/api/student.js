import axios from "axios";
import {applicationsApi, studentsApi} from "./constants";

export const deleteStudent = async (id) => {
    await axios.delete(studentsApi, {params: {id}})
}
