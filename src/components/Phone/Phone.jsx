import { useState } from "react";
import "./Phone.css";

const Phone = (props) => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const handleChangeName = (event) => {
        setNewName(event.target.value);
    };

    const handleChangeNumber = (event) => {
        setNewNumber(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setNewEmail(event.target.value);
    };

    const handleAddContact = (event) => {
        event.preventDefault();
        if (newName !== "" && newNumber !== "" && newEmail !== "") {
            const person = {
                id: props.contactsLength,
                name: newName,
                number: newNumber,
                email: newEmail,
            };
            props.addToContacts(person);
            setNewName("");
            setNewNumber("");
            setNewEmail("");
        } else {
            alert("Enter Valid Data");
        }
    };

    return (
        <form className="add_person__form" onSubmit={handleAddContact}>
            <label className="add_person__label">Person Name:</label>
            <input
                className="add_person__input"
                type="text"
                placeholder="Enter name"
                value={newName}
                onChange={handleChangeName}
            />
            <label className="add_person__label">Person Number:</label>
            <input
                className="add_person__input"
                type="tel"
                placeholder="Enter number (ex. 123-456-7890)"
                maxLength={12}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={newNumber}
                onChange={handleChangeNumber}
            />
            <label className="add_person__label">Person Email:</label>
            <input
                className="add_person__input"
                type="email"
                value={newEmail}
                placeholder="Enter email"
                onChange={handleChangeEmail}
            />
            <div className="add_person__button-container">
                <button className="add_person__submit" type="submit">
                    Add
                </button>
            </div>
        </form>
    );
};

export default Phone;
