import { useState } from "react";
import TicketTable from "../Tablas/TicketTable";
import ChurchesTable from "../Tablas/ChurchesTable";
import PeopleTable from "../Tablas/PeopleTable";
import Tab from "./Tab";

function Tabs() {
  const [activeTab, setActiveTab] = useState("personas");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="tab-buttons">
        <button
          className={activeTab === "personas" ? "active" : ""}
          onClick={() => handleTabChange("personas")}
        >
          Personas
        </button>
        <button
          className={activeTab === "iglesias" ? "active" : ""}
          onClick={() => handleTabChange("iglesias")}
        >
          Iglesias
        </button>
        <button
          className={activeTab === "tickets" ? "active" : ""}
          onClick={() => handleTabChange("tickets")}
        >
          Tickets
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "personas" && (
          <Tab>
            <PeopleTable />
          </Tab>
        )}

        {activeTab === "iglesias" && (
          <Tab>
            <ChurchesTable />
          </Tab>
        )}

        {activeTab === "tickets" && (
          <Tab>
            <TicketTable />
          </Tab>
        )}
      </div>
    </div>
  );
}

export default Tabs;
