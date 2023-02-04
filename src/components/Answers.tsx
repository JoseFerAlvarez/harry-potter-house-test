import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { pointsForHouse } from "../features/housesSlice";
import { nextQuestion } from "../features/counterSlice";
import styled from "styled-components";
import { IntScore, IntAnswer } from "../Interfaces/Question";

const AnswersList = styled.div`
    display: ${props => props.display ? "inline-block" : "none" || "inline-block"};
`;

const Answers = ({ answers }: { answers: IntAnswer[] }): JSX.Element => {
    const [display, setDisplay] = useState<number>(1);
    const dispatch = useAppDispatch();

    const setPoints = (scores: IntScore): void => {
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
            {answers.map((answer: IntAnswer, index: number) => (
                <button key={index} onClick={() => setPoints(answer.scores)}>{answer.title}</button>
            ))}
        </AnswersList>
    );
}

export default Answers;
