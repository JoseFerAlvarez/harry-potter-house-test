import styled from "styled-components"

const HatBubble = styled.div`
    display: inline-block;
    border-radius: 12px 12px 12px 0;
    padding: 10px 20px;
    background-color: var(--color-light);
    font-family: var(--font-open);
    color: var(--color-dark);
    font-weight: 500;
`;

const UserBubble = styled.div`
    margin-top: 20px;
    border: 1px solid var(--color-green-secondary);
    display: inline-block;
    border-radius: 12px 12px 0 12px;
    padding: 10px 20px;
    background-color: var(--color-light);
    font-family: var(--font-open);
    color: var(--color-green-secondary);
    font-weight: 500;
`;

export { HatBubble, UserBubble }
