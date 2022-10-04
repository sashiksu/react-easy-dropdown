import React from "react";
import { BasicSelect, MyCounter } from "../src";

const options = [
  { id: 1, value: "Sample value", selected: false },
  { id: 2, value: "Sample value 2", selected: false },
  { id: 3, value: "Sample value 3", selected: false },
  { id: 4, value: "Sample value 4", selected: false },
  { id: 5, value: "Sample value 5", selected: false },
  { id: 6, value: "Sample value", selected: false },
  { id: 7, value: "Sample value 2", selected: false },
  { id: 8, value: "Sample value 3", selected: false },
  { id: 9, value: "Sample value 4", selected: false },
  { id: 10, value: "Sample value 5", selected: false },
];
/* 
This is the base component file;
which developers can import developing components and test how it looks and feels
*/
const LivePlayground = () => {
  return (
    <div className='container mb-5 mt-5'>
      <h1>React Simple Select</h1>
      <div className='row'>
        <h2>Simple and Minimum Select</h2>
        <div className='col-md-6'></div>
        <div className='col-md-6'>
          <BasicSelect
            options={options}
            //value={options[0]}
            hasLabelText={true}
            //labelWrapperStyles={{ backgroundColor: "#eff" }}
            labelText={"Please select a option your own choice :"}
            //labelTextStyles={{ fontWeight: "700" }}
            hasSecondarTextForLabel={true}
            //secondaryTextWrapperStyle={{ backgroundColor: "#eee", fontWeight: "100", fontSize: "1.1rem" }}
            secondaryText={
              "I'd like to pass varA,varB,varC,varD to my component, but not one by one because the number of variables inside objA and objB should be unknown."
            }
            secondaryTextStyles={{ marginBottom: "0.5em" }}
            //secondaryTextStyles={{ fontSize: "0.7rem" }}
            //wrapperStyles={{ color: "red", fontSize: "2rem" }}
            //showDropdownOnClickOfValue={true}
            selectContainerStyles={{ backgroundColor: "aqua", borderRadius: "1rem", border: "2px dashed #001" }}
            //hasClear={false}
            //clearControlEle={<span>-x-</span>}
            //hasDivider={false}
          />
        </div>
      </div>
    </div>
  );
};

export default LivePlayground;
