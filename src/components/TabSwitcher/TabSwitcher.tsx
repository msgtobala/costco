import { useState } from "react";
import { About } from "./TabContent/About";
import { Tab, Switcher } from "./TabSwitcher.styled";
import { Features } from "./TabContent/Features";

export const TabSwitcher = () => {
  const [selectedTab, setSelectedTab] = useState("about");
  const getTabContent = () => {
    switch (selectedTab) {
      case "about":
        return <About />;
      case "features":
        return <Features />;
      default:
        return <About />;
    }
  };
  return (
    <>
      <Switcher>
        <Tab
          onClick={() => setSelectedTab("about")}
          isActive={selectedTab === "about"}
        >
          <span>ABOUT</span>
        </Tab>
        <Tab
          onClick={() => setSelectedTab("features")}
          isActive={selectedTab === "features"}
        >
          <span>FEATURES</span>
        </Tab>
      </Switcher>
      {getTabContent()}
    </>
  );
};
