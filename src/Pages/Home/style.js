import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: black;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: ${({ show }) => show ? 'space-between' : 'center'};
    background-color: black;

    @media (max-width: 645px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`;
export const Header = styled.div`
    color: white;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        color: #ff0000ad;
        font-size: 48px;
    }
`;

export const Error = styled.div`
    width: 80vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 200px;
    }
`;

export const SearchContainer = styled.div`
    padding: 32px 0;
    
    input{
        padding: 8px;
        width: 400px;
    }
    
    button{
        padding: 7px;
        margin-left: 6px;
        color: #ff0000ad;
        font-weight: bold;
        cursor: pointer;
        background-color: white;
        :hover{
            background-color: #ff0000ad;
            color: white;
        }
    }
    
    input, button{
        border-radius: 6px;
        border: none;
        outline: none;
    }

    @media (max-width: 645px) {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        input{
            width: 250px;
        }
    }
`;

export const MoviesContainer = styled.div`
    padding: 20px;
    display: grid;
    gap: 10px;
    grid-template-columns: ${({ show }) => show ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};

    @media (max-width: 645px) {
        display: flex;
        flex-direction: column;
    }
`;
export const MovieCard = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px;
    background-color: #ff0000ad;
    
    border-radius: 8px;
    @media (max-width: 645px) {
        margin-bottom: 12px;
        width: 90vw;
    }
`;
export const InfosMovie = styled.div`
    padding-left: 16px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const InfosMovieHeard = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
`;
export const InfosMovieFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 645px) {
        padding: 0 12px;
    }
`;

export const PosterMovie = styled.img`
    height: 150px;
    width: 100px;
    border-radius: 8px;
`;

export const TitleMovie = styled.h3`
    color: white;
    opacity: 1;
    width: 200px;
`;

export const YearMovie = styled.span`

`;

export const TypeMovie = styled.span`
`;