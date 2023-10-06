import "./card2.css";
const Card2 = ({ img, category, catalyzer, paragraph, link, number }) => {
  return (
    <div className="card2">
      <img className="img" src={img} alt="" />
      <div className="div1">
        <p className="category">{category}</p>
        <p className="title">{catalyzer}</p>
        <p className="paragraph">{paragraph}</p>
        <div className="div3">
          <a href="">{link}</a>
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
};
export default Card2;
