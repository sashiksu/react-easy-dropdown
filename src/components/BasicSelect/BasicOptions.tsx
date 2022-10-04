import React, { useEffect, useRef } from "react";
import { BasicOptionsProps } from "../../models/Select/SelectControlsProps";

const BasicOptions = ({
  options,
  selectOption,
  showOptions,
  selectedValue,
  showOption,
  highlightedOptionId,
  setHighlightedOptionId,
  basicSelectRef,
}: BasicOptionsProps) => {
  const ref = useRef<HTMLUListElement>(null);

  /* 
  Handle dropdown option list outside click events
  */
  useEffect(() => {
    const onBodyClick = (e: Event): void => {
      if (basicSelectRef.current!.contains(e.target as HTMLElement)) {
        return;
      }
      showOption(false);
    };
    document.addEventListener("click", onBodyClick);
    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <ul className={`options ${showOptions ? "show" : ""}`} ref={ref}>
      {options.map((option) => {
        return (
          <li
            className={`option ${selectedValue && selectedValue.id == option.id ? "selected" : ""} ${
              highlightedOptionId == option.id ? "highlighted" : ""
            }`}
            key={option.id}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
            }}
            onMouseEnter={() => setHighlightedOptionId(option.id)}
          >
            {option.value}
          </li>
        );
      })}
    </ul>
  );
};

export default BasicOptions;
