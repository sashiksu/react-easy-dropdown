import React from "react";
import { BasicSelectControlProps } from "../../models/Select/SelectControlsProps";

interface DropdownControlProps {
  showOptions: boolean;
  onClickHanlder: (showOptions: boolean) => void;
}

const Dropdown = (props: BasicSelectControlProps & DropdownControlProps) => {
  const { hasDropdown, dropdownEle, showOptions, onClickHanlder } = props;
  return (
    <>
      {hasDropdown && (
        <div className='basic-select__dropdown' onClick={() => onClickHanlder(!showOptions)}>
          {dropdownEle}
        </div>
      )}
    </>
  );
};

export default Dropdown;
