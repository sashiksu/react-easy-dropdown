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
      noOfTimesOptionsShowed: 0,
    };
  }
  /* -------------------- Basic Functionalities -------------------- */
  /* 
    Handle user selection 
  */
  handleSelect = (option: BasicSelectOption): void => {
    const { onSelect, name } = this.props;
    this.setState({
      selectedValue: option,
      showOptions: false,
    });
    if (onSelect && typeof onSelect === "function") {
      const mockMinimulEvent = { target: { name: name, value: option.id.toString() } };
      onSelect(mockMinimulEvent);
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
      hasUserTouched: false,
    });
    //show required indicator when user have cleared selected option
    if (this.state.noOfTimesOptionsShowed > 0 && this.state.selectedValue === undefined) {
      this.setHasUserTouched(true);
    }
  };
  /* -------------------- Additional Functionalities -------------------- */

  /* -------------------- Dependency Functionalities -------------------- */

  /*
  Shows / Hides dropdown option container
  */
  showOption = (isShow: boolean): void => {
    this.setState({
      showOptions: isShow,
      //keep increment when user open or move out(click outside) of dropdown list(options)
      noOfTimesOptionsShowed: this.state.noOfTimesOptionsShowed + 1,
    });
    //show required indicator when user have opened dropdown and not select any option
    if (this.state.noOfTimesOptionsShowed > 0 && this.state.selectedValue === undefined) {
      this.setHasUserTouched(true);
    }
    //hide required indicator when user select option from dropdown
    if (this.state.noOfTimesOptionsShowed > 0 && this.state.selectedValue !== undefined) {
      this.setHasUserTouched(false);
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

  /*
  Marking component to track whether user touched it or not
  */
  setHasUserTouched = (hasTouched: boolean) => {
    this.setState({ hasUserTouched: hasTouched });
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
            (hasUserTouched && required) || (required && userTriedSubmit) ? "required" : ""
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
          <Clear {...this.props} clearHandler={this.clear} selectedValue={selectedValue} />
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
    //common select component related functionality props
    options: [],
    name: "select-component",
    value: undefined,
    id: "select-component",
    required: false,
    disabled: false,
    //autofocus: false,
    userTriedSubmit: false,

    //select events
    //onSelect: () => {return;},
    //onBlur: () => {return;},
    //onFocus: () => {return;},

    //additionally introduced functionality related props
    //wrapperStyles: {},
    //label related props
    hasLabelText: false,
    //labelWrapperStyles:{},
    //label text related props
    labelText: "Select a option:",
    //labelTextStyles: {},
    //secondary label text related props
    hasSecondarTextForLabel: false,
    //secondaryTextWrapperStyle:{},
    secondaryText: "",
    //secondaryTextStyles:{},
    //select component container related props
    //selectContainerStyles:{},
    //value display props
    showDropdownOnClickOfValue: false,
    //clear related props
    hasClear: true,
    clearControlEle: <ClearIcon />,
    //divider related props
    hasDivider: true,
    //dropdown related props
    hasDropdown: true,
    dropdownEle: <DropdownIcon />,
    //options container related props
    //optionsWrapperStyles:{},
    //optionStyles:{},
    //selectedOptionStyles:{},
    //highlightedOtionStyles:{},
  };
}

export default BasicSelect;
