const searchQueries = "search-queries";
const foundData = localStorage.getItem(searchQueries);

const oldData: string[] = [];

export const locStorageItems = foundData
  ? (JSON.parse(foundData) as string[])
  : [""];

export const initializeLocalStorage = () => {
  if (foundData === null) {
    localStorage.setItem(searchQueries, "[]");
  }
};

export const setStorageItems = (value: string) => {
  if (foundData === null) {
    localStorage.setItem(searchQueries, "[]");
  }

  initializeLocalStorage();
  oldData.push(value);

  const cleanData = oldData
    .map((it) => it.toLowerCase())
    .filter((it) => it !== "")
    .filter((item: string, i: number) => {
      return oldData.indexOf(item) === i;
    })
    // .filter((_, i) => i <= 4);

  localStorage.setItem(searchQueries, JSON.stringify(cleanData.slice(-5, cleanData.length)));
};
