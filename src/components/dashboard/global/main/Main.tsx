import { Routes, Route } from "react-router-dom";
import Dashboard from "../../../../pages/dashboard/DashboardPage";
import Team from "../../../../scenes/team";
// import Chart from "../../../../scenes/chart";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      {/* <Route path="/line" element={<Chart />} /> */}
      {/* <Route path="/" element={<Dashboard />} /> */}
      {/* <Route path="/" element={<Dashboard />} /> */}
      {/* <Route path="/" element={<Dashboard />} /> */}
      {/* <Route path="/" element={<Dashboard />} /> */}
      {/* <Route path="/" element={<Dashboard />} /> */}
      {/* <Route path="/" element={<Dashboard />} /> */}
      {/* <Route path="/" element={<Dashboard />} /> */}
      {/* <Route path="/" element={<Dashboard />} /> */}
    </Routes>
  );
};

export default Main;
