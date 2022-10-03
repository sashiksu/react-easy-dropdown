import React, { useEffect, useRef, useState } from "react";
import { BasicOptionsProps } from "../../models/Select/SelectControlsProps";

const BasicOptions = ({ options, selectOption, showOptions, selectedValue, showOption }: BasicOptionsProps) => {
  const [highlightedOptionId, setHighlightedOptionId] = useState<string | number | null>(null);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onBodyClick = (e: Event): void => {
      console.log(e.target);
      //console.log(ref.current);
      //if (ref != null) {
      if (ref!.current!.contains(e.target as HTMLElement)) {
        console.log("containing.....");
        return;
      }
      // }
      showOption(false);
    };
    //onBodyClick();
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <ul className={`options ${showOptions ? "show" : ""}`} ref={ref}>
      {/* <BasicOptions
            options={options}
            selectOption={this.selectOption}
            showOptions={showOptions}
            selectedValue={selectedValue}
            showOption={this.showOption}
          /> */}
      {options.map((option) => {
        return (
          <li
            className={`option ${selectedValue.id == option.id ? "selected" : ""} ${
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
