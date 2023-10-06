import "./card.css";
const Card = ({ children, title, subtitle }) => {
  //   const a = "ovo je subtitle" && <p></p>; // prvu netacnu ili poslednju tacnu
  //   console.log(a);
  return (
    <div id="card">
      {title || subtitle ? (
        <div className="header">
          {title && <p className="title">{title}</p>}
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
      ) : null}
      <div className="mainBox">{children}</div>
    </div>
  );
};
export default Card;
