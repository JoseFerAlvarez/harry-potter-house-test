import React from "react";
import { HatBubble } from "../styles/Text";

const Title = ({ title }: { title: string }) => {
    return (
        <HatBubble>
            <p>{title}</p>
        </HatBubble>
    );
}

export default Title;
