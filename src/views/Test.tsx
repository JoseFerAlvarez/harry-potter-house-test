import React, { useEffect, useState } from "react";
import data from "../db/questions.json";
import Question from "../components/Question";
import { useAppSelector } from "../app/hooks";
import { getTheWinner } from "../helpers/winner";

const Test = () => {

    const { g, r, h, s } = useAppSelector((state) => state.houses);
    const { count } = useAppSelector((state) => state.counter);
    const [questions, setQuestions] = useState([]);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (count < data.length) {
            setQuestions([...questions, data[count]]);
        } else {
            setWinner(getTheWinner([g, r, h, s]));
        }
    }, [count])

    return (
        <div>
            {questions.map((question, index) => (
                <Question key={index} question={question} />
            ))}
            {winner ? <p>{winner.name}</p> : <></>}
        </div>
    );
}

export default Test;
