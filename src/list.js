import React from 'react';
import STORE from './store';
import Card from './card';


export default function List(props) {
    return (
        <section className='List'>
            <header className='List-header'>
            <h2>
                {props.header}
            </h2>
            </header>
            <div className='List-cards'>
                {props.cards.map((card) => 
                <card 
                key={card.id}
                title={card.title}
                content={card.content}
                />)}
            </div>
        </section>
    );
}
