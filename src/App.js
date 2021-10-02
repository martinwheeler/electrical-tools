import React, { useState } from "react";
import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { TabMenu } from "primereact/tabmenu";
import HousePowerCost from "./pages/house-power-cost";
import BatterySizeCalculator from "./pages/battery-size-calculator";
import { BsLightningFill, BsBatteryCharging } from "react-icons/bs";

const items = (setTabChosen) => [
  {
    label: (
      <div className={"tabLabelAndIcon"}>
        <span className={"space-right-sml"}>
          <BsLightningFill />
        </span>
        <span>Power Cost</span>
      </div>
    ),
    command: (e) => {
      setTabChosen(0);
    },
  },
  {
    label: (
      <div className={"tabLabelAndIcon"}>
        <span className={"space-right-sml"}>
          <BsBatteryCharging />
        </span>
        <span>Battery Conversion</span>
      </div>
    ),
    command: (e) => {
      setTabChosen(1);
    },
  },
  // {
  //   label: "Edit",
  //   icon: "pi pi-fw pi-pencil",
  //   command: (e) => {
  //     setTabChosen(2);
  //   },
  // },
  // {
  //   label: "Documentation",
  //   icon: "pi pi-fw pi-file",
  //   command: (e) => {
  //     setTabChosen(3);
  //   },
  // },
  // {
  //   label: "Settings",
  //   icon: "pi pi-fw pi-cog",
  //   command: (e) => {
  //     setTabChosen(4);
  //   },
  // },
];

function App() {
  const [tabChosen, setTabChosen] = useState(0);

  return (
    <div className="App">
      <TabMenu model={items(setTabChosen)} />

      <div>
        {tabChosen === 0 && <HousePowerCost />}
        {tabChosen === 1 && <BatterySizeCalculator />}
        {tabChosen === 2 && <div></div>}
      </div>
    </div>
  );
}

export default App;
