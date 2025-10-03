import React from 'react';

const FormAction = () => {
const handelFormData=(formData)=>{
console.log(formData.get('name'));
console.log(formData.get('email'));
}

    return (
        <>
        <h1>React From</h1>
            <form action={handelFormData}>
                <input placeholder='Enter email' type="email" name="email" id="" />
                <br />
                <input placeholder='enter name' type="text" name="name" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>

    );
};

export default FormAction;