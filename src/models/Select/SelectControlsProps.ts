import { BasicSelectOption } from "./SelectControlsDefinitions";

interface BasicSelectControlProps {
  options: BasicSelectOption[];
  value: BasicSelectOption;
  name: string; //name for the select
  id: string; //id for the select
  required: boolean; //whether select is required field or not
  disabled: boolean; //whether select  is disabled or not
  autofocus: boolean; //whether need to focus select control
}

interface BasicOptionsProps {
  options: BasicSelectOption[];
  selectOption: (option: BasicSelectOption) => void;
  showOptions: boolean;
  selectedValue: BasicSelectOption;
  showOption: (isShow: boolean) => void;
}

export { BasicSelectControlProps, BasicOptionsProps };
