import React, { useState } from "react";
import Tabs from "../components/Tabs";
// Tabs Components
import TabOne from "../components/TabOne";
import TabTwo from "../components/TabTwo";
//import TabThree from "../components/TabThree";


type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

// Tabs Array
const tabs: TabsType = [
  {
    label: "Initial Distribution",
    index: 1,
    Component: TabOne
  },
  {
    label: "Perpetual Staking",
    index: 2,
    Component: TabTwo
  }
];

export default function App() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="wrapper___code">
      <div className="sidebar"></div>
      <img className="Fist__back__img" src="https://my-pics.netlify.app/onePager_Buble2.PNG" />
      <div className="Staking__Pool__wrapper">
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
      <img className="scond__back__img" src="https://my-pics.netlify.app/onePager_Buble1.PNG" />
    </div>
  );
}
