import './Cards.scss';

import AddCard from './AddCard';
import Card from './Card';
import { CardColumns } from 'react-bootstrap';
import React from 'react';
import { connect } from "react-redux";

const Cards = ({ syncCards }) => {
    if (!syncCards.length) {
        return (
            <div className="alert alert-info col-12" role="alert">
                Постов нет
            </div>
        );
    }

    return (
        <>
            <CardColumns>
                {syncCards.map((post) => (
                    <Card post={post} key={post.postId} />
                ))}
            </CardColumns>

            <AddCard />
        </>
    );
};

const mapStateToProps = (state) => ({
    syncCards: state.cards.cards,
});

export default connect(mapStateToProps, null)(Cards);
