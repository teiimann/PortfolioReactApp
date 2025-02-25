import React from "react";
import "./About.css"; 
import AboutNav from "./AboutNav";
import MyPhoto from "../../Images/MyPhoto.png";
import ImgFrame from "../../Components/ImgFrame";
import OneTool from "../Tools/OneTool";


const AboutPage = () => {
  return(
    <div className="parent-div ">
    <div className="aboutpage-1515 pos-abs">
      <img
        src="https://s3-alpha-sig.figma.com/img/413c/b74c/5faaf1fe1e560ef187d82f8a7e76338d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MEOl3qCsKLs16ioqreqoGE3x-mKCQ3DzBg4BwvUCtuZXzsGKL1k6DyOGRcbJVz37kwgRNxpeZl6iTwKmMsutyrsRFW8tB-wB1NbSX1oNZuqd7xQu6bufYIOxWAilISjPrStxa2wrj88pF2IIXg1QVvE176H4Pj03-HkxsfmXf21hy9rFDLR4pGaRJVbDJQluapRB8yK7MxKDiJXQhw9J4ye0Rv~eCfMJfbyYrUvPI531GstMYrhz2l0h0ZZl7luL-J7z9LPJoveayIm5ktestq0~VXhnkDbBsH9-8dZJCw~J~H6D4EdC9OyvhpINQbamqOoiBYcjr5FWjk~MtXcBYQ__"
        className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-1515 "
        alt="1515-ALT"
      />
      {/* NavbarAboutPagePage1 */}
      <AboutNav/>
      <div className="hi-im-a-student-1630 pos-abs">
        <span className="hi-im-a-student-1630-0">{`Hi! I'm a student at `}</span>
        <span className="hi-im-a-student-1630-1">{`NIS`}</span>
        <span className="hi-im-a-student-1630-2">{`, actively involved in school life and `}</span>
        <span className="hi-im-a-student-1630-3">{`passionate `}</span>
        <span className="hi-im-a-student-1630-4">{`about connecting `}</span>
        <span className="hi-im-a-student-1630-5">{`with people`}</span>
        <span className="hi-im-a-student-1630-6">{`. Besides my studies, I graduated from a music school, mastering `}</span>
        <span className="hi-im-a-student-1630-7">{`piano and dombra`}</span>
        <span className="hi-im-a-student-1630-8">{`. I have a strong interest in`}</span>
        <span className="hi-im-a-student-1630-9">{` IT `}</span>
        <span className="hi-im-a-student-1630-10">{`and continuously work on developing my skills in this field

Recent achievements:             🏆 1st place at `}</span>
        <span className="hi-im-a-student-1630-11">{`ITFEST 2024`}</span>
        <span className="hi-im-a-student-1630-12">{`             🥈 2nd place at the city case championship by `}</span>
        <span className="hi-im-a-student-1630-13">{`Qadam Hub
`}</span>
        <span className="hi-im-a-student-1630-14">{`
`}</span>
        <span className="hi-im-a-student-1630-15">{`Always`}</span>
        <span className="hi-im-a-student-1630-16">{` open to new knowledge, `}</span>
        <span className="hi-im-a-student-1630-17">{`opportunities`}</span>
        <span className="hi-im-a-student-1630-18">{`, and `}</span>
        <span className="hi-im-a-student-1630-19">{`exciting projects! `}</span>
        <span className="hi-im-a-student-1630-20">{`🚀`}</span>
      </div>
      {/* Card1 */}
      <section className="card-1649 pos-abs">
      <ImgFrame src={MyPhoto}/>

        <div className="imangali-tleuzh-1633 pos-abs">
          <span className="imangali-tleuzh-1633-0">{`Imangali Tleuzhanov`}</span>
        </div>

        <div className="lang-1634 pos-abs">
          <span className="lang-1634-0">{`lang: 🇰🇿🇷🇺🇬🇧🇩🇪`}</span>
        </div>

        <div className="gpa-47-1635 pos-abs">
          <span className="gpa-47-1635-0">{`gpa: 4.7+`}</span>
        </div>
      </section>
    </div>
  </div>
  )
}

export default AboutPage;