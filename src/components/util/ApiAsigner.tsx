import {
  Button,
  Drawer,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";

type P = {
  openDrawer: boolean;
  setOpenDrawer: (value: boolean) => void;
};

const ApiAsigner: FC<P> = ({ openDrawer, setOpenDrawer }) => {
  const [unsafeAccessKey, setUnsafeAccessKey] = useState("");

  const handleChange = (
    input: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newValue = input.target.value.replace(/ /g,'')
    setUnsafeAccessKey(newValue);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setUnsafeAccessKey('')
      setOpenDrawer(open);
    };

  return (
    <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
      <Box sx={{ p: 4, width: "250px" }}>
        <Box>
          <Typography component="p" variant="h5">
            Don't want to go and do that pesky <b>".env"</b> file creating and
            pasting that access key there?
          </Typography>
          <Typography component="p" variant="body1">
            Well, you can (unsafely) do it right here!
          </Typography>
        </Box>
        <Box sx={{ mt: 5}}>
        <form onSubmit={() => setOpenDrawer(false)}>
          <FormControl sx={{ width: '100%'}}>
            <InputLabel htmlFor="my-input">Place your secret key here</InputLabel>
            <Input
              id="access-key-input"
              aria-describedby="Access key"
              placeholder="At your own risk"
              value={unsafeAccessKey}
              onChange={handleChange}
              type="password"
              aria-autocomplete="none"
            />
          </FormControl>
        </form>
        </Box>
      </Box>
      <Button onClick={toggleDrawer(false)}>Close</Button>
    </Drawer>
  );
};

export default ApiAsigner;