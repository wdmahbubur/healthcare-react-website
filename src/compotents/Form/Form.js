import React from 'react';

const Form = ({ handleForm, children }) => {
    return (
        <Form onSubmit={handleForm}>
            {children}
        </Form>
    );
};

export default Form;