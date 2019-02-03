import React from "react";
import { Tabs, AppBar, Tab } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

const Footer = ({ muscles, category, onSelect, width }) => {
  const index = category ? muscles.findIndex(m => m === category) + 1 : 0;

  const onIndexSelect = (e, index) => {
    return onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <AppBar position="static">
      <Tabs
        value={index}
        indicatorColor="secondary"
        textColor="secondary"
        centered={width !== "xs"}
        variant={width === "xs" ? "scrollable" : "standard"}
        onChange={onIndexSelect}
      >
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab label={muscle} key={muscle} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default withWidth()(Footer);
