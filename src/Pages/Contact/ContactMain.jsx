import React, { useState } from "react";
import "./Contact.css";
import ContactsNav from "./ContactNav";
import Github from "../../Images/github.png";
import Telegram from "../../Images/telegram.png";
import Flowers from "../../Images/Flowers.jpg";
import Inst from "../../Images/inst.png";
import Linkedin from "../../Images/LinkIcon.png";
import RegContent from "./RegContent";
import ThxContent from "./ThxContent";
import FinContent from "./FinContent"; 

const ContactsPage = () => {
    const [step, setStep] = useState(0);

    const handleNextStep = () => {
        setStep((prevStep) => (prevStep + 1) % 3); // Меняем шаги по кругу
    };

    return (
        <div className="parent-div">
            <div className="contactpage-1679 pos-abs">
                <ContactsNav />
                {/* Изображения */}
                <section className="img-1840 pos-abs">
                    <div className="contactimg-1694 pos-abs">
                        <img src={Flowers} className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1694" alt="1694-ALT"/>
                    </div>
                    <div className="contactimg-1695 pos-abs">
                        <img src={Flowers} className="pos-abs image-div bg-no-repeat bg-crop nodeBg-1695" alt="1695-ALT"/>
                    </div>
                </section>

                {/* Контент */}
                <section className="contactmain-1842 pos-abs">
                    <div className="basebox-1696 pos-abs"></div>
                    <div className="media-1841 pos-abs">
                        <div className="rectangle-2-1697 pos-abs"></div>

                        {/* Иконки */}
                        <div className="linkicon-1-1698 pos-abs">
                            <a href="https://github.com/teiimann" target="_blank" rel="noopener noreferrer">
                            <div className="button-log"><img src={Github} alt="Github"/></div>
                            </a>
                        </div>
                        <div className="teleicon-92 pos-abs">
                            <a href="https://www.linkedin.com/in/imangali-tleuzhanov-200b612b2" target="_blank" rel="noopener noreferrer">
                            <div className="button-log"><img src={Linkedin} className="Linde" alt=""/></div>
                            </a>
                        </div>
                        <div className="insticon-814 pos-abs">
                            <a href="https://t.me/teiimann" target="_blank">
                            <div className="button-log"><img src={Telegram} alt="Github"/></div>
                            </a>
                        </div>
                        <div className="giticon-86 pos-abs">
                            <a href="https://www.instagram.com/teiimann" target="_blank" rel="noopener noreferrer">
                            <div className="button-log"><img src={Inst} alt="Github"/></div>
                            </a>
                        </div>

                        {/* Показываем текущий компонент */}
                        {step === 0 && <RegContent onNext={handleNextStep} />}
                        {step === 1 && <ThxContent onNext={handleNextStep} />}
                        {step === 2 && <FinContent onNext={handleNextStep} />}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactsPage;
