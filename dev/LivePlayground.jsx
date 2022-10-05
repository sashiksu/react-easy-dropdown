import React, { useEffect, useState } from "react";
import { BasicSelect, MyCounter } from "../src";
import { SampleOptionsData } from "./optionData";

/* 
This is the base component file;
which developers can import developing components and test how it looks and feels
*/
const LivePlayground = () => {
  const [select1, setSelect1] = useState(null);

  const handleSelectOne = (optionId) => {
    setSelect1(optionId);
  };

  useEffect(() => {
    console.log(select1);
  }, [select1]);

  return (
    <div className='container mb-5 mt-5'>
      <h1>React Simple Select</h1>
      <div className='row'>
        <h2>Simple and Minimum Select</h2>
        <div className='col-md-6'></div>
        <div className='col-md-6'>
          <BasicSelect
            options={SampleOptionsData}
            onSelect={(optionId) => {
              handleSelectOne(optionId);
            }}
            //value={SampleOptionsData[0]}
            //disabled={true}
            hasLabelText={true}
            labelWrapperStyles={{ marginBottom: "0" }}
            labelText={"Please select a option your own choice :"}
            //labelTextStyles={{ fontWeight: "700" }}
            hasSecondarTextForLabel={true}
            //secondaryTextWrapperStyle={{ backgroundColor: "#eee", fontWeight: "100", fontSize: "1.1rem" }}
            secondaryText={
              "I'd like to pass varA,varB,varC,varD to my component, but not one by one because the number of variables inside objA and objB should be unknown."
            }
            secondaryTextStyles={{ marginBottom: "0.8em" }}
            //secondaryTextStyles={{ fontSize: "0.7rem" }}
            //showDropdownOnClickOfValue={true}
            //selectContainerStyles={{ backgroundColor: "aqua", borderRadius: "1rem", border: "2px dashed #001" }}
            //hasClear={false}
            //clearControlEle={<span>-x-</span>}
            //hasDivider={false}
            //onFocus={() => { console.log("user focused !");}}
            //onBlur={() => { console.log("user blur !");}}
          />

          <BasicSelect options={SampleOptionsData} labelText={"Please select a option your own choice :"} />
        </div>
      </div>
    </div>
  );
};

export default LivePlayground;
