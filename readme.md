# **React Easy Dropdown**

**Contains minimum no of dependencies !**

## A simple select component for the React Library.

> In the v1.0.0 provided basic select component with powerfull customization options.

---

<br/>

### Two Steps :

1. Install it <br/>

```react
npm i react-easy-dropdown
```

2. Import it to your React Component and use.
   _(See below example with example form)_<br/>

```react
import React, { useState } from "react";
import { BasicSelect } from "react-easy-dropdown";
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
              options={SampleOptionsData}
              onSelect={(event) => {
                handleChange(event);
              }}
              wrapperStyles={{ backgroundColor: "#f2f2f2" }}
              value={SampleOptionsData[2]}
              hasLabelText={true}
              labelWrapperStyles={{ marginBottom: "0" }}
              labelText={"Please select a option :"}
              labelTextStyles={{ fontWeight: "700" }}
              hasSecondarTextForLabel={true}
              secondaryTextWrapperStyle={{ backgroundColor: "#eee" }}
              secondaryText={
                "This secondary text comes under the label text of component"
              }
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

## Props Definitions :

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Definition</th>
      <th>Required</th>
      <th>Default</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td colspan="5">Basic Props</td>
  </tr>
   <tr>
    <td><code>options</code></td>
    <td>sturctured objects of array where each object have id and name as properties</td>
    <td>No</td>
    <td><code>[]</code></td>
    <td><code>[{ id: 1, value: &quot;Option 1&quot; },{ id: 2, value: &quot;Option 2&quot; },]</code></td>
  </tr>
  <tr>
    <td><code>name</code></td>
    <td>name attribute of component</td>
    <td>Yes</td>
    <td><code>&quot;select-comp&quot;</code></td>
    <td><code>&quot;country-dropdown&quot;</code></td>
  </tr>
  <tr>
    <td><code>value</code></td>
    <td>Default value/ selected value</td>
    <td>No</td>
    <td><code>undefined</code></td>
    <td><code>{ id: 1, value: &quot;Option 1&quot; }</code></td>
  </tr>
  <tr>
    <td><code>id</code></td>
    <td>id attribute of component</td>
    <td>No</td>
    <td><code>&quot;select-comp&quot;</code></td>
    <td><code>&quot;country-dropdown&quot;</code></td>
  </tr>
  <tr>
    <td><code>required</code></td>
    <td>whether required field or not</td>
    <td>No</td>
    <td><code>false</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>disabled</code></td>
    <td>whether component is in disabled mode or not</td>
    <td>No</td>
    <td><code>false</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>userTriedSubmit</code></td>
    <td>this prop can use for validation purpose, when user tries submit and got validation errors can mark component with red outline along with setting <code>required</code> to <code>true</code></td>
    <td>No</td>
    <td><code>false</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>onSelect</code></td>
    <td>function to run when user select option from dropdown. this will return object similar to <code>{target: { name: string; value: string }}</code></td>
    <td>Yes</td>
    <td></td>
    <td><code>(event) =&gt; {handleChange(event)</code></td>
  </tr>
  <tr>
    <td><code>onBlur</code></td>
    <td>function to excute when user going away from select component. have no return type</td>
    <td>No</td>
    <td></td>
    <td><code>() =&gt; console.log(&#39;blur event occurs)</code></td>
  </tr>
  <tr>
    <td><code>onFocus</code></td>
    <td>function to execute when user focus to select component. have no return type</td>
    <td>No</td>
    <td></td>
    <td><code>() =&gt; console.log(&#39;focus event occurs)</code></td>
  </tr>
  <tr>
    <td colspan="5">Additionaly Introduced Props</td>
  </tr>
  <tr>
    <td><code>wrapperStyles</code></td>
    <td>jsx style object to style entire wrapper of select component with label, secondary label and select component area</td>
    <td>No</td>
    <td></td>
    <td><code>{ backgroundColor: &quot;#f2f2f2&quot; }</code></td>
  </tr>
  <tr>
    <td><code>hasLabelText</code></td>
    <td>can show or hide label text using this prop</td>
    <td>No</td>
    <td><code>false</code></td>
    <td><code>true</code></td>
  </tr>
  <tr>
    <td><code>labelWrapperStyles</code></td>
    <td>jsx style object for style label component except label text</td>
    <td>No</td>
    <td><code></code></td>
    <td><code>{ backgroundColor: &quot;#e2f2f2&quot; }</code></td>
  </tr>
  <tr>
    <td><code>labelText</code></td>
    <td>text string for lebel</td>
    <td>No</td>
    <td><code>"Select a option:"</code></td>
    <td><code>"Select a Country :"</code></td>
  </tr>
  <tr>
    <td><code>labelTextStyles</code></td>
    <td>jsx style object to style label text. this won't affect to <code>labelWrapperStyles</code> wrapper styles</td>
    <td>No</td>
    <td></td>
    <td><code>{ fontWeight: "700" }</code></td>
  </tr>
  <tr>
    <td><code>hasSecondarTextForLabel</code></td>
    <td>can show or hide secondary text for label</td>
    <td>No</td>
    <td><code>false</code></td>
    <td><code>true</code></td>
  </tr>
   <tr>
    <td><code>secondaryTextWrapperStyle</code></td>
    <td>jsx style object to style secondary label text wrapper</td>
    <td>No</td>
    <td></td>
    <td><code>{  backgroundColor: &quot;#a2f2f2&quot; }</code></td>
  </tr>
   <tr>
    <td><code>secondaryTextStyles</code></td>
    <td>jsx style object to style secondary label text. this won't affect to <code>secondaryTextWrapperStyle</code> wrapper styles</td>
    <td>No</td>
    <td></td>
    <td><code>{  marginBottom: "0.8em", fontWeight: "100", fontSize: ".9rem" }</code></td>
  </tr>
   <tr>
    <td><code>selectContainerStyles</code></td>
    <td>jsx style object to style select component itself</td>
    <td>No</td>
    <td></td>
    <td><code>{  backgroundColor: "#f2f2f2", borderRadius: ".6rem" }</code></td>
  </tr>
   <tr>
    <td><code>showDropdownOnClickOfValue</code></td>
    <td>if you want to open dropdown when click on value of select component, then use this prop</td>
    <td>No</td>
    <td><code>false</code></td>
    <td><code>true</code></td>
  </tr>
   <tr>
    <td><code>hasClear</code></td>
    <td>show or hide select component clear button</td>
    <td>No</td>
    <td><code>false</code></td>
    <td><code>true</code></td>
  </tr>
   <tr>
    <td><code>clearControlEle</code></td>
    <td>you can pass your own icon,text or HTML element to appear as clear component. but use this prop appropriately</td>
    <td>No</td>
    <td>close SVG icon</td>
    <td><code><span>X</span></code></td>
  </tr>
   <tr>
    <td><code>hasDivider</code></td>
    <td>show or hide divider line in between clear and dropdpwn icon</td>
    <td>No</td>
    <td><code>true</code></td>
    <td><code>false</code></td>
  </tr>
   <tr>
    <td><code>hasDropdown</code></td>
    <td>show or hide dropdown icon. Hint : if you hide both divider and dropdown icon, make sure to enable <code>showDropdownOnClickOfValue</code> so you can get new look and feel of select component</td>
    <td>No</td>
    <td><code>true</code></td>
    <td><code>false</code></td>
  </tr>
   <tr>
    <td><code>dropdownEle</code></td>
    <td>you can pass your own icon,text or HTML element to appear as dropdown component. but use this prop appropriately</td>
    <td>No</td>
    <td>dropdown SVG icon</td>
    <td><code><span>#</span></code></td>
   </tr>
  </tbody>
</table>

## Contribution

Open for contributions

## License

MIT Licensed. Copyright (c) Sashika Suraweera 2022.
