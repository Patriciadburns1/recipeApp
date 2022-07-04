import React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { LoadingContainer } from "./ContainerStyles";

const Loading = () => {
  return (
    <LoadingContainer>
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="secondary" />
      </Stack>
    </LoadingContainer>
  );
};

export default Loading;
