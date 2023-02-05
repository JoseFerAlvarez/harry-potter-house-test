/**React */
import React, { useEffect, useState } from "react";
/**Redux */
import { useAppSelector } from "../app/hooks";
/**Typescript */
import { IntQuestion } from "../Interfaces/Question";
/**Components */
import Question from "../components/Question";
import Winner from "../components/Winner";
/**Styles */
import { TestContainer, UserContainer } from "../styles/StylesTest";
import { UserBubble } from "../styles/Text";
/**Data */
import data from "../db/questions.json";
/**Helpers */
import { getTheWinner } from "../helpers/winner";
import { animateScroll as scroll } from "react-scroll";
import { IntHouse } from "../Interfaces/House";


const Test = (): JSX.Element => {
    /**States */
    const { g, r, h, s } = useAppSelector((state) => state.houses);
    const { count } = useAppSelector((state) => state.counter);
    const { answers } = useAppSelector((state) => state.answers);
    const [questions, setQuestions] = useState([]);
    const [winner, setWinner] = useState<IntHouse>(null);

    /**Render the next question when counter increments */
    useEffect(() => {
        if (count < data.length) {
            setQuestions([...questions, data[count]]);
        } else {
            setWinner(getTheWinner([g, r, h, s]));
        }
    }, [count])

    /**When a new question is added, scroll to bottom */
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
