import React from "react";
import MyCustomIMGTable from "../components/MyCustomIMGTable";
import Box from "@mui/material/Box";

function IMGTable() {
  return (
    <>
      <Box sx={{ gap: 2, p: 2, mx: "auto", width: "95%", flexGrow: 1 }}>
        <MyCustomIMGTable />
      </Box>
    </>
  );
}

export default IMGTable;
