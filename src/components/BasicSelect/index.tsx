import React, { Component, createRef } from "react";
import { BasicSelectControlProps, BasicSelectControlState, BasicSelectOption } from "../../models";
import ClearIcon from "../Icons/ClearIcon";
import DropdownIcon from "../Icons/DropdownIcon";
import BasicOptions from "./BasicOptions";
import Clear from "./Clear";
import Divider from "./Divider";
import Dropdown from "./Dropdown";
import Label from "./Label";
import "./styles.css";
import Value from "./Value";
class BasicSelect extends Component<BasicSelectControlProps, BasicSelectControlState> {
  constructor(props: BasicSelectControlProps) {
    super(props);
    this.state = {
      basicSelectRef: createRef<HTMLDivElement>(),
      selectedValue: props.value,
      showOptions: false,
      highlightedOptionId: null,
      hasUserTouched: false,
    };
  }
  /* -------------------- Basic Functionalities -------------------- */
  /* 
    Handle user selection 
  */
  handleSelect = (option: BasicSelectOption): void => {
    const { onSelect } = this.props;
    this.setState({
      selectedValue: option,
      showOptions: false,
      hasUserTouched: true,
    });
    if (onSelect && typeof onSelect === "function") {
      onSelect(option.id);
      return;
    }
  };

  /* 
    Handle focus event
  */
  handleFocus = () => {
    const { onFocus } = this.props;
    if (onFocus && typeof onFocus === "function") {
      onFocus();
      return;
    }
  };

  /* 
    Handle blur event
  */
  handleBlur = () => {
    const { onBlur } = this.props;
    if (onBlur && typeof onBlur === "function") {
      onBlur();
      return;
    }
  };
  /* -------------------- Basic Functionalities -------------------- */

  /* -------------------- Additional Functionalities -------------------- */
  /* 
  Clear functionality to 
    - Reset current selected option,
    - Reset last highlightedOptionId,
    - Close options list if it is open
  */
  clear = (): void => {
    if (this.state.showOptions) {
      this.setState({
        showOptions: false,
      });
    }
    this.setState({
      highlightedOptionId: null,
      selectedValue: undefined,
      showOptions: false,
      hasUserTouched: true,
    });
  };
  /* -------------------- Additional Functionalities -------------------- */

  /* -------------------- Dependency Functionalities -------------------- */

  /*
  Shows / Hides dropdown option container
  */
  showOption = (isShow: boolean): void => {
    this.setState({
      showOptions: isShow,
    });
    if (isShow) {
      this.setState({ hasUserTouched: true });
    }
  };

  /*
  Highlights user hovering option in the dropdown
  */
  setHighlightedOptionId = (optionId: string | number) => {
    this.setState({
      highlightedOptionId: optionId,
    });
  };
  /* -------------------- Dependency Functionalities -------------------- */

  render(): JSX.Element {
    const { options, id, disabled, required, /*, autofocus */ userTriedSubmit, wrapperStyles, selectContainerStyles } =
      this.props;
    const { basicSelectRef, selectedValue, showOptions, highlightedOptionId, hasUserTouched } = this.state;

    return (
      <div className={`basic-select`} style={wrapperStyles}>
        <Label {...this.props} />
        <div
          tabIndex={0}
          className={`basic-select__container ${disabled ? "disabled-wrapper" : ""} ${
            hasUserTouched && userTriedSubmit && required ? "required" : ""
          }`}
          style={selectContainerStyles}
          id={id}
          ref={basicSelectRef}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
          <Value
            {...this.props}
            selectedValue={selectedValue}
            showOptions={showOptions}
            onClickHanlder={this.showOption}
          />
          <Clear {...this.props} clearHandler={this.clear} />
          <Divider {...this.props} />
          <Dropdown {...this.props} showOptions={showOptions} onClickHanlder={this.showOption} />
          <BasicOptions
            options={options}
            selectOption={this.handleSelect}
            showOptions={showOptions}
            selectedValue={selectedValue}
            showOption={this.showOption}
            highlightedOptionId={highlightedOptionId}
            setHighlightedOptionId={this.setHighlightedOptionId}
            basicSelectRef={this.state.basicSelectRef}
          />
        </div>
      </div>
    );
  }

  public static defaultProps: Partial<BasicSelectControlProps> = {
    options: [],
    value: undefined,
    required: false,
    disabled: false,
    autofocus: false,
    //userTriedSubmit: false,
    //additionally introduced functionality related props

    hasLabelText: false,

    labelText: "Select a option:",

    hasSecondarTextForLabel: false,
    secondaryText: "",

    showDropdownOnClickOfValue: false,

    hasClear: true,
    clearControlEle: <ClearIcon />,

    hasDivider: true,

    hasDropdown: true,
    //dropdownEle: <span>￬</span>,
    dropdownEle: <DropdownIcon />,
  };
}

export default BasicSelect;
