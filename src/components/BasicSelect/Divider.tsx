import React from "react";
import { BasicSelectControlProps } from "../../models";

const Divider = (props: BasicSelectControlProps) => {
  const { hasDivider } = props;
  return <>{hasDivider && <div className='basic-select__divider'></div>}</>;
};

export default Divider;
