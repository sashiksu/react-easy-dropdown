import React from "react";
import { BasicSelectOption } from "./SelectControlsDefinitions";

interface BasicSelectControlProps {
  //common select component related functionality props
  options: BasicSelectOption[];
  value?: BasicSelectOption;
  name?: string; //name for the select
  id?: string; //id for the select
  required?: boolean; //whether select is required field or not
  disabled?: boolean; //whether select  is disabled or not
  autofocus?: boolean; //whether need to focus select control

  /* 
  Additionally introduced functionality related props
  Props for :
    - Wrapper
    - Label, Wrapper, Text
    - Secondary Text for Label
    - Select Component
    - Value
    - Clear
    - Divider
    - Dropdown
  */
  //additional styles related props
  wrapperStyles?: object; //JSX style object for outer most wrapper (wrapper of lebel and select component)

  //label related props
  hasLabelText?: boolean; //this will add label to top of select component
  labelWrapperStyles?: object; // JSX style obj for label component
  //label text related props
  labelText?: string; //define what you need to show above select component
  labelTextStyles?: object; // JSX style obj for label text
  //secondary label text related props
  hasSecondarTextForLabel?: boolean;
  secondaryTextWrapperStyle?: object;
  secondaryText?: string;
  secondaryTextStyles?: object;

  //select component container related props
  selectContainerStyles: object;
  //value display props
  showDropdownOnClickOfValue: boolean;
  //clear related props
  hasClear?: boolean;
  clearControlEle?: React.ReactNode;

  //divider related props
  hasDivider?: boolean;

  //dropdown related props
  hasDropdown?: boolean;
  dropdownEle?: React.ReactNode;
}

interface BasicOptionsProps {
  options: BasicSelectOption[];
  selectOption: (option: BasicSelectOption) => void;
  showOptions: boolean;
  selectedValue: BasicSelectOption | undefined;
  showOption: (isShow: boolean) => void;
  highlightedOptionId: string | number | null;
  setHighlightedOptionId: (optionId: string | number) => void;
  basicSelectRef: React.RefObject<HTMLDivElement>;
}

export { BasicSelectControlProps, BasicOptionsProps };
