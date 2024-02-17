// import * as React from "react";
// import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// //import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import { Link as RouterLink } from "react-router-dom";

// interface SidebarProps {
//   open: boolean;
// }

// interface ItemProps {
//   open: boolean;
//   title: string;
//   to: string;
//   icon: React.ReactNode; // Replace with the actual type of your icon
//   selected: string;
//   setSelected: React.Dispatch<React.SetStateAction<string>>;
// }

// const drawerWidth = 240;

// const openedMixin = (): CSSObject => ({
//   width: drawerWidth,
//   overflowX: "hidden",
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// // const DrawerHeader = styled("div")(({ theme }) => ({
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "flex-end",
// //   padding: theme.spacing(0, 1),
// //   // necessary for content to be below app bar
// //   ...theme.mixins.toolbar,
// // }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(),
//     "& .MuiDrawer-paper": openedMixin(),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// const Item = ({ open, title, to, icon, selected, setSelected }: ItemProps) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <ListItem key={title} disablePadding sx={{ display: "block" }}>
//       <ListItemButton
//         selected={selected === title}
//         onClick={() => setSelected(title)}
//         component={RouterLink}
//         to={to}
//         sx={{
//           minHeight: 48,
//           justifyContent: open ? "initial" : "center",
//           px: 2.5,
//           color: colors.grey[100],
//         }}
//       >
//         <ListItemIcon
//           sx={{
//             minWidth: 0,
//             mr: open ? 3 : "auto",
//             justifyContent: "center",
//           }}
//         >
//           {icon}
//         </ListItemIcon>
//         <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
//       </ListItemButton>
//     </ListItem>
//   );
// };

// const MiniDrawer = ({ open }: SidebarProps) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const [selected, setSelected] = React.useState("Dashboard");

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       <Box mt="20">
//         <Drawer
//           PaperProps={{
//             sx: {
//               backgroundColor: colors.primary[400],
//               color: "red",
//             },
//           }}
//           variant="permanent"
//           open={open}
//           sx={{
//             flexShrink: 0,
//             backgroundColor: colors.primary[400],
//           }}
//         >
//           <Divider />
//           <List>
//             <Item
//               open={open}
//               title="Home"
//               selected={selected}
//               setSelected={setSelected}
//               to="/"
//               icon={<HomeOutlinedIcon />}
//             ></Item>
//           </List>
//           <Divider />
//           <List>
//             {["Manage Team", "Contacts Information", "Invoices Balances"].map(
//               (text, index) => (
//                 <Item
//                   open={open}
//                   title={text}
//                   selected={selected}
//                   setSelected={setSelected}
//                   to={
//                     index === 0
//                       ? "/team"
//                       : index === 1
//                       ? "/contacts"
//                       : "/invoices"
//                   }
//                   icon={
//                     index === 0 ? (
//                       <PeopleOutlinedIcon />
//                     ) : index === 1 ? (
//                       <ContactsOutlinedIcon />
//                     ) : (
//                       <ReceiptOutlinedIcon />
//                     )
//                   }
//                 ></Item>
//               )
//             )}
//           </List>
//           <Divider />
//           <List>
//             {["Profile Form", "Calendar", "FAQ Page"].map((text, index) => (
//               <Item
//                 open={open}
//                 title={text}
//                 selected={selected}
//                 setSelected={setSelected}
//                 to={index === 0 ? "/form" : index === 1 ? "/calendar" : "/faq"}
//                 icon={
//                   index === 0 ? (
//                     <PeopleOutlinedIcon />
//                   ) : index === 1 ? (
//                     <CalendarTodayOutlinedIcon />
//                   ) : (
//                     <HelpOutlineOutlinedIcon />
//                   )
//                 }
//               ></Item>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {["Bar Chart", "Pie Chart", "Line Chart"].map((text, index) => (
//               <Item
//                 open={open}
//                 title={text}
//                 selected={selected}
//                 setSelected={setSelected}
//                 to={index === 0 ? "/bar" : index === 1 ? "/pie" : "/line"}
//                 icon={
//                   index === 0 ? (
//                     <BarChartOutlinedIcon />
//                   ) : index === 1 ? (
//                     <PieChartOutlineOutlinedIcon />
//                   ) : (
//                     <TimelineOutlinedIcon />
//                   )
//                 }
//               ></Item>
//             ))}
//           </List>
//         </Drawer>
//       </Box>
//     </Box>
//   );
// };
// export default MiniDrawer;
