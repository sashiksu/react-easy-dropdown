import React from "react";
import { BasicSelectControlProps } from "../../models/Select/SelectControlsProps";

const Label = (props: BasicSelectControlProps) => {
  const {
    hasLabelText,
    labelWrapperStyles,
    labelText,
    labelTextStyles,
    hasSecondarTextForLabel,
    secondaryTextWrapperStyle,
    secondaryText,
    secondaryTextStyles,
  } = props;
  return (
    <>
      {hasLabelText && (
        <span className='select__label--wrapper' style={labelWrapperStyles}>
          <p className='select__label--text' style={labelTextStyles}>
            {labelText}
          </p>
        </span>
      )}
      {hasSecondarTextForLabel && (
        <span className='select__label--secondary-wrapper' style={secondaryTextWrapperStyle}>
          <p className='select__label--secondary-text' style={secondaryTextStyles}>
            {secondaryText}
          </p>
        </span>
      )}
    </>
  );
};

export default Label;
