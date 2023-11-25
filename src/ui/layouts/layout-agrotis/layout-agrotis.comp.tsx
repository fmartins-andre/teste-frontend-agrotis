import { AppBar, Box, colors, Container, Toolbar } from "@mui/material";
import { PropsWithChildren } from "react";

export function LayoutAgrotis({ children }: PropsWithChildren<unknown>) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        minHeight: "100%",
        backgroundColor: colors.grey[50],
        gap: "2rem",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: colors.common.white,
          color: colors.common.black,
        }}
      >
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <img src="/logo-agrotis-full.svg" alt="Agrotis Logo" width="120px" />
        </Toolbar>
      </AppBar>

      <Container>{children}</Container>
    </Box>
  );
}
