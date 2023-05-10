import Dropdown from "./lib/Dropdown";
import { List } from "./list";
import { useState } from "react";

const App = (props) => {
  const [singleValue, setSingleValue] = useState("");
  const [multiValue, setMultiValue] = useState([]);

  return (
    <div>
      <p>{singleValue}</p>
      <Dropdown options={List} value={singleValue} onSelect={setSingleValue} />
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
