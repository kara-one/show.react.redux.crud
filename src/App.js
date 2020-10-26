import './scss/App.scss';

import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import React from 'react';
import Recipes from './components/Recipes/Recipes';

function App() {
    return (
        <>
            <Header />

            <section className="after-header">
                <Container>
                    <Recipes />
                </Container>
            </section>
        </>
    );
}

export default App;
