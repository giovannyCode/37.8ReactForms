import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

function BoxList() {
  const boxesArray = [
    { id: 1, width: "200px", height: "100px", backgroundColor: "lightblue" },
    { id: 2, width: "300px", height: "150px", backgroundColor: "lightgreen" },
    { id: 3, width: "250px", height: "120px", backgroundColor: "lightcoral" },
    {
      id: 4,
      width: "400px",
      height: "200px",
      backgroundColor: "lightgoldenrodyellow",
    },
    { id: 5, width: "350px", height: "180px", backgroundColor: "lightpink" },
    { id: 6, width: "150px", height: "80px", backgroundColor: "lightcyan" },
    { id: 7, width: "500px", height: "250px", backgroundColor: "lightgray" },
    {
      id: 8,
      width: "600px",
      height: "300px",
      backgroundColor: "lightseagreen",
    },
    {
      id: 9,
      width: "450px",
      height: "220px",
      backgroundColor: "lightsteelblue",
    },
    { id: 10, width: "280px", height: "140px", backgroundColor: "lightyellow" },
  ];
  const [boxes, setBoxes] = useState(boxesArray);

  /** Add new item object to array. */
  const addBox = (box) => {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };
  const deleteBox = (id) => {
    const updatedBoxes = boxes.filter((box) => box.id !== id);
    setBoxes(updatedBoxes);
  };
  return (
    <div>
      {boxes.map((box) => (
        <Box
          key={box.id}
          width={box.width}
          height={box.height}
          color={box.backgroundColor}
          deleteBox={deleteBox}
          id={box.id}
        />
      ))}
      <br></br>
      <NewBoxForm addBox={addBox} />
    </div>
  );
}

export default BoxList;
