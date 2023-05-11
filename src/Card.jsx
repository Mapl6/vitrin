import bg from "./assets/img/bg-pattern.avif";
import gs from "./assets/img/g-scholar.png";
import rg from "./assets/img/rg.png";
import email from "./assets/img/email.png";
import ws from "./assets/img/ws.png";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <img className="card-bg" src={bg} alt="" />
        <img className="card-logo" src={props.img} alt="" />
      </div>
      <div className="card-title">{props.title}</div>
      <div className="card-icons">
        <a href={props.g_scholar}>
          <img src={gs} alt="" />
        </a>
        <a href={props.reaseach}>
          <img src={rg} alt="" />
        </a>
        <a href={props.email}>
          <img src={email} alt="" />
        </a>
        <a href={props.website}>
          <img src={ws} alt="" />
        </a>
        <a href={props.scopus}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Scopus_logo.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Card;