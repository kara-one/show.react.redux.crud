import './Cards.scss';

import AddCard from './AddCard';
import Card from './Card';
import { CardColumns } from 'react-bootstrap';
import React from 'react';

const Cards = ({ posts }) => {
    if (!posts.length) {
        return (
            <div className="alert alert-info col-12" role="alert">
                Постов нет
            </div>
        );
    }

    return (
        <>
            <CardColumns>
                {posts.map((post) => (
                    <Card post={post} key={post} />
                ))}
            </CardColumns>

            <AddCard />
        </>
    );
};

export default Cards;
