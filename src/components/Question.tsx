import React from "react";
import Title from "./Title";
import Answers from "./Answers";

const Question = ({ question }) => {
    return (
        <div>
            <Title title={question.title} />
            <Answers answers={question.answers} />
        </div>
    );
};

export default Question;
