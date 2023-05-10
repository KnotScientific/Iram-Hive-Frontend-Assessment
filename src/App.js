import Dropdown from "../src/lib/Dropdown.tsx";
import { List } from "./list";
import { useState } from "react";

const App = (props) => {
  const [singleValue, setSingleValue] = useState("");
  const [multiValue, setMultiValue] = useState([]);

  return (
    <div>
      <p>This is the value from the single selected dropdown {singleValue}</p>
      <Dropdown options={List} value={singleValue} onSelect={setSingleValue} />
      <p>
        These are the values from the multi selected dropdown{" "}
        {multiValue.join(", ")}
      </p>
      <Dropdown
        options={List}
        value={multiValue}
        onSelect={setMultiValue}
        multiple
      />
    </div>
  );
};

export default App;
