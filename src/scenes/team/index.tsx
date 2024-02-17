import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridAlignment } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left" as GridAlignment,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }: { row: { access: string } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor:
                access === "admin"
                  ? colors.success.successMain
                  : access === "manager"
                  ? colors.success.successDark
                  : colors.success.successDark,
            }}
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey.grey100} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.success.success200,
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary.primaryDark,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.paper[200],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary.primaryDark,
          },
          "& .MuiCheckbox-root": {
            color: `${colors.success.successLight} !important`,
          },
        }}
      >
        <Box>
          <DataGrid
            sx={{
              // overflow: "scroll",
              display: "flex",
            }}
            autoHeight
            checkboxSelection
            rows={mockDataTeam}
            columns={columns}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
