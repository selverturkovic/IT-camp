import Avatar from "./Avatar";
import Banner from "./Banner";
import Button from "./Button";
import Divider from "./Divider";
import Text from "./Text";

const Page = () => {
  return (
    <div>
      <Banner img="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" />
      <div style={{ display: "flex", width: "1200px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            width: "1000px",
          }}
        >
          <Avatar img="https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg" />
          <Text type="h1" text="Phoebe Caulfield" />
          <Divider />
          <Text
            type="paragraph1"
            text="Raclette knausgaard hella meggs normcore williamsburg enamel pin"
          />
        </div>
        <div style={{ borderLeft: "1px solid gray", padding: "20px" }}>
          <Text
            type="paragraph2"
            text="Meggings portland fingerstache lyft, post-ironic fixie man bun banh
            mi umami everyday carry hexagon locavore direct trade art party.
            Locavore small batch listicle gastropub farm-to-table lumbersexual
            salvia messenger bag. Coloring book flannel truffaut craft beer
            drinking vinegar sartorial, disrupt fashion axe normcore meh
            butcher. Portland 90's scenester vexillologist forage post-ironic
            asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst
            before they sold out four loko. 3 wolf moon brooklyn."
          />
          <Button button="Learn more" />
        </div>
      </div>
    </div>
  );
};
export default Page;
