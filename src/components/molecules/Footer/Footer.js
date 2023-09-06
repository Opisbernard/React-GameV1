import "./Footer.css";

const Footer = () => {
  return (
    <div className="author">| {new Date().getFullYear()} {" "} All Rights Reserved! | Created by 
      <a href="https://bernardopis.netlify.app/" target="_blank" rel="noreferrer" > Bernard Opis |</a>
    </div>
  )
}
export default Footer