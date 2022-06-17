import { useState } from "react";
import Phone from "./components/Phone/Phone";
import Contacts from "./components/Contacts/Contacts";
import "./styles/App.css";
import contacts from "./local-json/contact-list.json";

const App = () => {
    const [contactsList, setContactsList] = useState(contacts);

    const addContact = (contact) => {
        setContactsList([...contactsList, contact]);
    };

    return (
        <div className="App">
            <Phone
                addToContacts={addContact}
                contactsLength={contactsList.length}
            />
            <Contacts contacts={contactsList} />
        </div>
    );
};

export default App;
