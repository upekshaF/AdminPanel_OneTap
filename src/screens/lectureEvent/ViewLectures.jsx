import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const ViewLecture = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="VIEW LECTURE" subtitle="Welcome to View Lectures Page" />
      </Box>
    </Box>
  );
};

export default ViewLecture;