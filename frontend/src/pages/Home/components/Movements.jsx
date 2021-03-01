import React from 'react';
import Swal from 'sweetalert2';

const Movements = (props) => {

    const { _id, concept, amount, date, type } = props;

    const id = _id;

    const onEdit = () => {};
    
    const onDelete = async id => {

        Swal.fire({
            title: 'Stop!!',
            text: '¿Are you sure you want to delete this movement?',
            showDenyButton: true,
            showConfirmButton: true,
            showLoaderOnConfirm: true,
            showLoaderOnDeny: false,
            icon: 'warning',
        });

    };

    return (
        <div className="col-12 movements-container">
            <div className="card">
                <div className="card-body card-container">
                    <h5 className="movement-title"> {concept} </h5>
                    <h6 className="movement-type text-muted"> {type} </h6>
                    <p className="movement-amount">$ {amount} </p>
                    <p className="movement-date"> {date} </p>
                    <div className="btn-container">
                        <button onClick={onEdit}
                            className="card-btn btn btn-outline-info">
                            Edit
                        </button>
                        <button onClick={onDelete} 
                            className="card-btn btn btn-outline-danger ml-2">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movements;