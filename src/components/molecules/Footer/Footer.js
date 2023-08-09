import "./Footer.css";

const Footer = () => {
  return (
    <div className="author">Created by {new Date().getFullYear()} {" "}
      <a href="https://github.com/Opisbernard" target="_blank" rel="noreferrer" className="copyright-link">Bernard Opis</a>
    </div>
  )
}
export default Footer