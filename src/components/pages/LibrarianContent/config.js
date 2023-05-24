import {getAllApplications, getAllBooks, getAllStudents} from "../../../api/general";
import {deleteApplication} from "../../../api/application";
import {deleteStudent} from "../../../api/student";

export const config = [
    {
        title: 'Students',
        handler: getAllStudents,
        deleteHandler: () => {},
        updateHandler: () => {},
        formConfig: {}
    },
    {
        title: 'Applications',
        handler: getAllApplications,
        deleteHandler: () => deleteApplication,
        updateHandler: () => {},
        formConfig: {
            returnDate: '',
            bookId: ''
        },
    },
    {
        title: 'Books',
        handler: getAllBooks,
        deleteHandler: () => {},
        updateHandler: () => {},
        formConfig: {}
    },
]


