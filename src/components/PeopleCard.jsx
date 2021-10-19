import React from "react";

const PeopleCard = ({ name, age, gender, url }) => {
    return (
            <div className="col-6">
                <div className="card my-2">
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p>Age: {age}</p>
                        <p>Gender: {gender}</p>
                        <p><a href={url} target="_blank" rel="noreffer">API resource link</a></p>
                    </div>
                </div>
            </div>
    )
}

export default PeopleCard