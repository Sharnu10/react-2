import { useState } from "react";

import Tab from "./tab";
import TabDescription from "./tab-description";
import "./tabbing-home.css";

export default function TabbingHome() {
  const [tabsData, setTabsData] = useState([
    { id: 1, title: "tab 1", description: "tab 1 description" },
    { id: 2, title: "tab 2", description: "tab 2 description" },
    { id: 3, title: "tab 3", description: "tab 3 description" },
  ]);

  const [selectedTab, setSelectedTab] = useState(tabsData[0]);
  function onSelectTab(id) {
    setSelectedTab(tabsData.find((tab) => tab.id === id));
  }

  return (
    <div className="tabs">
      <div className="tab-heading">
        {tabsData.map((tab) => (
          <Tab key={tab.title} tab={tab} onSelectTab={onSelectTab} />
        ))}
      </div>

      <TabDescription tab={selectedTab} />
    </div>
  );
}
