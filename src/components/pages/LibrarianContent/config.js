import {getAllApplications, getAllBooks, getAllStudents} from "../../../api/general";
import {deleteApplication, updateApplication} from "../../../api/application";
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
        updateHandler: () => updateApplication,
        formConfig: {
            return_date: '',
            id_book: ''
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


