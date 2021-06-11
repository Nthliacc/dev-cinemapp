import React from 'react';
import { FavoriteStar } from '../../Componentes/FavoriteStar';
import {
    Container,
    FavoriteCard,
    FavoriteTitle
} from './style';

export const Favorites = ({show, favoritesList, onClickFavorite}) => {

    return(
        <Container show={show}>
            <h2>Favoritos</h2>
            
            {favoritesList.length !== 0 ? favoritesList?.map(element => (
                <FavoriteCard key={element.imdbID}>
                    <FavoriteTitle>{element.Title} - {element.Year}</FavoriteTitle>
                    <FavoriteStar movie={element} onClickFavorite={onClickFavorite}/>
                </FavoriteCard>
                ))
                :
                <p style={{color: 'white'}}>Você não adicionou favorito</p>
            }

        </Container>
    )
}
