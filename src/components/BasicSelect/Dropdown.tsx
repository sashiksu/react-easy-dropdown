import React from "react";
import { BasicSelectControlProps } from "../../models/Select/SelectControlsProps";

interface DropdownControlProps {
  showOptions: boolean;
  onClickHanlder: (showOptions: boolean) => void;
}

const Dropdown = (props: BasicSelectControlProps & DropdownControlProps) => {
  const { disabled, hasDropdown, dropdownEle, showOptions, onClickHanlder } = props;
  return (
    <>
      {hasDropdown && (
        <div
          className={`basic-select__dropdown ${disabled ? "no-events" : ""}`}
          onClick={() => onClickHanlder(!showOptions)}
        >
          {dropdownEle}
        </div>
      )}
    </>
  );
};

export default Dropdown;
