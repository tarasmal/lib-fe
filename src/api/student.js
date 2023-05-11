import axios from "axios";
import {booksApi} from "./constants";

const getAllBooks = async () => {
    const response = await axios.get(booksApi)
    return response
}
