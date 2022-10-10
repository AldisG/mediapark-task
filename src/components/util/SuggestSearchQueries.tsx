import { List, ListItemButton } from "@mui/material";
import { FC, useEffect, useState } from "react";

type P = {
  randomAtParent: boolean;
};
const searchQueries = "search-queries";

const SuggestSearchQueries: FC<P> = ({ randomAtParent }) => {
  const [searchHistory, setSearchHistory] = useState<string[] | null>();
  const [random, setrandom] = useState<boolean>(false);

  const foundData = window.localStorage.getItem(searchQueries)!;
  const convertedFoundData = JSON.parse(foundData) as string[];

  useEffect(() => {
    const checkUserData = () => {
      const jsonItems = JSON.parse(foundData) as string[];
      setSearchHistory(jsonItems);
    };
    window.addEventListener(searchQueries, checkUserData);
    return () => {
      window.removeEventListener(searchQueries, checkUserData);
    };
  }, [random, randomAtParent, searchHistory]);

  const handleRandomEvent = () => {
    // workaround, doesnt rerender otherwise
    setrandom((prev) => !prev);
  };
  return (
    <>
      <List
        component="div"
        disablePadding
        sx={{
          position: "absolute",
          bgcolor: "#fff",
          top: 80,
          zIndex: 100,
          boxShadow: "0 8px 8px #33333399",
        }}
      >
        {convertedFoundData &&
          convertedFoundData.map((item, i: number) => (
            <ListItemButton
              key={`${item}${i}`}
              sx={{ px: 4 }}
              onClick={handleRandomEvent}
            >
              {item}
            </ListItemButton>
          ))}
      </List>
    </>
  );
};

export default SuggestSearchQueries;
