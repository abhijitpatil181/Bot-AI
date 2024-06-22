import { CssBaseline, Stack } from "@mui/material";
import Sidebar from "./components/SideBar";
import { MainContainer } from "./Layout.styled";

const Layout = ({ children }) => {
  
  return (
    <>
      <CssBaseline />
      <Stack direction="row">
        <Sidebar />
        <MainContainer>{children}</MainContainer>
      </Stack>
    </>
  );
};

export default Layout;
