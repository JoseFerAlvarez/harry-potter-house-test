import { IntHouse } from "../Interfaces/House";

export const getTheWinner = (houses) => {
    const winner: IntHouse = houses.sort((a, b) => b.score - a.score);
    return winner[0];
}

/**Shows a different phrase in each house */
export const setPhrase = (winner: string) => {
    switch (winner) {
        case "Gryffindor":
            return "Bravery and chivalry";
        case "Ravenclaw":
            return "Wit and learning";
        case "Hufflepuff":
            return "Not everyone can be of Gryffindor";
        case "Slytherin":
            return "Cunning and ambition";
        default:
            return "";
    }
}
