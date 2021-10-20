import React, { useState, useEffect } from "react";

const MovieCard = ({ title, banner, description, release_date, rt_score }) => {
    const [score, setScore] = useState(Number(rt_score));
    useEffect(() => {
        if (score >= 75){
            setScore( <span style={{color:'green'}}>{score}</span>)
        }
        else {
            setScore(<span style={{color:'red'}}>{score}</span>)
        }
    }, [])
    return (
            <div className="col-6">
                <div className="card my-2">
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <img src={banner} alt="movie poster" className="card-img" />
                        <p>Release date: {release_date}</p>
                        <p>Rotten Tomato Score: {score}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
    )
}

export default MovieCard