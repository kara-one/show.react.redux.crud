import './scss/App.scss';

import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import React from 'react';

function App() {
    return (
        <>
            <Header />

            <section className="container">
                <div className="row">
                    <Cards posts={[1,2,3]} />
                </div>
            </section>
        </>
    );
}

export default App;
