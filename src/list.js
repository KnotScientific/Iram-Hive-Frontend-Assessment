export const List = new Array(1000).fill().map((_, ix) => ({
  label: `Item #${ix}`,
  value: ix
}));
