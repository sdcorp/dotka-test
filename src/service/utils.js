export const filterByAttr = (arr, attr) => arr.filter(i => i.primary_attr === attr);

export const searchHeroByName = (arr, searchStr) => {
  const searchItem = arr.find(i => i.localized_name.toLowerCase() === searchStr.toLowerCase());
  if (!searchItem) return;
  return searchItem.id;
};
