import React from 'react';
import styled from "styled-components";

const WinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: var(--font-open);

    p{
        font-size: 30px;
        font-weight: 600;
    }

    p:last-child{
        font-size: 20px;
        font-weight: 400;
    }
`;

const Image = styled.div`
    border-radius: 20px;
    img{
        max-height: 600px;
        border-radius: 20px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Winner = ({ winner }) => {
    return (
        <WinnerContainer>
            <Image>
                <img src='https://images.unsplash.com/photo-1632266484284-a11d9e3a460a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80' alt='' />
            </Image>
            <p>{winner}</p>
            <p>Enjoy your stay at Hogwarts!</p>
        </WinnerContainer>
    );
}

export default Winner;
