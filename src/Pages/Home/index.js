import axios from 'axios';
import React, { useState } from 'react';
import {
    Wrapper,
    Container,
    Header,
    SearchContainer,
    MoviesContainer,
    MovieCard,
    PosterMovie,
    InfosMovie,
    TitleMovie,
    YearMovie,
    Error,
    InfosMovieHeard,
    InfosMovieFooter, 
} from './style';
import iconPopcorn from '../../Assets/popcorn.png'
import {Favorites} from '../Favorites';
import { FavoriteStar } from '../../Componentes/FavoriteStar';

export const Home = () => {
    const [ movieValue, setMovieValue ] = useState("");
    const [ movies, setMovies ] = useState([]);
    const [ response, setResponse ] = useState({});
    const [ showFavorites, setShowFavorites ] = useState(false);
    const [favoritesList, setFavoritesList] = useState([]);
    
    const getMovies = async() => {
        try {
            const { data } = await axios.get(
                `http://www.omdbapi.com/?apikey=925eba28&s=${movieValue}`);
                
            if(data.Response === "True" ){
                setMovies(data.Search);
                setResponse(data)
            } else{
                setResponse(data)
            }
            setShowFavorites(false);
            
        } catch (error) {
            console.error(error);
        }
    };


    const toggleMovieFavorites = (movie) => {

        const isMovieInFavorites = favoritesList.find((eachMovie) => {
        return eachMovie.Title === movie.Title;
        });
      
        if (isMovieInFavorites) {
            
            const favoritesCopy = favoritesList.filter((eachMovie) => {
            return eachMovie.Title !== movie.Title;
            });
    
            setFavoritesList(favoritesCopy);
            
        } else {
            const favoritesCopy = [...favoritesList, { ...movie, favorite: true }];
            setFavoritesList(favoritesCopy);
        }
    };

    return(
        <Wrapper>
            <Header>
                <h1>CinemApp 🍿 </h1>
                <p>Bem-vindo ao mundo espetacular do cinema</p>
            </Header>
            <SearchContainer>
                <input 
                    onChange={(event) => setMovieValue(event.target.value)}
                    placeholder='Buscar filme'
                />
                <button onClick={() => getMovies()}>Buscar</button>
                <button onClick={() => setShowFavorites(!showFavorites)}>Favoritos</button>
            </SearchContainer> 
            <Container>
                { response.Response === "True" ? 
                    <MoviesContainer show={showFavorites}>
                        {movies?.map( (movie) => (
                                <MovieCard key={movie.imdbID}>
                                    <PosterMovie src={`${movie.Poster === "N/A"? 'https://assistironline.net/wp-content/uploads/2020/10/default-movie.png': movie.Poster}`} alt={'Imagem do Filme'}/>
                                    <InfosMovie>
                                        <InfosMovieHeard>
                                            <TitleMovie>{movie.Title}</TitleMovie>
                                            <YearMovie>{movie.Year} - {movie.Type}</YearMovie>
                                        </InfosMovieHeard>
                                        <InfosMovieFooter>
                                            <FavoriteStar movie={movie} onClickFavorite={toggleMovieFavorites}/>
                                        </InfosMovieFooter>
                                    </InfosMovie>
                                </MovieCard>
                        ))}
                    </MoviesContainer>
                    : 
                    <Error>
                        <img alt='icon de pipoca' src={iconPopcorn}/>
                        <h2 style={{color: 'white'}}>Nenhum filme na busca</h2>
                    </Error>
                }
                <Favorites show={showFavorites} onClickFavorite={toggleMovieFavorites} favoritesList={favoritesList}/>
            </Container>
        </Wrapper>
    )
}
