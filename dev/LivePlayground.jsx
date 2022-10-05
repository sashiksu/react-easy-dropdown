import React, { useEffect, useState } from "react";
import { BasicSelect, MyCounter } from "../src";
import { SampleOptionsData } from "./optionData";

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
            options={SampleOptionsData}
            onSelect={(optionId) => {
              console.log(optionId);
            }}
            wrapperStyles={{ backgroundColor: "#f2f2f2" }}
            value={SampleOptionsData[3]}
            disabled={false}
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

          <BasicSelect options={SampleOptionsData} labelText={"Please select a option your own choice :"} />
        </div>
      </div>
    </div>
  );
};

export default LivePlayground;
