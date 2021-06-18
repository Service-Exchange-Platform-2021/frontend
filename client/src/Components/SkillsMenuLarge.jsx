import React, { useState } from "react";
import * as Icons from "react-icons/io5";
import onClickOutside from "react-onclickoutside";
import { useLocation } from "react-router-dom";
// npm install react-onclickoutside --save
// npm update --force

function SkillsMenu({
  title,
  items = [],
  multiSelect = false,
  selection,
  handleSelection,
  showSkillsSelection,
  setShowSkillsSelection,
}) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  SkillsMenu.handleClickOutside = () => setOpen(false);

  const location = useLocation();

  function handleOnClick(item) {
    //console.log(location);
    if (location.pathname === "/" && showSkillsSelection !== "block") {
      setShowSkillsSelection("block");
    }
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        handleSelection([item]);
      } else if (multiSelect) {
        handleSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection; //clone
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      handleSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  function clearUp(id) {
    let selectionAfterRemoval = [...selection]; //clone
    selectionAfterRemoval = selectionAfterRemoval.filter(
      (current) => current.id !== id
    );
    handleSelection([...selectionAfterRemoval]);
    //handleSelection([])
  }

  return (
    <form className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header_title ">
          <p className="dd-header_title--bold dropdown-toggle">{title}</p>
          {
            <div className="dd-header_action">
              <p className="btn btnCat offerBtn"></p>
            </div>
          }
        </div>
      </div>

      {selection.length > 0 && (
        <div className="listLarge">
          <ul
            className="selectionList"
            style={{ display: showSkillsSelection }}
          >
            {selection.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  {selection.length > 0 ? (
                    <button className="clear" onClick={() => clearUp(item.id)}>
                      <Icons.IoCloseSharp />
                    </button>
                  ) : (
                    " "
                  )}{" "}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {open && (
        <ul className="largeMenu dd-list dropdown-menu show">
          {items.map((item) => (
            <li className="dropdown-item dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                {<span>{item.value}</span>}
                <span className="spanY">
                  {isItemInSelection(item) && (
                    <p className="y">
                      <Icons.IoCloudDoneSharp />
                    </p>
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SkillsMenu.handleClickOutside,
};
export default onClickOutside(SkillsMenu, clickOutsideConfig);

//export default SkillsMenu;
