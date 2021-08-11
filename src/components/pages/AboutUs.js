import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function AboutUs() {

    const [btnClicked, setBtnClicked] = useState("true");

    function handleBtnClick() {
        setBtnClicked((privValue) => {
            console.log(privValue);
            return !privValue;
        })
    }
    console.log(btnClicked);
    return (

        <div>
            <SwitchTransition>
                <CSSTransition
                    key={btnClicked}
                    timeout={500}
                    classNames="usAnima"
                    
                >
                    <>
                        <div className="homeImgContainer usAnima" >
                            {btnClicked && <img className="homeImg homeImgBig homeImgAboutUs" src="../img/Daca2.jpg" alt="honey products" />}
                            {!btnClicked && <img src="../img/kosnice11.jpg" alt="hive" className="aboutUsAdditionalImg " />}
                        </div>
                       </>
                       </CSSTransition>
            </SwitchTransition>        
            <SwitchTransition>
                <CSSTransition
                    key={btnClicked}
                    timeout={{enter:1000, exit:1000}}
                    classNames="usAnimaText"
                    >
                        <>
                        {!btnClicked && <div className="aboutUsContainer">
                            <div className="aboutUsTextContainer usAnimaText">
                                <img src="../img/pcela.ico" alt="logo" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis, voluptatem aliquam sint in cum necessitatibus eum commodi inventore! Quas est vitae odio quidem temporibus natus recusandae, libero unde deserunt.Quod sint inventore, praesentium atque facilis obcaecati! Nihil repudiandae tempore eaque reprehenderit at quas natus quae temporibus quasi impedit. Nam, optio quia! Dicta reprehenderit, soluta tempora corporis velit dolorem, enim optio inventore temporibus vitae odit. Consectetur illo maiores, consequatur officia dolorum molestias explicabo nam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae incidunt corporis nisi cum fuga alias doloremque soluta officia, obcaecati non esse atque debitis sapiente itaque laborum nobis tempore consequatur iusto distinctio eaque suscipit? Explicabo officiis, est molestias reiciendis incidunt, corporis a consequatur pariatur aut beatae enim laborum sunt alias tempora!</p>
                            </div>
                        </div>}

                    </>
                </CSSTransition>
            </SwitchTransition>
            <button className="aboutUsDetails" onClick={handleBtnClick}>Opširnije</button>
        </div>
    )
}

export default AboutUs;

