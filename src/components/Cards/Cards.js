import './Cards.scss';

import Card from './Card';
import React from 'react';

const Cards = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-3">
                    <Card />
                </div>
            </div>
        </section>
    );
};

export default Cards;
