import React from 'react';

function Genre(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {props.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Genre;