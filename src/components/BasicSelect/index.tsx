import React, { Component } from "react";
import { BasicSelectOption, BasicSelectProps } from "../../models";
import "./styles.css";
interface BasicSelectState {
  selectedValue: BasicSelectOption;
  showOptions: boolean;
}
export default class BasicSelect extends Component<BasicSelectProps, BasicSelectState> {
  constructor(props: BasicSelectProps) {
    super(props);
    this.state = {
      selectedValue: props.value,
      showOptions: false,
    };
  }

  selectOption = (option: BasicSelectOption): void => {
    this.setState({
      selectedValue: option,
      showOptions: false,
    });
  };

  showOptions = (): void => {
    this.setState({
      showOptions: !this.state.showOptions,
    });
  };

  render(): React.ReactNode {
    const { options /*  name, id, required, disabled, autofocus */ } = this.props;
    const { selectedValue, showOptions } = this.state;

    return (
      <>
        <div tabIndex={0} className='basic-select-container'>
          <span className='value'>{selectedValue.value}</span>
          <button className='clear-btn'>&times;</button>
          <div className='divider'></div>
          <div className='caret' onClick={() => this.showOptions()}></div>
          <ul className={`options ${showOptions ? "show" : ""}`}>
            {options.map((option) => {
              return (
                <li className={`option `} key={option.id} onClick={() => this.selectOption(option)}>
                  {option.value}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
