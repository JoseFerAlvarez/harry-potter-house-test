/**React */
import React, { useEffect, useState } from "react";
/**Redux */
import { useAppDispatch } from "../app/hooks";
import { addUser } from "../features/userSlice";
/**Typescript */
import { IntUser } from "../Interfaces/User";
/**Styles */
import { FormCard, DenyText } from "../styles/StylesForm";
import { TextHat } from "../styles/Text";


const Form = () => {
    /**States */
    const [user, setUser] = useState<IntUser>({
        name: "",
        blood: "Mudblood",
        race: "Human"
    });
    const [disable, setDisable] = useState<boolean>(true);
    const dispatch = useAppDispatch();

    /**Enable the continue button with correct data */
    useEffect(() => {
        if (user.name.length && user.blood && user.race === "Human") {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }, [user])

    /**Save the user in redux state */
    const saveUser = (e) => {
        e.preventDefault();
        dispatch(addUser(user));
    }

    return (
        <FormCard>
            <form>
                <p>Enter your full name</p>
                <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })}></input>
                <div>
                    <p>Select your blood type:</p>
                    <select value={user.blood} onChange={(e) => setUser({ ...user, blood: e.target.value })}>
                        <option value={"Mudblood"}>Mudblood</option>
                        <option value={"Pure-Blood"}>Pure-Blood</option>
                    </select>
                </div>
                <div>
                    <p>Select you race:</p>
                    <select value={user.race} onChange={(e) => setUser({ ...user, race: e.target.value })}>
                        <option value={"Human"}>Human</option>
                        <option value={"Goblin"}>Goblin</option>
                        <option value={"Elf"}>Elf</option>
                        <option value={"Troll"}>Troll</option>
                    </select>
                </div>
                {user.race !== "Human" ?
                    <DenyText>Sorry, we do not accept requests for {user.race}s.</DenyText> :
                    <></>}
                <button type="submit" onClick={(e) => saveUser(e)} disabled={disable}>Continue to the house selection</button>
            </form>
            <p>
                For pandemic reasons, we at Hogwarts have decided to implement <TextHat>The S0rt1ng H4t AI</TextHat>.
                An artificial intelligence model that will decide which house you will belong to for the
                next few years of your wizarding career (the model has not been tested).
            </p>
            <p>All of your personal data will be stored in Dumbledore's pensieve.</p>
        </FormCard>
    );
}

export default Form;
