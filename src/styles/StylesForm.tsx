import styled from "styled-components";

const FormCard = styled.div`
    max-width: 700px;
    margin: auto;
    background-color: var(--color-light);
    border-radius: 10px;
    font-family: var(--font-roboto);
    padding: 40px 50px;
    margin-top: 50px;
    p{
        font-family: var(--font-roboto);
        font-size: 16px;
    }
    p:last-child{
        font-family: var(--font-roboto);
        margin-top: 20px;
        font-size: 12px;
        font-weight: 600;
        color: var(--color-grey);
    }
    input[type=text]{
        border: none;
        border-bottom: 2px solid var(--color-grey);
        font-family: var(--font-roboto);
        font-size: 16px;
        width: 100%;
        transition: all 200ms;
        padding: 5px 15px;
        &:focus{
            outline: none;
            border-bottom: 2px solid var(--color-green-secondary);
            background-color: var(--color-green-light);
            border-radius: 3px 3px 0 0;
        }
    }

    select{
        font-family: var(--font-roboto);
        font-size: 16px;
        border-radius: 5px;
        padding: 5px 15px;
        transition: all 200ms;
        &:focus{
            outline: 2px solid var(--color-green-secondary);
            background-color: var(--color-green-light);
            border-radius: 5px;
        }
    }

    button{
        font-family: var(--font-roboto);
        font-size: 16px;
        border-radius: 8px;
        border: none;
        background-color: var(--color-green-secondary);
        padding: 10px 20px;
        color: var(--color-light);
        margin-top: 30px;
        transition: all 200ms;
        &:hover{
            background-color: var(--color-green);
        }
        &:disabled{
            background-color: var(--color-grey-light);
        }
    }

    @media only screen and (min-width: 1000px) {
        input[type=text]{
            width: 60%;
        }
    }
`;

const DenyText = styled.p`
    font-family: var(--font-roboto);
    font-size: 14px;
    color: var(--color-red);
`;

export { FormCard, DenyText };
