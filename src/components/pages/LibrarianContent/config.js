import {getAllApplications, getAllBooks, getAllStudents} from "../../../api/librarian";

export const config = [
    {
        title: 'Students',
        handler: getAllStudents
    },
    {
        title: 'Applications',
        handler: getAllApplications
    },
    {
        title: 'Books',
        handler: getAllBooks
    },
]


