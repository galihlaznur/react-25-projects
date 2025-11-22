import React from "react";
import MenuList from "./MenuList";
import style from "./treeview.module.css";

const TreeView = ({ menus = [] }) => {
  return (
    <div className={style["tree-view-container"]}>
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
