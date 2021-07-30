import React from "react";
import { Link } from "react-router-dom";



function HomeScreen() {
    
   return(
        <div>
           <div className="homeImgContainer" >
                <img className="homeImg" src="../img/bckg.jpg" alt="honey products" />
               
            </div>
            <div className="socialMedia">
                <table className="SocialMediaTable">
                    <tbody>
                        <tr>
                            <td>
                            <Link to="/contact"><img className="contactIco" src="../img/socilaMedia/twitterIcon.ico" alt="twitter logo" /></Link>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <Link to="/contact"><img className="contactIco" src="../img/socilaMedia/facebookIcon2.ico" alt="twitter logo" /></Link>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <Link to="/contact"><img className="contactIco" src="../img/socilaMedia/emailIcon.ico" alt="twitter logo" /></Link>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
           
        </div>
    )
}
export default HomeScreen;