const Avatar = ({ img }) => {
  return (
    <div>
      <img
        src={img}
        alt=""
        style={{
          background: "blue",
          height: "40px",
          width: "40px",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};
export default Avatar;
