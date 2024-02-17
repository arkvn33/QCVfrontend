// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import { Box, IconButton, useTheme, InputBase } from "@mui/material";
// import { ColorModeContext, tokens } from "../../theme";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import MoreIcon from "@mui/icons-material/MoreVert";
// import FullscreenIcon from "@mui/icons-material/Fullscreen";
// import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";

// interface TopbarProps {
//   toggleSidebar: () => void;
// }

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.primary.light, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(() => ({
//   padding: "5px",
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// const Topbar = ({ toggleSidebar }: TopbarProps) => {
//   const [fullScreen, setFullScreen] = React.useState<boolean>(false);
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
//     React.useState<null | HTMLElement>(null);

//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = React.useContext(ColorModeContext);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const handleFullScreenToggle = () => {
//     const element = document.documentElement;

//     if (!document.fullscreenElement) {
//       if (element.requestFullscreen) {
//         element.requestFullscreen().then(() => setFullScreen(true));
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen().then(() => setFullScreen(false));
//       }
//     }
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       sx={{ "& .MuiMenu-paper": { background: colors.primary[400] } }}
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       sx={{ "& .MuiMenu-paper": { background: colors.primary[400] } }}
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem onClick={colorMode.toggleColorMode}>
//         <IconButton>
//           {theme.palette.mode === "dark" ? (
//             <DarkModeIcon sx={{ color: colors.grey[100] }} />
//           ) : (
//             <LightModeIcon sx={{ color: colors.grey[100] }} />
//           )}
//         </IconButton>
//       </MenuItem>
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails">
//           <Badge badgeContent={4} color="error">
//             <MailIcon sx={{ color: colors.grey[100] }} />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>

//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           sx={{ color: colors.grey[100] }}
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           sx={{ color: colors.grey[100] }}
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         style={{ background: colors.primary[500], boxShadow: "none" }}
//         position="static"
//       >
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             onClick={toggleSidebar}
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon sx={{ color: colors.grey[100] }} />
//           </IconButton>
//           <Typography
//             variant="h5"
//             noWrap
//             component="div"
//             color={colors.grey[100]}
//             sx={{ display: { xs: "none", sm: "block" } }}
//           >
//             QCV
//           </Typography>
//           <Search
//             sx={{ bgcolor: colors.primary[400], color: colors.grey[100] }}
//           >
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: "none", md: "flex" } }}>
//             <IconButton size="large" onClick={handleFullScreenToggle}>
//               {fullScreen ? (
//                 <FullscreenExitIcon
//                   sx={{ fontSize: 28, color: colors.grey[100] }}
//                 />
//               ) : (
//                 <FullscreenIcon
//                   sx={{ fontSize: 28, color: colors.grey[100] }}
//                 />
//               )}
//             </IconButton>
//             <IconButton size="large" onClick={colorMode.toggleColorMode}>
//               {theme.palette.mode === "dark" ? (
//                 <DarkModeIcon />
//               ) : (
//                 <LightModeIcon sx={{ color: colors.grey[100] }} />
//               )}
//             </IconButton>

//             <IconButton size="large" aria-label="show 4 new mails">
//               <Badge badgeContent={4} color="error">
//                 <MailIcon sx={{ color: colors.grey[100] }} />
//               </Badge>
//             </IconButton>
//             <IconButton size="large" aria-label="show 17 new notifications">
//               <Badge badgeContent={17} color="error">
//                 <NotificationsIcon sx={{ color: colors.grey[100] }} />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//             >
//               <AccountCircle sx={{ color: colors.grey[100] }} />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//             >
//               <MoreIcon sx={{ color: colors.grey[100] }} />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// };
// export default Topbar;
