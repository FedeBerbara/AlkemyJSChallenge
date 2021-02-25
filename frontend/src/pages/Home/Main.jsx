import React, { useState, useEffect } from 'react';

//* Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TransactionForm from './components/TransactionForm';
import Movements from './components/Movements';

const Main = () => {

    const [ operations, setOperations ] = useState();

    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/api/movements/sorted/sorted');
        const data = await response.json();
        setOperations(data);
        console.log(data);
    }


    useEffect(() => {
        fetchData()
    }, []);

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