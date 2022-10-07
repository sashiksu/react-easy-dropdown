import React from "react";
import { BasicSelectControlProps, ClearControlProps } from "../../models";

const Clear = (props: BasicSelectControlProps & ClearControlProps) => {
  const { disabled, hasClear, clearControlEle, clearHandler, selectedValue } = props;
  return (
    <>
      {hasClear && (
        <div
          className={`basic-select__clear-btn ${disabled ? "no-events" : ""}`}
          onClick={() => (selectedValue ? clearHandler() : {})}
        >
          {clearControlEle}
        </div>
      )}
    </>
  );
};

export default Clear;
