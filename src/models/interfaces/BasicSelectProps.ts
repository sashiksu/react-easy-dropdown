import BasicSelectOption from "./BasicSelectOption";
export default interface BasicSelectProps {
  options: BasicSelectOption[];
  value: BasicSelectOption;
  name: string; //name for the select
  id: string; //id for the select
  required: boolean; //whether select is required field or not
  disabled: boolean; //whether select  is disabled or not
  autofocus: boolean; //whether need to focus select control
}
