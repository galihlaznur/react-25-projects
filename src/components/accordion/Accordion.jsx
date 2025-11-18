import React, { useState } from "react";
import data from "./data";
import style from "./accordion.module.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (i) => {
    // console.log(i);
    setSelected(i === selected ? null : i);
  };

  const handleMultipleSelection = (i) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(i);

    // console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(i);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  };

  // console.log(selected, multiple);

  return (
    <>
      <div className={style.wrapper}>
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          {enableMultiSelection ? "Disable" : "Enable"} Multi Selection
        </button>
        <div className={style.accordion}>
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className={style["accordion-item"]} key={item.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultipleSelection(item.id)
                      : () => handleSingleSelection(item.id)
                  }
                  className={style.title}
                >
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>

                {enableMultiSelection
                  ? multiple.indexOf(item.id) !== -1 && (
                      <div className={style.content}>{item.answer}</div>
                    )
                  : selected === item.id && (
                      <div className={style.content}>{item.answer}</div>
                    )}

                {/* {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                  <div className={style.content}>{item.answer}</div>
                ) : null} */}
              </div>
            ))
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
