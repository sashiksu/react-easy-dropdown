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
        <div className='col-md-6'>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className='col-md-6'>
          <BasicSelect options={options} value={options[0]} />
        </div>
      </div>
    </div>
  );
};

export default LivePlayground;
