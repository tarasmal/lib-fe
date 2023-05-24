import React, {useEffect, useReducer, useRef} from 'react';
import './FormTemplate.styles.css';
import Input from "../../atoms/Input/Input";

const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.value,
            };
        default:
            return state;
    }
};

const FormTemplate = ({ initState, setIsFormOpened }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const handleInputChange = (field, value) => {
        dispatch({ type: 'UPDATE_FIELD', field, value });
    };
    useEffect(() => {
        document.body.addEventListener('click', (event ) => {
            event.stopPropagation()
            setIsFormOpened(false)
        })
    }, [])
    return (
        <div className="overlay">
            <div className="form">
                {Object.keys(state).map((field) => (
                    <Input
                        key={field}
                        label={field}
                        getValue={(inputValue) => handleInputChange(field, inputValue)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FormTemplate;
