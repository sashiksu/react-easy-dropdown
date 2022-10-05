import React from "react";
import { BasicSelectOption } from "./ControlsDefinitions";

interface BasicSelectControlState {
  basicSelectRef: React.RefObject<HTMLDivElement>;
  selectedValue: BasicSelectOption | undefined;
  showOptions: boolean;
  highlightedOptionId: string | number | null;
}

export { BasicSelectControlState };
