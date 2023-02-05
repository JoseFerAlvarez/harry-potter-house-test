export const getTheWinner = (houses) => {
    const winner = houses.sort((a, b) => b.score - a.score);
    return winner[0];
}
