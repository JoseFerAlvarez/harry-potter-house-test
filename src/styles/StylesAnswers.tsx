import styled from "styled-components";

const AnswersList = styled.div`
    display: ${props => props.display ? "flex" : "none" || "flex"};
    gap: 5px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 25px;

    button{
        background-color: var(--color-light);
        border: 1px solid var(--color-light);
        border-radius: 8px;
        padding: 10px 20px;
        font-family: var(--font-roboto);
        font-size: 16px;
        transition: all 200ms;

        &:hover{
            border: 1px solid var(--color-green-secondary);
            color: var(--color-green-secondary);
        }
    }
`;

export { AnswersList }
