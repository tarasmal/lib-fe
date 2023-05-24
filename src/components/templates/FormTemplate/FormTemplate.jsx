import React, {useReducer} from 'react';

const reducer = (state, action) =>  {

}

const FormTemplate = (
    {
        initState,
        getState,
    }
) => {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <div className={'form'}>
            form
        </div>
    );
};

export default FormTemplate;
