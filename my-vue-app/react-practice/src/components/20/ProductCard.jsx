import Text from "./Text";
// import Star from "./Star";
import Facebook from "./Facebook";
import Twiter from "./Twiter";
import Chat from "./Chat";
import RoundButton from "./RoundButton";
import Select from "./Select";
import Rating from "./Rating";
import Button from "./Button";
import { useState } from "react";
const ProductCard = (props) => {
  console.log(props);
  const [img, setImg] = useState(props.data.imgs.white);
  console.log(img);
  // napraviti funkciju koja kad se click na button conzol loga se koju boju je odabrao i velicinu
  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <img src={img} alt="" height={400} width={400} />
      <div style={{ width: 400, height: 400 }}>
        <div>
          <Text
            type="h1"
            text="BRAND NAME
"
          />
          <Text type="paragraph1" text={props.data.brandTitle} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Rating value={props.data.reviews} />

          <Text type="review" text={props.data.reviewsCount + "Reviews"} />
          {/* {props.data.socialNetworkLinks.fb} */}
          <p style={{ borderLeft: "1px solid gray" }}>
            <Facebook type="fb" />
            <Twiter type="twiter" />
            <Chat type="instagram" />
          </p>
        </div>
        <div>
          <Text
            type="color"
            text="Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
            juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
            seitan poutine tumeric. Gastropub blue bottle austin listicle
            pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
          "
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid gray",
            paddingBottom: "3px",
          }}
        >
          <Text type="color" text="Color" />
          <RoundButton
            type="roundButton1"
            color="blue"
            onClick={() => setImg(props.data.imgs.blue)}
          />
          <RoundButton
            type="roundButton2"
            color="black"
            onClick={() => setImg(props.data.imgs.black)}
          />
          <RoundButton
            type="roundButton3"
            color="white"
            onClick={() => setImg(props.data.imgs.white)}
          />
          {/* <button
            style={{
              width: 40,
              height: 40,
              color: "black",
              borderRadius: "50%",
              padding: 20,
            }}
          ></button>
          <button
            style={{
              width: 40,
              height: 40,
              color: "black",
              borderRadius: "50%",
              padding: 20,
            }}
          ></button>
          <button
            style={{
              width: 40,
              height: 40,
              color: "black",
              borderRadius: "50%",
              padding: 20,
            }}
          ></button> */}
          <Text type="color" text="Size" />
          <Select list={props.data.sizes} />
          {/* value i onchange */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text type="t4" text="$58.00" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button title="button" />

            <button
              style={{ width: 30, height: 30, borderRadius: "50%" }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
