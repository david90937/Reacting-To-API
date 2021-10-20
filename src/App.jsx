import React, { useState, useEffect } from "react"
import MovieCard from "./components/MovieCard";
import PeopleCard from "./components/PeopleCard";

const App = () => {
    const [home, setHome] = useState(
    <div>
        <p>Welcome to my Stubio Ghibli Api project! This project is meant to be a miniature version of IMDB for studio Ghibli movies only. </p>
    </div>);
    const [filmloaded, setFilmLoaded] = useState(false);
    const [peopleloaded, setPeopleLoaded] = useState(false);
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const filmList = films.map(film => {
        return <MovieCard 
        title={film.title} 
        key={film.id} 
        description={film.description} 
        banner={film.movie_banner}
        release_date={film.release_date}
        rt_score={film.rt_score}
        ></MovieCard>
    })
    const peopleList = people.map(people => {
        return <PeopleCard 
        name={people.name} 
        key={people.id} 
        age={people.age} 
        gender={people.gender} 
        url={people.url}
        eye_color={people.eye_color}
        hair_color={people.hair_color}
        ></PeopleCard>
    })

    useEffect(() => {
        if (filmloaded === true){
            setHome('')
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
            setHome('')
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
        <div className="container text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGmHl63CmbiwbVHab3tFPX-ROXD0N5UvL8Q&usqp=CAU" alt="studio ghibli logo"></img>
            <div className="row">{home}</div>
            <button className="btn btn-primary mx-5" onClick={() => { handleFilmLoad(true); handlePeopleLoad(false)}}>Load Films</button>
            <button className="btn btn-success mx-5" onClick={() => { handlePeopleLoad(true); handleFilmLoad(false)}}>Load People</button>
            <div className="row justify-content-center">{filmList}</div>
            <div className="row justify-content-center">{peopleList}</div>
        </div>
    )
}
export default App