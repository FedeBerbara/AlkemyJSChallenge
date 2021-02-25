import React from 'react'

const Movements = (props) => {

    const { id, concept, amount, date, type } = props;

    return (
        <div className="col-12 col-lg-6 movements-container">
            <div className="row">
                <div className="col-12 col-lg-6 card-container-left">
                    <div className="card-body">
                        <h5 className="movement-title">{concept}</h5>
                        <h6 className="movement-type mb-2 text-muted">{type}</h6>
                        <p className="movement-amount">${amount}</p>
                        <p className="movement-date">{date}</p>
                        <button className="card-btn btn btn-outline-info">Edit</button>
                        <button className="card-btn btn btn-outline-danger ml-2">Delete</button>
                    </div>
                    <div className="card-body">
                        <h5 className="movement-title">Car Insurance</h5>
                        <h6 className="movement-type mb-2 text-muted">Expenses</h6>
                        <p className="movement-amount">$ 1500</p>
                        <button className="card-btn btn btn-outline-info">Edit</button>
                        <button className="card-btn btn btn-outline-danger ml-2">Delete</button>
                    </div>
                    <div className="card-body">
                        <h5 className="movement-title">Car Insurance</h5>
                        <h6 className="movement-type mb-2 text-muted">Expenses</h6>
                        <p className="movement-amount">$ 1500</p>
                        <button className="card-btn btn btn-outline-info">Edit</button>
                        <button className="card-btn btn btn-outline-danger ml-2">Delete</button>
                    </div>
                    <div className="card-body">
                        <h5 className="movement-title">Car Insurance</h5>
                        <h6 className="movement-type mb-2 text-muted">Expenses</h6>
                        <p className="movement-amount">$ 1500</p>
                        <button className="card-btn btn btn-outline-info">Edit</button>
                        <button className="card-btn btn btn-outline-danger ml-2">Delete</button>
                    </div>
                    <div className="card-body">
                        <h5 className="movement-title">Car Insurance</h5>
                        <h6 className="movement-type mb-2 text-muted">Expenses</h6>
                        <p className="movement-amount">$ 1500</p>
                        <button className="card-btn btn btn-outline-info">Edit</button>
                        <button className="card-btn btn btn-outline-danger ml-2">Delete</button>
                    </div>
                </div>
                <div className="col-12 col-lg-6 card-container-right">
                    <div className="card-body">
                        <h5 className="movement-title">Car Insurance</h5>
                        <h6 className="movement-type mb-2 text-muted">Expenses</h6>
                        <p className="movement-amount">$ 1500</p>
                        <button className="card-btn btn btn-outline-info">Edit</button>
                        <button className="card-btn btn btn-outline-danger ml-2">Delete</button>
                    </div> 
                    <div className="card-body">
                        <h5 className="movement-title">Car Insurance</h5>
                        <h6 className="movement-type mb-2 text-muted">Expenses</h6>
                        <p className="movement-amount">$ 1500</p>
                        <button className="card-btn btn btn-outline-info">Edit</button>
                        <button className="card-btn btn btn-outline-danger ml-2">Delete</button>
                    </div>
                    <div className="card-body">
                        <h5 className="movement-title">Car Insurance</h5>
                        <h6 className="movement-type mb-2 text-muted">Expenses</h6>
                        <p className="movement-amount">$ 1500</p>
                        <button className="card-btn btn btn-outline-info">Edit</button>
                        <button className="card-btn btn btn-outline-danger ml-2">Delete</button>
                    </div>
                    <div className="card-body">
                        <h5 className="movement-title">Car Insurance</h5>
                        <h6 className="movement-type mb-2 text-muted">Expenses</h6>
                        <p className="movement-amount">$ 1500</p>
                        <button className="card-btn btn btn-outline-info">Edit</button>
                        <button className="card-btn btn btn-outline-danger ml-2">Delete</button>
                    </div>
                    <div className="card-body">
                        <h5 className="movement-title">Car Insurance</h5>
                        <h6 className="movement-type mb-2 text-muted">Expenses</h6>
                        <p className="movement-amount">$ 1500</p>
                        <button className="card-btn btn btn-outline-info">Edit</button>
                        <button className="card-btn btn btn-outline-danger ml-2">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movements;