// import Chart from "react-apexcharts";
// import { useSignalR } from "../../signalRConnection";

// const RealTimeLineChart = () => {
//   const { dataArray } = useSignalR();
//   const chartData = {
//     series: [
//       {
//         name: "Y Axis Data",
//         data: dataArray.map((item) => item.Y),
//       },
//     ],
//     options: {
//       chart: {
//         id: "realtime",
//         stacked: false,
//         zoom: {
//           type: "x",
//           enabled: true,
//           autoScaleYaxis: true,
//         },
//         toolbar: {
//           autoSelected: "zoom",
//         },
//       },
//       xaxis: {
//         type: "category",
//         categories: dataArray.map((item) => item.X),
//       },
//     },
//   };
//   return (
//     <div>
//       <h2>Real-Time Line Chart</h2>
//       <Chart
//         options={chartData.options}
//         series={chartData.series}
//         type="line"
//         height={350}
//       />
//     </div>
//   );
// };

// export default RealTimeLineChart;
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine,
// } from "recharts";
// import { useSignalR } from "../../signalRConnection";
// import { Box, Grid } from "@mui/material";
// const OnlineChart = () => {
//   const { dataArray } = useSignalR();
//   const newLocal = (
//     <ResponsiveContainer width="100%" height={200}>
//       <LineChart
//         data={dataArray}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="1 1" />
//         <XAxis
//           dataKey="X"
//           name="stature"
//           unit="m"
//           ticks={[
//             0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650,
//             700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250,
//             1300, 1350, 1400, 1450, 1500,
//           ]}
//           domain={[0, 1500]}
//           type="number"
//           allowDataOverflow={true}
//         />
//         <YAxis domain={[50, 175]} />
//         <Tooltip />
//         <Legend />
//         <ReferenceLine y={150} label="Max" stroke="red" strokeDasharray="3 3" />
//         <ReferenceLine
//           y={75}
//           label="Min"
//           stroke="green"
//           strokeDasharray="3 3"
//         />
//         <Line
//           type="monotone"
//           dataKey="Y"
//           stroke="red"
//           isAnimationActive={false}
//           dot={false}
//         />
//         <Line
//           type="monotone"
//           dataKey="Z"
//           stroke="blue"
//           isAnimationActive={false}
//           dot={false}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   );
//   return (
//     <>
//       <Box m="30px" sx={{ flexGrow: 1 }}>
//         <Grid container spacing={1}>
//           {Array.from(Array(4)).map((_, index) => (
//             <Grid md={5} key={index}>
//               {newLocal}
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default OnlineChart;

import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";
import { useSignalR } from "../../signalRConnection";

type DataType = { X: number; Y: number; Z: number };

const RealtimeChart = () => {
  const initialData = useSignalR();

  const [zoomGraph, setZoomGraph] = useState<{
    left?: string;
    right?: string;
    refAreaLeft?: string;
    refAreaRight?: string;
    top: string | number;
    bottom: string | number;
    top2: string | number;
    bottom2: string | number;
    animation: boolean;
  }>({
    top: "dataMax",
    bottom: "dataMin",
    top2: "dataMax",
    bottom2: "dataMin",
    animation: true,
  });
  const getAxisYDomain = (
    from: string,
    to: string,
    ref: keyof DataType,
    offset: number
  ) => {
    const refData: DataType[] = initialData.slice(+from + 1, +to);
    let [bottom, top] = [refData[0][ref], refData[0][ref]];
    refData.forEach((d) => {
      if (d[ref] > top) top = d[ref];
      if (d[ref] < bottom) bottom = d[ref];
    });

    return [(bottom | 0) - offset, (top | 0) + offset];
  };

  const zoom = () => {
    let { refAreaLeft, refAreaRight } = zoomGraph;

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      setZoomGraph((prev) => ({
        ...prev,
        refAreaLeft: "",
        refAreaRight: "",
      }));
      return;
    }

    if (refAreaLeft && refAreaRight && refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    const [bottom, top] = getAxisYDomain(refAreaLeft!, refAreaRight!, "Y", 10);
    const [bottom2, top2] = getAxisYDomain(
      refAreaLeft!,
      refAreaRight!,
      "Z",
      10
    );

    setZoomGraph((prev) => ({
      ...prev,
      refAreaLeft: "",
      refAreaRight: "",
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2,
    }));
  };

  const zoomOut = () => {
    const [bottom, top] = getAxisYDomain("100"!, "120"!, "Y", 20);
    const [bottom2, top2] = getAxisYDomain("100"!, "120"!, "Z", 20);
    //const originalYDomain = getAxisYDomain("50", "200", "Y", 50); // Assuming this is how you retrieve the original Y domain
    setZoomGraph((prev) => ({
      ...prev,
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: top,
      bottom: bottom,
      top2: top2,
      bottom2: bottom2,
    }));
  };

  const { left, right, refAreaLeft, refAreaRight, top, bottom } = zoomGraph;
  return (
    <div
      className="highlight-bar-charts"
      style={{ userSelect: "none", width: "100%" }}
    >
      <button type="button" className="btn update" onClick={() => zoomOut()}>
        Zoom Out
      </button>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={800}
          height={400}
          data={initialData}
          onMouseDown={(e) => {
            if (e.activeLabel) {
              setZoomGraph((prev) => ({
                ...prev,
                refAreaLeft: e.activeLabel as string, // Ensure activeLabel is a string
              }));
            }
          }}
          onMouseMove={(e) => {
            if (zoomGraph.refAreaLeft && e.activeLabel) {
              setZoomGraph((prev) => ({
                ...prev,
                refAreaRight: e.activeLabel as string, // Ensure activeLabel is a string
              }));
            }
          }}
          onMouseUp={() => zoom()}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis
            dataKey="X"
            name="stature"
            unit="m"
            ticks={[
              0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650,
              700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250,
              1300, 1350, 1400, 1450, 1500,
            ]}
            domain={left && right ? [left, right] : [0, 1500]}
            type="number"
            allowDataOverflow
          />
          <YAxis
            domain={left && right ? [bottom, top] : [80, 140]}
            type="number"
            allowDataOverflow
          />

          <Tooltip />
          <Legend />
          <ReferenceLine
            y={120}
            label="Max"
            stroke="red"
            strokeDasharray="4 4"
            alwaysShow={true}
          />
          <ReferenceLine
            y={100}
            label="Min"
            stroke="green"
            strokeDasharray="4 4"
            alwaysShow={true}
          />

          <Line
            type="monotone"
            dataKey="Y"
            stroke="#8884d8"
            isAnimationActive={false}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Z"
            stroke="#82ca9d"
            isAnimationActive={false}
            dot={false}
          />

          {refAreaLeft && refAreaRight ? (
            <ReferenceArea
              x1={refAreaLeft}
              x2={refAreaRight}
              strokeOpacity={1}
            />
          ) : null}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealtimeChart;
// import { useSignalR } from "../../signalRConnection";
// const Index = () => {
//   const dataArray = useSignalR();
//   return <>{dataArray.length === 0 ? "oops" : "WOW"}</>;
// };

// export default Index;
