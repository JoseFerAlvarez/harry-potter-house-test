import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { pointsForHouse } from "../features/housesSlice";
import { nextQuestion } from "../features/counterSlice";
import { IntAnswer } from "../Interfaces/Question";
import { AnswersList } from "../styles/StylesAnswers";
import { addAnswer } from "../features/answersSlice";

const Answers = ({ answers }: { answers: IntAnswer[] }): JSX.Element => {
    const [display, setDisplay] = useState<number>(1);
    const dispatch = useAppDispatch();

    const setPoints = (answer: IntAnswer): void => {
        for (const house in answer.scores) {
            const result: any = {
                house: house,
                score: answer.scores[house]
            }
            dispatch(pointsForHouse(result));
        }

        dispatch(addAnswer(answer.title))
        setDisplay(0);
        dispatch(nextQuestion());
    }

    return (
        <AnswersList display={display}>
            {answers.map((answer: IntAnswer, index: number) => (
                <button key={index} onClick={() => setPoints(answer)}>{answer.title}</button>
            ))}
        </AnswersList>
    );
}

export default Answers;
