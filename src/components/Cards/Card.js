import './Card.scss';

import React from 'react';

export default ({ post }) => {
    return (
        <div className="card">
            <img className="card-img-top" src="..." alt="..." />
            <div className="card-body">
                <h4 className="card-title">Заголовок карточки {post}</h4>
                <h6 className="card-subtitle">Подзаголовок карточки</h6>
                <p className="card-text">Некоторый текст...</p>

                <button className="btn btn-light btn-block">Edit</button>

                <div
                    className="btn-toolbar justify-content-between"
                    role="group"
                >
                    <button className="btn btn-light">Delete</button>
                    <button className="btn btn-light">Upgrate</button>
                    <button className="btn btn-light">Cancel</button>
                </div>
            </div>
        </div>
    );
};
