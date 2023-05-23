import axios from "axios";
import {applicationsApi, booksApi, studentsApi} from "./constants";

export const getAllBooks = async () => {
    return (await axios.get(booksApi)).data
}

export const getAllStudents = async () => {
    return (await axios.get(studentsApi)).data
}

export const getAllApplications = async () => {
    return (await axios.get(applicationsApi)).data
}
