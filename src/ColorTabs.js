import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Counter from "./Counter";
import RandomNumber from "./RandomNumber";

export default function ColorTabs() {
  const [value, setValue] = React.useState("counter");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      
      {/* Tabs */}
      <Tabs value={value} onChange={handleChange} centered>
        <Tab value="counter" label="Counter" />
        <Tab value="random" label="RandomNumber" />
      </Tabs>

      {/* Content */}
      <Box sx={{ mt: 2 }}>
        {value === "counter" && <Counter />}
        {value === "random" && <RandomNumber />}
      </Box>

    </Box>
  );
}