type P = {
  storeApiKey: string;
};

export const accessKey = ({ storeApiKey }: P) => {
  console.log("value: ", storeApiKey);
  return storeApiKey ? storeApiKey : process.env.REACT_APP_ACCESS_KEY;
};
