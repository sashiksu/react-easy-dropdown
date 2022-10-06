import React from "react";
import { BasicSelect } from "../src";
const SampleOptionsData = [
  { id: 1, value: "Option 1" },
  { id: 2, value: "Option 2" },
  { id: 3, value: "Option 3" },
  { id: 4, value: "Option 4" },
  { id: 5, value: "Option 5" },
  { id: 6, value: "Option 6" },
  { id: 7, value: "Option 7" },
  { id: 8, value: "Option 8" },
  { id: 9, value: "Option 9" },
  { id: 10, value: "Option 10" },
];
/* 
This is the base component file;
which developers can import developing components and test how it looks and feels
*/
const LivePlayground = () => {
  return (
    <div className='container mb-5 mt-5'>
      <div className='row'>
        <div className='col-md-6'></div>
        <div className='col-md-6'>
          <BasicSelect
            required={true}
            userTriedSubmit={false}
            options={SampleOptionsData}
            onSelect={(optionId) => {
              console.log(optionId);
            }}
            wrapperStyles={{ backgroundColor: "#f2f2f2" }}
            value={SampleOptionsData[3]}
            //disabled={true}
            hasLabelText={true}
            labelWrapperStyles={{ marginBottom: "0" }}
            labelText={"Please select a option :"}
            labelTextStyles={{ fontWeight: "700" }}
            hasSecondarTextForLabel={true}
            secondaryTextWrapperStyle={{ backgroundColor: "#eee" }}
            secondaryText={
              "I'd like to pass varA,varB,varC,varD to my component, but not one by one because the number of variables inside objA and objB should be unknown."
            }
            secondaryTextStyles={{ marginBottom: "0.8em", fontWeight: "100", fontSize: ".9rem" }}
            showDropdownOnClickOfValue={false}
            selectContainerStyles={{ backgroundColor: "#f2f2f2", borderRadius: ".6rem" }}
            hasClear={true}
            //clearControlEle={<span>Clear</span>}
            hasDivider={true}
            onFocus={() => {
              console.log("user focused !");
            }}
            onBlur={() => {
              console.log("user blur !");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LivePlayground;
