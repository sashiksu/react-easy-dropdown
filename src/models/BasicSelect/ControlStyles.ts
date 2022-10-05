import { BaseTextStyles, BaseWrapperStyles } from "../Common/ControlStyles";

export interface WrapperStyles extends BaseWrapperStyles {}

export interface LabelWrapperStyles extends BaseWrapperStyles {}

export interface LabelTextStyles extends BaseTextStyles {}

export interface SecondaryLabelWrapperStyles extends BaseWrapperStyles {}

export interface SecondaryTextStyles extends BaseTextStyles {}

export interface SelectContainerStyles extends BaseWrapperStyles {}

export interface OptionsWrapperStyles extends Omit<BaseWrapperStyles, "borderRadius"> {}

export interface OptionStyles extends Omit<BaseWrapperStyles, "borderRadius"> {}

export interface SelectedOptionStyles extends Omit<BaseWrapperStyles, "borderRadius"> {}

export interface HighlightedOptionStyles extends Omit<BaseWrapperStyles, "borderRadius"> {}
