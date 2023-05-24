import React, {useEffect, useReducer} from 'react';
import './FormTemplate.styles.css';
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

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
    const [state, dispatch] = useReducer(reducer, Object.assign({}, initState));

    const handleInputChange = (field, value) => {
        dispatch({ type: 'UPDATE_FIELD', field, value });
    };
    console.log(state)
    useEffect(() => {
        const overlay = document.getElementById('overlay')
        const form = document.getElementsByClassName('form')[0]
        overlay.addEventListener('click', () => {
            setIsFormOpened(false)
        })
        form.addEventListener('click', (event) => {
            event.stopPropagation()
        })
    }, [])
    return (
        <div id={'overlay'}>
            <div className="form">
                <div>
                    {Object.keys(state).map((field) => (
                        <Input
                            key={field}
                            label={field}
                            getValue={(inputValue) => handleInputChange(field, inputValue)}
                        />
                    ))}
                </div>
                <div>
                    <Button text={'Submit'} variant={'green'}/>
                </div>
            </div>
        </div>
    );
};

export default FormTemplate;
