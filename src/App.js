import './scss/App.scss';

import Cards from './components/Cards/Cards';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import React from 'react';

function App() {
    return (
        <>
            <Header />

            <section className="after-header">
                <Container>
                    <Cards />
                </Container>
            </section>
        </>
    );
}

export default App;
