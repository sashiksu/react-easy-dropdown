import React from "react";
import { STYLES } from "../../constants";
import { BasicSelectControlProps, ValueControlProps } from "../../models";

const Value = (props: BasicSelectControlProps & ValueControlProps) => {
  const { disabled, showDropdownOnClickOfValue, selectedValue, showOptions, onClickHanlder } = props;
  return (
    <>
      <span
        className={`basic-select__value ${disabled ? "no-events" : ""}`}
        style={showDropdownOnClickOfValue ? { cursor: STYLES.POINTER_CURSOR } : { cursor: STYLES.NORMAL_CURSOR }}
        onClick={() => (showDropdownOnClickOfValue ? onClickHanlder(!showOptions) : null)}
      >
        {selectedValue ? selectedValue.value : "Select Item"}
      </span>
    </>
  );
};

export default Value;
