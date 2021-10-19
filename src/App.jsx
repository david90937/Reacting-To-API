import React, { useState, useEffect } from "react"
import MovieCard from "./components/MovieCard";
import PeopleCard from "./components/PeopleCard";

const App = () => {

    const [filmloaded, setFilmLoaded] = useState(false);
    const [peopleloaded, setPeopleLoaded] = useState(false);
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const filmList = films.map(film => {
        return <MovieCard title={film.title} key={film.id} description={film.description} banner={film.movie_banner}></MovieCard>
    })
    const peopleList = people.map(people => {
        return <PeopleCard name={people.name} key={people.id} age={people.age} gender={people.gender} url={people.url}></PeopleCard>
    })

    useEffect(() => {
        if (filmloaded === true){
            fetch('https://ghibliapi.herokuapp.com/films/')
                .then(response => response.json())
                .then(films => setFilms(films));
        }
        else {
            setFilms([])
        }
    }, [filmloaded])
    useEffect(() => {
        if (peopleloaded === true){
            fetch('https://ghibliapi.herokuapp.com/people/')
                .then(response => response.json())
                .then(people => setPeople(people));
        }
        else {
            setPeople([]);
        }
    }, [peopleloaded])

    const handleFilmLoad = (param) => {
        setFilmLoaded(param)
    }
    const handlePeopleLoad = (param) => {
        setPeopleLoaded(param)
    }

    return (
        <div className="container">
            <button className="btn btn-primary mx-1" onClick={() => { handleFilmLoad(true); handlePeopleLoad(false)}}>Load Films</button>
            <button className="btn btn-success mx-1" onClick={() => { handlePeopleLoad(true); handleFilmLoad(false)}}>Load People</button>
            <div className="row justify-content-center">{filmList}</div>
            <div className="row justify-content-center">{peopleList}</div>
        </div>
    )
}
export default App