/**React */
import React from 'react';
/**Styles */
import { WinnerContainer, Image } from '../styles/StylesWinner';
import howgartscard from "../assets/hogwartscard.jpg";
/**Helpers */
import { setPhrase } from '../helpers/winner';

const Winner = ({ winner }: { winner: string }) => {
    return (
        <WinnerContainer>
            <Image>
                <img src={howgartscard} alt='Hogwarts Card' />
            </Image>
            <p>{winner}</p>
            <p>{setPhrase(winner)}</p>
        </WinnerContainer>
    );
}

export default Winner;
