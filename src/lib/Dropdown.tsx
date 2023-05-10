import "./Dropdown.css";
import { useEffect, useState } from "react";
import { DropdownPropType, option } from "./types";

const DEFAULT_TEXT = "Select an Option";
const DEFAULT_ARROW = <div>▲</div>;
const DEFAULT_SIZE = "l";
const DEFAULT_WIDTH = "20vw";

const Dropdown = ({
  value,
  onSelect,
  options = [],
  defaultText = DEFAULT_TEXT,
  multiple = false,
  arrowIcon = DEFAULT_ARROW,
  width = DEFAULT_WIDTH,
  size = DEFAULT_SIZE
}: DropdownPropType) => {
  const [label, setLabel] = useState<string>(defaultText);
  const [isChecked, setIsChecked] = useState<boolean[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (multiple) {
      setIsChecked(new Array(options.length).fill(false));
    }
  }, [options.length, multiple]);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const selectDefault = () => {
    onSelect(multiple ? [] : "");
    setLabel(defaultText);
    setIsChecked((prev) => prev.map(() => false));
    if (!multiple) handleOpen();
  };

  const handleSelect = (index: number, option: option) => {
    let newValue: string | string[];
    let newLabel: string;
    if (multiple) {
      newValue = !isChecked[index]
        ? [...value, option.value]
        : (value as string[]).filter((v: string) => v !== option.value);
      newLabel = (newValue as string[]).join(", ");
      setIsChecked((prev) =>
        prev.map((_, ix) => (ix === index ? !prev[ix] : prev[ix]))
      );
      setLabel(newLabel);
      onSelect(newValue);
    } else {
      newValue = option.value;
      newLabel = option.label;
      setLabel(newLabel);
      onSelect(newValue);
      handleOpen();
    }
  };

  return (
    <div
      className={`dropdown ${isOpen ? "open" : ""}  ${size}`}
      style={{ width }}
    >
      <div onClick={handleOpen} className="dropdown-selector">
        <p className="dropdown-selector-text">{label || defaultText}</p>
        <div className="dropdown-selector-arrow">{arrowIcon}</div>
      </div>
      <div className="dropdown-options" style={{ width }}>
        <div
          key="DEFAULT"
          className="dropdown-options-text italics"
          onClick={selectDefault}
        >
          <p>{defaultText}</p>
        </div>
        {options.map((option, ix) => (
          <div
            key={`${ix}-${option}`}
            className={`dropdown-options-text ${
              multiple
                ? isChecked[ix]
                  ? "selected"
                  : ""
                : value === option.value
                ? "selected"
                : ""
            }`}
            onClick={() => handleSelect(ix, option)}
          >
            {multiple && <input type="checkbox" checked={isChecked[ix]} />}
            <p>{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
