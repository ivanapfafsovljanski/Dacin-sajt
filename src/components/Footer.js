import React from "react";


function Footer(){
    const year = new Date().getFullYear();
    return(
        
        <div className="footerContainer">
            <div className="konekcije">
                <p>tviter</p>
                <p>fejsbuk</p>
                <p>email</p>
            </div>
            <p className="copyright">Copyright &copy; {year}</p>
        </div>
    )
}
export default Footer;