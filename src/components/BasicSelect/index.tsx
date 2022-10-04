import React, { Component, createRef } from "react";
import { BasicSelectOption } from "../../models/Select/SelectControlsDefinitions";
import { BasicSelectControlProps } from "../../models/Select/SelectControlsProps";
import { BasicSelectControlState } from "../../models/Select/SelectControlsState";
import BasicOptions from "./BasicOptions";
import "./styles.css";
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

  reset = (): void => {
    if (this.state.showOptions) {
      this.setState({
        showOptions: false,
      });
    }
    this.setState({
      highlightedOptionId: null,
      showOptions: false,
    });
  };

  /* onBodyClick = (e: Event): void => {
    if (this.state.basicSelectRef.current!.contains(e.target as HTMLElement)) {
      return;
    }
    this.showOption(false);
  };

  componentDidMount(): void {
    document.addEventListener("click", this.onBodyClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener("click", this.onBodyClick);
  } */

  render(): JSX.Element {
    const { options, id /* required, disabled, autofocus */ } = this.props;
    const { basicSelectRef, selectedValue, showOptions, highlightedOptionId } = this.state;

    return (
      <>
        <div tabIndex={0} className='basic-select-container' id={id} ref={basicSelectRef}>
          <span className='value'>{selectedValue ? selectedValue.value : "Select Item"}</span>
          <button className='clear-btn' onClick={() => this.reset()}>
            &times;
          </button>
          <div className='divider'></div>
          <div className='caret' onClick={() => this.showOption(!showOptions)}></div>
          {/* <ul className={`options ${showOptions ? "show" : ""}`}>
            {options.map((option) => {
              return (
                <li
                  className={`option ${selectedValue && selectedValue.id == option.id ? "selected" : ""} ${
                    highlightedOptionId == option.id ? "highlighted" : ""
                  }`}
                  key={option.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.selectOption(option);
                  }}
                  onMouseEnter={() => this.setHighlightedOptionId(option.id)}
                >
                  {option.value}
                </li>
              );
            })}
          </ul> */}
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
      </>
    );
  }

  public static defaultProps: Partial<BasicSelectControlProps> = {
    value: undefined,
    required: false,
    disabled: false,
    autofocus: false,
  };
}

export default BasicSelect;
