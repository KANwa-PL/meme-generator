import React, { useState } from "react";
import Box from "./box.js";
import boxes from "../data/boxes";
import "../App.css";

function Boxes() {
  const [checkboxes, setCheckBoxes] = useState(boxes);

  function toggle(id) {
    setCheckBoxes(() => {
      const updatedCheckboxes = checkboxes.map((checkbox) => {
        return checkbox.id === id
          ? { ...checkbox, on: !checkbox.on }
          : checkbox;
      });
      return updatedCheckboxes;
    });
  }

  const boxXxes = checkboxes.map((checkbox) => {
    return (
      <Box
        className="box"
        on={checkbox.on}
        key={checkbox.id}
        handleToggle={toggle}
        id={checkbox.id}
      />
    );
  });

  return <div>{boxXxes}</div>;
}

export default Boxes;
