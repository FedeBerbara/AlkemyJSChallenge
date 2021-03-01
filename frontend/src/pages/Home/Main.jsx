import React, { useState, useEffect } from 'react';

//* Components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TransactionForm from './components/TransactionForm';
import Movements from './components/Movements';
import Balance from './components/Balance';

//* Services
import {getMovementsApi} from '../../services/budgetServices'


const Main = () => {

    const [ operations, setOperations ] = useState([]);

    const fetchData = async () => {
        const data = await getMovementsApi();
        setOperations(data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <TransactionForm />
                        <Balance />
                        {operations.map(i => (
                            <Movements
                            id={i._id}
                            concept={i.concept}
                            amount={i.amount}
                            date={i.date}
                            type={i.type}/>
                        ))}
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Main;