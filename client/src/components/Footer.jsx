import img from "../assets/images/bdev-white.png";
import "../assets/styles/footer.css";
function Footer() {
  return (
    <footer>
      <div>
        <img src={img} alt="Logo" />
      </div>
      <p> creado por Bastian Parra</p>
    </footer>
  );
}

export default Footer;
