/**React */
import React, { useState } from "react";
/**Redux */
import { useAppDispatch } from "../app/hooks";
import { pointsForHouse } from "../features/housesSlice";
import { nextQuestion } from "../features/counterSlice";
import { addAnswer } from "../features/answersSlice";
/**Typescript */
import { IntAnswer } from "../Interfaces/Question";
/**Styles */
import { AnswersList } from "../styles/StylesAnswers";


const Answers = ({ answers }: { answers: IntAnswer[] }): JSX.Element => {
    const [display, setDisplay] = useState<number>(1);
    const dispatch = useAppDispatch();

    const answerQuestion = (answer: IntAnswer): void => {
        for (const house in answer.scores) {
            const result = {
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
                <button key={index} onClick={() => answerQuestion(answer)}>{answer.title}</button>
            ))}
        </AnswersList>
    );
}

export default Answers;
