import { useContext } from "react";
import { MyContext } from "./SampleContext";
import MyComponent from "./MyComponent";
import TabsItem from "./TabsItem";
import Tabs from "./Tabs";

const Class29 = () => {
  const { test, count, setCount } = useContext(MyContext);
  console.log(test);
  return (
    <div>
      {test}
      <MyComponent />
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <Tabs>
        <TabsItem title="tab 1" tabKey={0} />
        <TabsItem title="tab 2" tabKey={1} />
        <TabsItem title="tab 3" tabKey={2} />
      </Tabs>
    </div>
  );
};
export default Class29;
