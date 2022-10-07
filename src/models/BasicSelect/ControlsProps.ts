import React from "react";
import { BasicSelectOption, MockMinimulEvent } from "./ControlsDefinitions";
import {
  HighlightedOptionStyles,
  LabelTextStyles,
  LabelWrapperStyles,
  OptionStyles,
  OptionsWrapperStyles,
  SecondaryLabelWrapperStyles,
  SecondaryTextStyles,
  SelectContainerStyles,
  SelectedOptionStyles,
  WrapperStyles,
} from "./ControlStyles";

interface BasicSelectControlProps {
  //common select component related functionality props
  options: BasicSelectOption[];
  name: string; //name for the select
  value?: BasicSelectOption;
  id?: string; //id for the select
  required?: boolean; //whether select is required field or not
  disabled?: boolean; //whether select  is disabled or not
  autofocus?: boolean; //whether need to focus select control
  userTriedSubmit?: boolean;

  // select events
  onSelect: (event: MockMinimulEvent) => MockMinimulEvent;
  onBlur?: () => void;
  onFocus?: () => void;
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
    - Options Container
  */
  //additional styles related props
  wrapperStyles?: WrapperStyles; //JSX style object for outer most wrapper (wrapper of lebel and select component)

  //label related props
  hasLabelText?: boolean; //this will add label to top of select component
  labelWrapperStyles?: LabelWrapperStyles; // JSX style obj for label component
  //label text related props
  labelText?: string; //define what you need to show above select component
  labelTextStyles?: LabelTextStyles; // JSX style obj for label text
  //secondary label text related props
  hasSecondarTextForLabel?: boolean;
  secondaryTextWrapperStyle?: SecondaryLabelWrapperStyles;
  secondaryText?: string;
  secondaryTextStyles?: SecondaryTextStyles;

  //select component container related props
  selectContainerStyles: SelectContainerStyles;
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

  //options container related props
  optionsWrapperStyles?: OptionsWrapperStyles;
  optionStyles?: OptionStyles;
  selectedOptionStyles?: SelectedOptionStyles;
  highlightedOtionStyles?: HighlightedOptionStyles;
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

interface ClearControlProps {
  clearHandler: () => void;
  selectedValue: BasicSelectOption | undefined;
}
interface ValueControlProps {
  selectedValue: BasicSelectOption | undefined;
  showOptions: boolean;
  onClickHanlder: (showOptions: boolean) => void;
}
export { BasicSelectControlProps, BasicOptionsProps, ClearControlProps, ValueControlProps };
