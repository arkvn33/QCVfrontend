import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  useMediaQuery,
  Chip,
  Avatar,
} from "@mui/material";
import {
  IconMenu2,
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconBell,
  IconSettings,
  IconSun,
  IconMoon,
  IconMail,
  IconDotsVertical,
} from "@tabler/icons-react";
import { ColorModeContext, tokens } from "../../../../theme";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "../../../../main.css";
import Sidebar from "../Sidebar";
import { AppBarButton } from "./AppBarButton";
import Main from "../main/Main";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
  }),
}));

const Topbar = () => {
  const [fullScreen, setFullScreen] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  const colorMode = React.useContext(ColorModeContext);
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleColorMode = () => {
    colorMode.toggleColorMode();
    setMobileMoreAnchorEl(null);
  };
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleFullScreenToggle = () => {
    const element = document.documentElement;

    if (!document.fullscreenElement) {
      if (element.requestFullscreen) {
        element.requestFullscreen().then(() => setFullScreen(true));
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setFullScreen(false));
      }
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      sx={{ "& .MuiMenu-paper": { background: colors.paper[200] } }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      sx={{ "& .MuiMenu-paper": { background: colors.paper[200] } }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleColorMode}>
        <IconButton sx={{ color: colors.textVariant.TextPrimary }} size="large">
          {mode === "dark" ? (
            <IconMoon stroke={1.5} size="1.2rem" />
          ) : (
            <IconSun stroke={1.5} size="1.2rem" />
          )}
        </IconButton>
        {mode === "dark" ? <p>Dark mode</p> : <p>Light mode</p>}
      </MenuItem>
      <MenuItem onClick={handleColorMode}>
        <IconButton
          sx={{ color: colors.textVariant.TextPrimary }}
          size="large"
          aria-label="show 4 new mails"
        >
          <Badge badgeContent={4} color="error">
            <IconMail stroke={1.5} size="1.2rem" />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          sx={{ color: colors.textVariant.TextPrimary }}
          size="large"
          aria-label="show 17 new notifications"
        >
          <Badge badgeContent={17} color="error">
            <IconBell stroke={1.5} size="1.2rem" />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: "flex", scrollbarWidth: "0px" }}>
      <AppBar
        sx={{
          zIndex: (theme) =>
            matchUpMd ? theme.zIndex.drawer + 1 : theme.zIndex.drawer,
          boxShadow: "none",
          borderBottomColor: colors.paper[100],
          background: colors.paper[100],
        }}
        position="fixed"
      >
        <Toolbar
          sx={{
            Height: "88px",
            px:{ xs: "16px", md: "24px" },
            py:"16px",

          }}
        >
          <Box
            sx={{
              mr: "32px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <img
              alt="IrisaQCLogo"
              src={
                mode === "dark"
                  ? "assets/IrisaQCLogoDark.png"
                  : "assets/IrisaQCLogo.png"
              }
              style={{ width: "145px" }}
            />
          </Box>
          <AppBarButton
            icon={<IconMenu2 stroke={1.5} size="1.2rem" />}
            onClickAvatar={toggleDrawer}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <AppBarButton
              icon={
                fullScreen ? <IconArrowsMinimize /> : <IconArrowsMaximize />
              }
              onClickAvatar={handleFullScreenToggle}
            />
            <AppBarButton
              icon={
                mode === "dark" ? (
                  <IconMoon stroke={1.5} size="1.2rem" />
                ) : (
                  <IconSun stroke={1.5} size="1.2rem" />
                )
              }
              onClickAvatar={colorMode.toggleColorMode}
            />

            <Badge badgeContent={17} color="error">
              <AppBarButton
                icon={<IconBell stroke={1.5} size="1.2rem" />}
                onClickAvatar={function (): void | undefined {
                  throw new Error("Function not implemented.");
                }}
              />
            </Badge>

            <Badge badgeContent={4} color="error">
              <AppBarButton
                icon={<IconMail stroke={1.5} size="1.2rem" />}
                onClickAvatar={function (): void | undefined {
                  throw new Error("Function not implemented.");
                }}
              />
            </Badge>
          </Box>
          <Chip
            icon={
              <Avatar
                sx={{
                  fontSize: "15px",
                  width: "30px",
                  height: "30px",
                  margin: "8px 0 8px 8px !important",
                  cursor: "pointer",
                  backgroundColor:
                    mode === "dark"
                      ? colors.dark.darkLevel1
                      : colors.primary.primaryLight,
                  color: colors.primary.primary800,
                }}
              ></Avatar>
            }
            label={
              <IconSettings stroke={1.5} color={colors.primary.primaryMain} />
            }
            variant="outlined"
            onClick={handleMenuOpen}
            sx={{
              transition: "none",
              ml: "16px",
              height: "48px",
              alignItems: "center",
              borderRadius: "27px",
              borderColor:
                mode === "dark"
                  ? colors.dark.darkLevel1
                  : colors.primary.primaryLight,
              backgroundColor:
                mode === "dark"
                  ? colors.dark.darkLevel1
                  : colors.primary.primaryLight,
              '&[aria-controls="menu-list-grow"], &:hover': {
                borderColor: colors.primary.primaryMain,
                background: `${colors.primary.primaryMain}!important`,
                "& svg": {
                  stroke: colors.primary.primaryLight,
                },
              },
              "& .MuiChip-label": {
                lineHeight: 0,
              },
            }}
          />
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              sx={{ color: colors.textVariant.TextPrimary, ml: "16px" }}
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <IconDotsVertical stroke={1.5} size="1.2rem" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Sidebar open={drawerOpen} onClose={toggleDrawer} />

      <Box
        component="main"
        sx={{
          marginTop: "88px",
          marginRight: "16px",
          ...(!matchUpMd && { ml: "16px" }),
          borderRadius: "8px 8px 0px 0px",
          background: colors.paper[200],
          p: "16px",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <Main />
      </Box>
    </Box>
  );
};

export default Topbar;
