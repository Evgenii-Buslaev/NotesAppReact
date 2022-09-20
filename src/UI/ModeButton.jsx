import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

import { AppContext } from "../handlers/context";
import { changeMode } from "../handlers/mode";

import iconClasses from "../css/icons.module.css";

function ModeButton() {
  const { mode, setMode } = useContext(AppContext);

  function saveMode(mode) {
    if (localStorage.getItem("mode")) {
      localStorage.removeItem("mode");
    }
    localStorage.setItem("mode", mode);
  }

  return (
    <button>
      {mode === "dark" ? (
        <FaSun
          className={iconClasses.icon}
          onClick={() => {
            changeMode(mode, setMode);
            saveMode("light");
          }}
        />
      ) : (
        <MdDarkMode
          className={iconClasses.icon}
          onClick={() => {
            changeMode(mode, setMode);
            saveMode("dark");
          }}
        />
      )}
    </button>
  );
}

export default ModeButton;
