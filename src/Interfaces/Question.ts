interface IntQuestion {
    title: string,
    answers: IntAnswer
}

interface IntAnswer {
    title: string,
    scores: IntScore
}

interface IntScore {
    g: number,
    r: number,
    h: number,
    s: number
}

export type {
    IntQuestion,
    IntAnswer,
    IntScore
};
