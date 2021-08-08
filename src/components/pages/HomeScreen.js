import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function HomeScreen() {
    const [homeScreenImgDisplayed, setHomeScreenImg] = useState(true);
    
   return(
        <div >
        <CSSTransition
        in={homeScreenImgDisplayed}
        timeout={1200}
        classNames={"homeAnima"}
        appear={true}
        >
           <div className="homeImgContainer" >
                <img className="homeImg homeAnima" src="../img/bckg.jpg" alt="honey products" />
               
            </div>
            </CSSTransition>  
            <div className="socialMedia homeAnima">
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