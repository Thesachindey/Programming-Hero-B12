import React from 'react';

const Link = ({route}) => {
    return (
       <ul>
        <li><a href={route.path}>{route.name}</a></li>
       </ul>
    );
};

export default Link;