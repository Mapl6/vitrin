
import bg from "./assets/img/bg-pattern.avif";
import img1 from "./assets/img/3.jpg";
import gs from "./assets/img/g-scholar.png";
import rg from "./assets/img/rg.png";
import email from "./assets/img/email.png";
import ws from "./assets/img/ws.png";

const Card = () => {
  return (
    <div className="card">
        <div className="card-header">
            <img className="card-bg" src={bg}  />
            <img className="card-logo" src={img1}  />
        </div>
        <div className="card-title">
        Prospects and challenges of cancer systems medicine: from genes to disease networks
        </div>
        <div className="card-icons">
            <img src={gs} />
            <img src={rg} />
            <img src={email} />
            <img src={ws} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Scopus_logo.svg" />
        </div>
    </div>
  )
}
export default Card