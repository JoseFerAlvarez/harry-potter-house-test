import React, { useEffect, useState } from "react";
import data from "../db/questions.json";
import Question from "../components/Question";
import { useAppSelector } from "../app/hooks";
import { getTheWinner } from "../helpers/winner";
import { IntQuestion } from "../Interfaces/Question";
import { TestContainer, UserContainer } from "../styles/StylesTest";
import { UserBubble } from "../styles/Text";
import { animateScroll as scroll } from "react-scroll";
import Winner from "../components/Winner";

const Test = (): JSX.Element => {

    const { g, r, h, s } = useAppSelector((state) => state.houses);
    const { count } = useAppSelector((state) => state.counter);
    const { answers } = useAppSelector((state) => state.answers);
    const [questions, setQuestions] = useState([]);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (count < data.length) {
            setQuestions([...questions, data[count]]);
        } else {
            setWinner(getTheWinner([g, r, h, s]));
        }
    }, [count])

    useEffect(() => {
        scroll.scrollToBottom();
    }, [questions])

    return (
        <TestContainer>
            {winner ?
                <Winner winner={winner.name} />
                :
                <>{questions.map((question: IntQuestion, index: number) => (
                    <div key={index}>
                        <Question question={question} />
                        <UserContainer>
                            {answers[index] ? <UserBubble>{answers[index]}</UserBubble> : <></>}
                        </UserContainer>
                    </div>
                ))}</>}
        </TestContainer>
    );
}

export default Test;
