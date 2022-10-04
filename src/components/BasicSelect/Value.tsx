import React from "react";
import { BasicSelectOption } from "../../models/Select/SelectControlsDefinitions";
import { BasicSelectControlProps } from "../../models/Select/SelectControlsProps";

interface ValueControlProps {
  selectedValue: BasicSelectOption | undefined;
  showOptions: boolean;
  onClickHanlder: (showOptions: boolean) => void;
}
const Value = (props: BasicSelectControlProps & ValueControlProps) => {
  const { showDropdownOnClickOfValue, selectedValue, showOptions, onClickHanlder } = props;
  return (
    <>
      <span
        className='basic-select__value'
        style={showDropdownOnClickOfValue ? { cursor: "pointer" } : { cursor: "auto" }}
        onClick={() => (showDropdownOnClickOfValue ? onClickHanlder(!showOptions) : null)}
      >
        {selectedValue ? selectedValue.value : "Select Item"}
      </span>
    </>
  );
};

export default Value;
