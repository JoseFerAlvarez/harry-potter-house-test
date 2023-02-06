/**React */
import React from "react";
/**Styles */
import { HatBubble, TextHat } from "../styles/Text";

const Title = ({ title }: { title: string }) => {
    return (
        <HatBubble>
            <p><TextHat>The S0rt1ng H4t</TextHat></p>
            <p>{title}</p>
        </HatBubble>
    );
}

export default Title;
