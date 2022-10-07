import React, { useState } from "react";
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
  const [formInfo, setFormInfo] = useState({
    text: "",
    select: "",
    textArea: "",
  });

  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInfo);
  };

  return (
    <div className='container mb-5 mt-5'>
      <div className='row'>
        <div className='col-md-6'></div>
        <div className='col-md-6'>
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className='mb-3'>
              <label htmlFor='simpleTextInput' className='form-label'>
                Type Something
              </label>
              <input
                type='text'
                id='simpleTextInput'
                className='form-control'
                name='text'
                value={formInfo.text}
                placeholder='Simple text input'
                autoComplete='off'
                onChange={(event) => handleChange(event)}
                required={true}
              />
            </div>
            <BasicSelect
              name='select'
              required={true}
              userTriedSubmit={true}
              options={SampleOptionsData}
              onSelect={(event) => {
                handleChange(event);
              }}
              wrapperStyles={{ backgroundColor: "#f2f2f2" }}
              //value={SampleOptionsData[3]}
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
            <div className='mb-3'>
              <label htmlFor='simpleTextArea' className='form-label'>
                Type Something long text
              </label>
              <textarea
                name='textArea'
                className='form-control'
                id='simpleTextArea'
                placeholder='Simple text area'
                value={formInfo.textArea}
                onChange={(event) => handleChange(event)}
              ></textarea>
            </div>

            <div className='d-grid gap-2 d-md-block'>
              <button type='submit' className='btn btn-primary'>
                Save
              </button>
              <button type='reset' className='btn btn-danger'>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LivePlayground;
