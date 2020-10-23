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
                    <Cards posts={[1,2,3,4,5,6,7,8,9,10]} />
                </div>
            </section>
        </>
    );
}

export default App;
