import React from "react";
import { Tabs, Paper, Tab } from "@material-ui/core";

const Footer = ({ muscles, category, onSelect }) => {
  const index = category ? muscles.findIndex(m => m === category) + 1 : 0;

  const onIndexSelect = (e, index) => {
    return onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={onIndexSelect}
      >
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab label={muscle} key={muscle} />
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
