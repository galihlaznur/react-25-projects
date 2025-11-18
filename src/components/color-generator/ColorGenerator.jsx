import React, { useState } from "react";

const ColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    // console.log(hexColor);
    setColor(hexColor);
    setTypeOfColor("hex");
  };

  const handleCreateRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    // console.log(rgbColor);
    setColor(rgbColor);
    setTypeOfColor("rgb");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "80%",
        background: color,
      }}
    >
      <button onClick={handleCreateRandomHexColor}>Create HEX Color</button>
      <button onClick={handleCreateRandomRgbColor}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default ColorGenerator;
