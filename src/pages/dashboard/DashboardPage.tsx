import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import CustomLineChart from "../../components/charts/CustomLineChart";
import MainCard from "../../components/cards/MainCard";
import SlabInfo from "../../components/slabs/SlabInfo";

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const DashboardPage = () => {
  const rows = [
    createData("PT", 159, 6.0),
    createData("NT", 237, 9.0),
    createData("CTemp", 262, 16.0),
    createData("Min", 305, 3.7),
    createData("Max", 356, 16.0),
    createData("NC Percent", 356, 16.0),
    createData("NC Length", 356, 16.0),
  ];
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item lg={4.8} md={4.5} sm={6} xs={6}>
              <MainCard>
                <SlabInfo
                  coilNumber="023769053"
                  furnaceNumber="2001012"
                  state="Previous"
                />
              </MainCard>
            </Grid>
            <Grid item lg={4.8} md={4.5} sm={6} xs={6}>
              <MainCard>
                <SlabInfo
                  coilNumber="023769054"
                  furnaceNumber="1001012"
                  state="Current"
                />
              </MainCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item lg={4.8} md={4.5} sm={12} xs={12}>
              <MainCard>
                <CustomLineChart />
              </MainCard>
            </Grid>
            <Grid item lg={4.8} md={4.5} sm={12} xs={12}>
              <MainCard>
                <CustomLineChart />
              </MainCard>
            </Grid>
            <Grid item lg={2.4} md={3} sm={12} xs={12}>
              <TableContainer>
                <MainCard>
                  <Box height={150}>
                    <Table size="small">
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell sx={{ py: "2px" }}>{row.name}</TableCell>
                            <TableCell sx={{ py: "2px" }}>
                              {row.calories}
                            </TableCell>
                            <TableCell sx={{ py: "2px" }}>{row.fat}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </MainCard>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item lg={4.8} md={4.5} sm={12} xs={12}>
              <MainCard>
                <CustomLineChart />
              </MainCard>
            </Grid>
            <Grid item lg={4.8} md={4.5} sm={12} xs={12}>
              <MainCard>
                <CustomLineChart />
              </MainCard>
            </Grid>
            <Grid item lg={2.4} md={3} sm={12} xs={12}>
                            <TableContainer>
                <MainCard>
                  <Box height={150}>
                    <Table size="small">
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell sx={{ py: "2px" }}>{row.name}</TableCell>
                            <TableCell sx={{ py: "2px" }}>
                              {row.calories}
                            </TableCell>
                            <TableCell sx={{ py: "2px" }}>{row.fat}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </MainCard>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item lg={4.8} md={4.5} sm={12} xs={12}>
              <MainCard>
                <CustomLineChart />
              </MainCard>
            </Grid>
            <Grid item lg={4.8} md={4.5} sm={12} xs={12}>
              <MainCard>
                <CustomLineChart />
              </MainCard>
            </Grid>
            <Grid item lg={2.4} md={3} sm={12} xs={12}>
              <TableContainer>
                <MainCard>
                  <Box height={150}>
                    <Table size="small">
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell sx={{ py: "2px" }}>{row.name}</TableCell>
                            <TableCell sx={{ py: "2px" }}>
                              {row.calories}
                            </TableCell>
                            <TableCell sx={{ py: "2px" }}>{row.fat}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </MainCard>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item lg={4.8} md={4.5} sm={12} xs={12}>
              <MainCard>
                <CustomLineChart />
              </MainCard>
            </Grid>
            <Grid item lg={4.8} md={4.5} sm={12} xs={12}>
              <MainCard>
                <CustomLineChart />
              </MainCard>
            </Grid>
            <Grid item lg={2.4} md={3} sm={12} xs={12}>
              <TableContainer>
                <MainCard>
                  <Box height={150}>
                    <Table size="small">
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell sx={{ py: "2px" }}>{row.name}</TableCell>
                            <TableCell sx={{ py: "2px" }}>
                              {row.calories}
                            </TableCell>
                            <TableCell sx={{ py: "2px" }}>{row.fat}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </MainCard>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
