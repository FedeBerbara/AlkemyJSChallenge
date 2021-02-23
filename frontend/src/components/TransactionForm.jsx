import React, { useState } from 'react';
import Swal from 'sweetalert2';

const TransactionForm = () => {

    const [ movementData, setMovementData ] = useState({
        concept: '',
        amount: '',
        type: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setMovementData(prevState => ({
            ...prevState,
            [name] : value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (movementData.concept === '' && movementData.amount === '' && movementData.type === '') {
            Swal.fire({
                title: '¡Attention!', 
                text: 'You cannot send empty information, check the data and try again',
                icon: 'error',
                timer: 2000,
            });
        } else {
            Swal.fire({
                title: '¡Great!',
                text: 'Operation successfully registered',
                icon: 'success',
                timer: 2000,
            })
            console.log(movementData);
            setMovementData({
                concept: '',
                amount: '',
                type: '',
            });
        }
    }

    return (
        <div className="col-12 col-lg-4 form-container">
            <div className="form-header">
                <h4 className="form-description">Complete the form to upload an operation</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="concept">Concept: </label>
                    <input name="concept" 
                        value={movementData.concept} 
                        type="text" 
                        onChange={handleChange} 
                        className="form-control"
                        placeholder="Ingress the concept" 
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount: </label>
                    <input name="amount" 
                        value={movementData.amount} 
                        type="text" 
                        onChange={handleChange}
                        className="form-control" 
                        placeholder="¿How much?" 
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type: </label>
                    <input name="type" 
                        value={movementData.type} 
                        onChange={handleChange} 
                        type="text" 
                        className="form-control" 
                        placeholder="¿What kind of movement is it? ¿ Is it an income or an expenses?" 
                        />
                </div>
                <button 
                    onSubmit={handleSubmit}
                    type="submit" 
                    className="btn btn-outline-success btn-block mt-3">
                    Send!
                </button>
            </form>
        </div>
    )
}

export default TransactionForm;