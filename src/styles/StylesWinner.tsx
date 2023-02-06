import styled from "styled-components";

const WinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: var(--font-roboto);
    margin-top: 50px;

    p{
        font-size: 30px;
        font-weight: 600;
    }

    p:last-child{
        font-size: 20px;
        font-weight: 400;
    }
`;

const Image = styled.div`
    border-radius: 20px;
    img{
        max-height: 600px;
        border-radius: 20px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export { WinnerContainer, Image }
