import './Cards.scss';

import Card from './Card';
import React from 'react';

const Cards = ({ posts }) => {
    if (!posts.length) {
        return (
            <div className="alert alert-info col-12" role="alert">
                Постов нет
            </div>
        );
    }

    return posts.map((post) => (
        <div className="col-3">
            <Card post={post} key={post} />
        </div>
    ));
};

export default Cards;
