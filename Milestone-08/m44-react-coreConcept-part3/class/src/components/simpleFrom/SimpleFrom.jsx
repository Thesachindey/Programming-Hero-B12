import React from 'react';

const SimpleFrom = () => {

const handelSubmit=(e)=>{
    e.preventDefault();// prevent default behavior
    console.log(e.target.name.value);
    console.log(e.target.email.value);
}

    return (
        <div>
            <h1>Explore react from</h1>
            <form onSubmit={handelSubmit}>
                <input name='name' type="text" placeholder='Enter your name' />
                <br />
                <input type="email" name='email' placeholder='enter your mail' />
                <hr />
               <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;