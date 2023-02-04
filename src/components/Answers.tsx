import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { pointsForHouse } from "../features/housesSlice";
import { nextQuestion } from "../features/counterSlice";
import styled from "styled-components";

const AnswersList = styled.div`
    display: ${props => props.display ? "inline-block" : "none" || "inline-block"};
`;

const Answers = ({ answers }: any) => {
    const [display, setDisplay] = useState(1);
    const dispatch = useAppDispatch();

    const setPoints = (scores: object): void => {
        for (const house in scores) {
            const result: any = {
                house: house,
                score: scores[house]
            }
            dispatch(pointsForHouse(result));
        }

        setDisplay(0);
        dispatch(nextQuestion());
    }

    return (
        <AnswersList display={display}>
            {answers.map((answer: any, index: number) => (
                <button key={index} onClick={() => setPoints(answer.scores)}>{answer.title}</button>
            ))}
        </AnswersList>
    );
}

export default Answers;
