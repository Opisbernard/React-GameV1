import "./Footer.css";

const Footer = () => {
  return (
    <div className="author">| Created by Bernard Opis |{new Date().getFullYear()} {" "}
      <a href="https://bernardopis.netlify.app/" target="_blank" rel="noreferrer" > All Rights Reserved |</a>
    </div>
  )
}
export default Footer