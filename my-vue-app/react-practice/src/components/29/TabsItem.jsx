import { useContext } from "react";
import { TabsContext } from "./Tabs";

const TabsItem = (props) => {
  const { active, setActive } = useContext(TabsContext);
  const { title, tabKey } = props;
  return (
    <div
      style={{ border: tabKey === active ? "1px solid black" : "0" }}
      onClick={() => {
        setActive(tabKey);
      }}
    >
      {title}
    </div>
  );
};

export default TabsItem;
