// import NewCard from "./NewCard";
import Card2 from "./Card2";
const Class9 = () => {
  return (
    <div>
      {/* <NewCard renderHeader={<p>fdfd</p>} renderBody={<p>df</p>} /> */}
      <Card2
        img="data:image/jpeg;base64,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"
        category="CATEGORY"
        catalyzer="The Catalyzer"
        paragraph="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat"
        link="Lear More"
        number="1.2k 6"
      />
    </div>
  );
};

export default Class9;
