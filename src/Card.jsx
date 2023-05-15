import gs from "./assets/img/g-scholar.png";
import rg from "./assets/img/rg.png";
import email from "./assets/img/email.png";
import ws from "./assets/img/ws.png";
import sardar from "./assets/img/sardar.jpg";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <img className="card-bg" src={sardar} alt="" />
        <a href={props.website}><img className="card-logo" src={props.img} alt="" /></a>
      </div>
      <div className="card-name"><a href={props.website}>{props.prof}</a></div>
      <div className="card-title"><a href={props.link}>{props.title}</a></div>
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
          <img style={{fill:"black"}} src="https://upload.wikimedia.org/wikipedia/commons/2/26/Scopus_logo.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Card;



