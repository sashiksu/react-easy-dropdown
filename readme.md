# React Simple Select

## A simple select component for the React Library.

**Contains minimum no of dependencies !**

> In the v1.0.0 provided basic select component with powerfull customization options.

---

<br/>

### Two Steps :

1. Install it <br/>

```
npm i react-simple-select
```

2. Import it to your React Component and use.
   _(See below example with example form)_<br/>

```
import React, { useState } from "react";
import { BasicSelect } from "../src";
const SampleOptionsData = [
  { id: 1, value: "Option 1" },
  { id: 2, value: "Option 2" },
  { id: 3, value: "Option 3" },
];
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
                //disabled
              />
            </div>
            <BasicSelect
              name='select'
              required={true}
              userTriedSubmit={false}
              options={SampleOptionsData}
              onSelect={(event) => {
                handleChange(event);
              }}
              wrapperStyles={{ backgroundColor: "#f2f2f2" }}
              value={SampleOptionsData[2]}
              disabled={true}
              hasLabelText={true}
              labelWrapperStyles={{ marginBottom: "0" }}
              labelText={"Please select a option :"}
              labelTextStyles={{ fontWeight: "700" }}
              hasSecondarTextForLabel={true}
              secondaryTextWrapperStyle={{ backgroundColor: "#eee" }}
              secondaryText={
                "This secondary text comes under the label text of component"
              }
              secondaryTextStyles={{fontWeight: "100" }}
              showDropdownOnClickOfValue={false}
              selectContainerStyles={{ backgroundColor: "#f2f2f2"}}
              hasClear={true}
              clearControlEle={<span>X</span>}
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

```

---

### To see all prop details of `<BasicSelect/>` component refer below table.

---

### Props Definitions :

| Props             | Definition                                                                                                                                                             | Is Required | Default Value   | Example Value                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | --------------- | -------------------------------------------------------------- |
| `options`         | sturctured objects of array where each object have id and name as properties                                                                                           | No          | `[]`            | `[{ id: 1, value: "Option 1" },{ id: 2, value: "Option 2" },]` |
| `name`            | name attribute of component                                                                                                                                            | Yes         | `"select-comp"` | `"country-dropdown"`                                           |
| `value`           | Default value/ selected value                                                                                                                                          | No          | `undefined`     | `{ id: 1, value: "Option 1" }`                                 |     |
| `id`              | id attribute of component                                                                                                                                              | No          | `"select-comp"` | `"country-dropdown"`                                           |
| `required`        | whether required field or not                                                                                                                                          | No          | `false`         | `true`                                                         |
| `disabled`        | whether component is in disabled mode or not                                                                                                                           | No          | `false`         | `true`                                                         |
| `userTriedSubmit` | this prop can use for validation purpose, when user tries submit and got validation errors can mark component with red outline along with setting `required` to `true` | No          | `false`         | `true`                                                         |
|`onSelect`|function to run when user select option from dropdown. this will return object similar to `{target: { name: string; value: string }}`|Yes||`(event) => {handleChange(event)`|
|`onBlur`|function to excute when user going away from select component. have no return type|No||`() => console.log('blur event occurs)`|
|`onFocus`|function to execute when user focus to select component. have no return type|No||`() => console.log('focus event occurs)`|
|Additional  |Introduced|Props|||
|`wrapperStyles`|react jsx style object to style entire wrapper of select component with label, secondary label and select component area|No||`{backgroundColor: "#f2f2f2" }`|