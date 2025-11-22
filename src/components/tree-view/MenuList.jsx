import React from "react";
import MenuItem from "./MenuItem";
import style from "./treeview.module.css";

const MenuList = ({ list = [] }) => {
  return (
    <ul className={style["menu-list-container"]}>
      {list?.length
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
