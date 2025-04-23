
import { useState } from "react";
export const UnitTest = (props) => {
    const [name, setName] = useState("");
    const handleChange = ev => {
        ev.preventDefault()
        const inputtedValue = ev.currentTarget.value
        setName(inputtedValue)
    }
    const handleChangeCheck = ev => {
        ev.preventDefault()
    }
    const buttonClick = () => {
        setName("Ganesh")
    }
    return <>
        <input title="nameId" type="text" value={name} onChange={handleChange}></input>
        <button id="nameButton" data-testid="setname" onClick={buttonClick}>Click</button>
        <button disabled={true} data-testid="setname2" onClick={buttonClick}>Click</button>
        <input title="checkme" type="checkbox" onChange={handleChangeCheck}></input>

        <div role="StyleRole" style={{ width: "200px", height: "200px", backgroundColor: "red" }}>StyleCheck</div>
    </>
}