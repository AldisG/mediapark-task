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
import { useSetRecoilState } from "recoil";
import { setUnsafeApiKey } from "../../store/photoApiCalls";

type P = {
  openDrawer: boolean;
  setOpenDrawer: (value: boolean) => void;
};

const ApiAsigner: FC<P> = ({ openDrawer, setOpenDrawer }) => {
  const [unsafeAccessKey, setUnsafeAccessKey] = useState("");
  const setNewApiKey = useSetRecoilState(setUnsafeApiKey);

  const handleChange = (
    input: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newValue = input.target.value.replace(/ /g, "");
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
      setUnsafeAccessKey("");
      setOpenDrawer(open);
    };
  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }
    setNewApiKey(unsafeAccessKey);
    setUnsafeAccessKey("");
    setOpenDrawer(false);
  };
  const handleDelete = () => {
    setNewApiKey("");
    setUnsafeAccessKey("");
    setOpenDrawer(false);
  };
  return (
    <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
      <Box sx={{ p: 4, width: "250px", display: "grid", gap: 2 }}>
        <Box>
          <Typography component="p" variant="h5">
            Don't want to go and do that pesky <b>".env"</b> file creating and
            pasting that access key there?
          </Typography>
          <Typography component="p" variant="body1">
            Well, you can (unsafely) do it right here!
          </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel htmlFor="my-input">
                Place your secret key here
              </InputLabel>
              <Input
                id="access-key-input"
                aria-describedby="Access key"
                placeholder="At your own risk"
                value={unsafeAccessKey}
                onChange={handleChange}
                type="password"
                aria-autocomplete="none"
                inputProps={{
                  autoComplete: "new-password",
                  form: {
                    autoComplete: "off",
                  },
                }}
              />
            </FormControl>
          </form>
        </Box>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleSubmit()}
          sx={{ mt: 2 }}
        >
          Change
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleDelete()}
          sx={{ mt: 2 }}
        >
          Delete it
        </Button>
      </Box>
    </Drawer>
  );
};

export default ApiAsigner;
