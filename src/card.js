import React from 'react';
import STORE from './store';



export default function Card(props) {
    return (
        <div className='Card'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}
