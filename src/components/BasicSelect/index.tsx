import React, { Component, createRef } from "react";
import { BasicSelectOption } from "../../models/Select/SelectControlsDefinitions";
import { BasicSelectControlProps } from "../../models/Select/SelectControlsProps";
import { BasicSelectControlState } from "../../models/Select/SelectControlsState";
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
    };
  }

  selectOption = (option: BasicSelectOption): void => {
    this.setState({
      selectedValue: option,
      showOptions: false,
    });
  };

  showOption = (isShow: boolean): void => {
    this.setState({
      showOptions: isShow,
    });
  };

  setHighlightedOptionId = (optionId: string | number) => {
    this.setState({
      highlightedOptionId: optionId,
    });
  };

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
    });
  };

  render(): JSX.Element {
    const { options, id /* required, disabled, autofocus */, selectContainerStyles } = this.props;
    const { basicSelectRef, selectedValue, showOptions, highlightedOptionId } = this.state;

    return (
      <div className='basic-select'>
        <Label {...this.props} />
        <div
          tabIndex={0}
          className='basic-select__container'
          style={selectContainerStyles}
          id={id}
          ref={basicSelectRef}
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
            selectOption={this.selectOption}
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
    value: undefined,
    required: false,
    disabled: false,
    autofocus: false,
    //additionally introduced functionality related props

    hasLabelText: false,
    labelWrapperStyles: {},

    labelText: "Select a option:",
    labelTextStyles: {},

    hasSecondarTextForLabel: false,
    secondaryText: "",
    secondaryTextStyles: {},

    selectContainerStyles: {},

    showDropdownOnClickOfValue: false,

    hasClear: true,
    clearControlEle: <span>&times;</span>,

    hasDivider: true,

    hasDropdown: true,
    dropdownEle: <span>￬</span>,
  };
}

export default BasicSelect;
