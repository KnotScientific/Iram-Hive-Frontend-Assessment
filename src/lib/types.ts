export type DropdownPropType = {
  value: string | string[];
  onSelect: (value: string | string[]) => void;
  options: option[];
  defaultText: string;
  multiple: boolean;
  arrowIcon: JSX.Element;
  width: string;
  size: "s" | "m" | "l";
};

export type option = {
  label: string;
  value: string;
};
