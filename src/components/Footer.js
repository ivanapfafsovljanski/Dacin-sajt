import React from "react";


function Footer(){
    const year = new Date().getFullYear();
    return(
        
        <div className="footerContainer">
            <div className="konekcije">
                <table className="footerContact">
                    <tbody>
                        <tr>
                            <td>
                                <img className="contactIco" src="../img/socilaMedia/twitterIcon.ico" alt="twitter logo" />
                            </td>
                            <td>
                            <p>twitter</p>
                            </td>
                            <td>
                            <p>twitterAddress</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="contactIco" src="../img/socilaMedia/facebookIcon2.ico" alt="twitter logo" />
                            </td>
                            <td>
                            <p>facebook</p>
                            </td>
                            <td>
                            <p>facebookAddress</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="contactIco" src="../img/socilaMedia/emailIcon.ico" alt="twitter logo" />
                            </td>
                            <td>
                            <p>email</p>
                            </td>
                            <td>
                            <p>emailAddress</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
               
            </div>
            <p className="copyright">Copyright &copy; {year}</p>
        </div>
    )
}
export default Footer;