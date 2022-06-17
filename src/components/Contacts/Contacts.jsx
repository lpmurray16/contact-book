import "./Contacts.css";

const Contacts = (props) => {
    return (
        <div className="contacts">
            <h1 className="contacts__title">Contacts</h1>
            {/* create a table with name, number, and email as the top header sections */}
            <table className="contacts__table">
                <thead className="contacts__table-header">
                    <tr className="contacts__table-row">
                        <th className="contacts__table-header-cell">ID</th>
                        <th className="contacts__table-header-cell">Name</th>
                        <th className="contacts__table-header-cell">Number</th>
                        <th className="contacts__table-header-cell">Email</th>
                    </tr>
                </thead>
                <tbody className="contacts__table-body">
                    {props.contacts.map((contact) => (
                        <tr className="contacts__table-row" key={contact.id}>
                            <td className="contacts__table-cell">
                                {contact.id}
                            </td>
                            <td className="contacts__table-cell">
                                {contact.name}
                            </td>
                            <td className="contacts__table-cell">
                                {contact.number}
                            </td>
                            <td className="contacts__table-cell">
                                {contact.email}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;
