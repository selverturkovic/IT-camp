import "./avatar.css";
const Avatar = (props) => {
  const { name } = props;
  // props.name
  return (
    <div className="container">
      <img
        className="slika"
        src="https://th.bing.com/th/id/OIP.G1Vrfn-BhMayomZySeZjGgHaEo?pid=ImgDet&rs=1"
        alt=""
      />
      <div className="div1">
        <p className="Holden">{name}</p>
        <p className="UI">UI Designer</p>
      </div>
    </div>
  );
};

export default Avatar;
