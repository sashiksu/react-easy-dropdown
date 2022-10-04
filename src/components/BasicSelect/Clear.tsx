import React from "react";
import { BasicSelectControlProps } from "../../models/Select/SelectControlsProps";

interface ClearControlProps {
  clearHandler: () => void;
}

const Clear = (props: BasicSelectControlProps & ClearControlProps) => {
  const { disabled, hasClear, clearControlEle, clearHandler } = props;
  return (
    <>
      {hasClear && (
        <button className={`basic-select__clear-btn ${disabled ? "no-events" : ""}`} onClick={() => clearHandler()}>
          {clearControlEle}
        </button>
      )}
    </>
  );
};

export default Clear;
