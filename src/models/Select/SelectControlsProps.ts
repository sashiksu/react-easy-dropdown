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
  //additionally introduced functionality related props
  isShowOptionsOnValueClick?: boolean;
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
