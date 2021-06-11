import React from "react";
import styled from "styled-components";

const StarIcon = styled.p`
  font-size: 24px;
  cursor: pointer;
  user-select: none;
  color: ${({ favorite }) => (favorite ? "yellow" : "white")};
`;

export const FavoriteStar = ({ movie, onClickFavorite}) => {
  return (
    <StarIcon favorite={movie?.favorite} onClick={() => onClickFavorite(movie)}>
      ★
    </StarIcon>
  )
};
