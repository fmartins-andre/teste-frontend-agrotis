import {
  AppBar,
  Box,
  BoxProps,
  Paper,
  PaperProps,
  Toolbar,
  ToolbarProps,
} from "@mui/material";
import { forwardRef } from "react";

const FancyContainerRoot = forwardRef<HTMLDivElement, PaperProps>(
  (props, ref) => {
    return <Paper elevation={3} {...props} ref={ref} />;
  },
);

function FancyContainerHeader({ sx, children, ...rest }: ToolbarProps) {
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }}>
      <Toolbar
        sx={{
          fontSize: "1.5rem",
          fontWeight: "medium",
          ...sx,
        }}
        {...rest}
      >
        {children}
      </Toolbar>
    </AppBar>
  );
}

export function FancyContainerBody(props: BoxProps) {
  return <Box padding={3} {...props} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FancyContainer = {
  Root: FancyContainerRoot,
  Header: FancyContainerHeader,
  Body: FancyContainerBody,
};
