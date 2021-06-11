import styled from 'styled-components';

export const Container = styled.div`
    display: ${({ show }) => show === true ? 'flex' : 'none' };
    gap: 12px;
    flex-direction: column;
    align-items: center;
    background-color: #ff0000ad;
    margin: 20px 0;
    padding: 20px;
    width: 30%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @media (max-width: 645px) {
        width: 100%;
        height: 90%;
        position: absolute;
        background-color: red;
    }
`;

export const FavoriteCard = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #1313131f;
    border-radius: 10px;
`;

export const FavoriteTitle = styled.p`
   font-weight: bold;
`;
