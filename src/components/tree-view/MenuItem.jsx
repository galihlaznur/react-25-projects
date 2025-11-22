import React, { useState } from "react";
import MenuList from "./MenuList";
import style from "./treeview.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (label) => {
    setDisplayCurrentChildren((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <li>
      <div className={style["menu-item"]}>
        <p>{item.label}</p>
        {item?.children?.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={15} /> : <FaPlus color="#fff" size={15} />}
          </span>
        ) : null}
      </div>
      {item?.children?.length && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
