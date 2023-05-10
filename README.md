# Iram-Hive-Frontend-Assessment
This is resuable dropdown menu component. It supports:
- [x] Single select mode
- [x] Multi select mode
- [x] Reusability

# Code structure
The code resides in the `src` directory.
`src/

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
