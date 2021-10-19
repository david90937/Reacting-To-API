import React from "react";

const MovieCard = ({ title, banner, description }) => {
    return (
            <div className="col-6">
                <div className="card my-2">
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <img src={banner} alt="movie poster" className="card-img" />
                        <p>{description}</p>
                    </div>
                </div>
            </div>
    )
}

export default MovieCard