/**React */
import React from 'react';
/**Styles */
import { WinnerContainer, Image } from '../styles/StylesWinner';

const Winner = ({ winner }: { winner: string }) => {
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
