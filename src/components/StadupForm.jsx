import React  from "react";
import Input from "./Input";
import Button from "./Button";
import "./StandupForm.css"
function StandupForm(props){
    return(
        <form className="standup-form">
            <Input input = "Yesterday" />
            <Input input = "Today" />
            <Button name = "Submit" />
        </form>
    )
}
export default StandupForm;
