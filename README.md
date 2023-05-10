# Iram-Hive-Frontend-Assessment
This is resuable dropdown menu component. It supports:
- [x] Single select mode
- [x] Multi select mode
- [x] Reusability

# Code structure
The code resides in the `src` directory.\
\
`src/App.js` contains the demo code for both single and multi selection mode.\
`src/lib` directory contains the React + Typescript + CSS code for the dropdown menu component.\
`src/lib/Dropdown.tsx` is the React dropdown menu component file.

# How to use
Run `npm start` if running locally and open `localhost:3000`. The demo code resides in the App.js file. The \<Dropdown \/> components in that file uses the list from `list.js`.

## Single Selection Mode
<img width="336" alt="Screenshot 2023-05-10 at 12 51 59 PM" src="https://github.com/KnotScientific/Iram-Hive-Frontend-Assessment/assets/29667155/b2484461-46b5-4c43-8325-1d7201c8493a">
For single selection mode, it accepts all the props on the table below. Pass the useState state and setter of type string <code>const [singleValue, setSingleValue] = useState("");</code> as the props `value` and `onSelect` for the Dropdown component. The prop `options` accepts the list for the dropdown.

## Multi Selection Mode
<img width="397" alt="Screenshot 2023-05-10 at 12 52 14 PM" src="https://github.com/KnotScientific/Iram-Hive-Frontend-Assessment/assets/29667155/f12e6f51-9877-40ed-9f45-5014311a1d52">
For multi selection mode, it accepts all the props on the table below. Pass the useState state and setter of type string[] <code>const [multiValue, setMultiValue] = useState([]);</code> as the props `value` and `onSelect` for the Dropdown component. The prop `options` accepts the list for the dropdown.

## Props
Below is a list of props that the \<Dropdown \/> component accepts:
| Name        | Type                                  | Default          | Description                                                                    |
|-------------|---------------------------------------|------------------|--------------------------------------------------------------------------------|
| value       | string \| string[]                    |                  | Dropdown value state                                                           |
| onSelect    | (value:value) => void                 |                  | Dropdown value setState setter                                                 |
| options     | {  label: string;  value: string; }[] | []               | Dropdown list. It's an array of objects containing the label and value         |
| defaultText | string                                | Select an Option | Text to be displayed in the closed dropdown when the default value is selected |
| multiple    | boolean                               | false            | Toggles multiple selection dropdown                                            |
| arrowIcon   | JSX.Element                           | \<div>▲\</div>     | Arrow which indicates whether the dropdown is opened/closed                    |
| width       | string                                | 20vw             | Width of the dropdown                                                          |
| size        | "s" \| "m" \| "l"                     | l                | Font size of the dropdown                                                      |
