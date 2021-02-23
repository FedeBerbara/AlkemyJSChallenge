import React from 'react'

//* Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TransactionForm from '../components/TransactionForm';
import Movements from '../components/Movements';

const Main = () => {
    return (
        <>
            <Navbar />
                <div className="container-fluid main-container">
                    <div className="row">
                        <TransactionForm />
                        <Movements />
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Main;