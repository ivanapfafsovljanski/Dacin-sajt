import React from "react";
import contactList from "./contactList";
import socialMediaList from "./socilaMediaList";

function Contact() {
    return (
        <div>
            <div className="homeImgContainer" >
                <img className="homeImg opacity" src="../img/bckg.jpg" alt="honey products" />
                <img className="homeImgBig homeAnima" src="../img/honeyBig.jpg" alt="honey products" />
            </div>
            <div className="contacUs">
                <h2>Možete nas kontaktirati na ove načine:</h2>
                {console.log(contactList)}
                <table className="contactContact">

                    {/* 2maps because of icon's color and in footer to better organise content*/}
                    {contactList.map(contact => {
                        return (
                            <tbody key={contact.id}>
                                 <tr >
                                    <td className="imgCell">
                                        <img className="contactIco invert" src={contact.iconImage} alt="twitter logo" />
                                    </td>
                                    <td >
                                     {contact.id}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="wholeRow">
                                        <p>{contact.contactAddress}</p>
                                        <hr />
                                    </td>
                                </tr>
                            </tbody>)
                    })}
                    {socialMediaList.map(contact => {
                        return (
                            <tbody key={contact.id}>
                                <tr>
                                    <td className="imgCell">
                                        <img className="contactIco" src={contact.iconImage} alt="twitter logo" />
                                    </td>
                                    <td>
                                        {contact.id}
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="wholeRow">
                                    <p>{contact.contactAddress}</p>
                                        <hr />
                                    </td>

                                </tr>
                            </tbody>)
                    })}
                    
                </table>
        </div>
        </div >
    )
}

export default Contact;