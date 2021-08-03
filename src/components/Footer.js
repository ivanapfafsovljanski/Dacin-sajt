import React from "react";
import socialMediaList from "./pages/socilaMediaList";
import contactList from "./pages/contactList";


function Footer(){
    const year = new Date().getFullYear();
    return(
        
        <div className="footerContainer">
            <div className="konekcije">
                <table className="footerContact">
                    <tbody>
                    {socialMediaList.map(contact => {
                            return(
                            <tr key={contact.id}>
                            <td>
                                <img className="contactIco" src={contact.iconImage} alt="twitter logo" />
                            </td>
                            <td>
                            <p>{contact.id}</p>
                            </td>
                            <td>
                            <p>{contact.contactAddress}</p>
                            </td>
                        </tr>)
                        })}
                    </tbody>
                </table>
               
            </div>
            <p className="copyright">Copyright &copy; {year}</p>
        </div>
    )
}
export default Footer;