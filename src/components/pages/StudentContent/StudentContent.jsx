import React, {useState} from 'react';
import {config} from "./config";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

const StudentContent = () => {
    const [items, setItems] = useState([])
    const [bookTitle, setBookTitle] = useState('')
    const [authors, setAuthors] = useState('')
    const [yearOfPublication, setYearOfPublication] = useState('')

    return (

        <div style={{display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div className={'student-container'}>
                    {
                        config.map((label, index) =>
                            <Input
                                label={label}
                                key={index}
                            />)
                    }
                </div>

            </div>
            <Button text={'Get a book!'}/>
        </div>
    );
};

export default StudentContent;
