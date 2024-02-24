import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceArea,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
} from "recharts";
import { useSignalR } from "../../utils/signalRConnection";
import { AppBarButton } from "../dashboard/global/header/AppBarButton";
import { IconZoomCancel } from "@tabler/icons-react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

type DataType = { X: number; Y: number; Z: number };

const CustomLineChart = () => {
  const initialData = useSignalR();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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

    console.log(zoomGraph, "--", refAreaLeft, "--", refAreaRight, "--");

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
      style={{ display: "flex", justifyContent: "space-between" }}
      className="disable-text-selection"
    >
      <ResponsiveContainer width="100%" height={150}>
        <LineChart
          margin={{ top: 10, left: -15, right: 10, bottom: 0 }}
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
          <CartesianGrid
            strokeDasharray="1 4"
            stroke={colors.textVariant.TextSecondary}
          />
          <XAxis
            axisLine={{
              stroke: colors.textVariant.TextTitle,
              strokeWidth: 2,
            }}
            tick={{ fill: colors.textVariant.TextTitle }}
            interval={3}
            dataKey="X"
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
            axisLine={{
              stroke: colors.textVariant.TextTitle,
              strokeWidth: 2,
            }}
            tick={{ fill: colors.textVariant.TextTitle }}
            domain={left && right ? [bottom, top] : [90, 130]}
            type="number"
            ticks={[90, 95, 100, 105, 110, 115, 120, 125, 130]}
            interval={1}
            allowDataOverflow
          />
          <ReferenceLine
            y={120}
            label={{
              value: "Max",
              fill: colors.textVariant.TextPrimary,
              position: "top",
            }}
            stroke={colors.error.errorDark}
            strokeWidth={2}
            strokeDasharray="4 4"
            ifOverflow="extendDomain"
          />
          <ReferenceLine
            y={100}
            label={{
              value: "Min",
              fill: colors.textVariant.TextPrimary,
              position: "bottom",
            }}
            stroke="green"
            strokeDasharray="4 4"
            strokeWidth={2}
            ifOverflow="extendDomain"
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Y"
            stroke={colors.secondary.secondaryMain}
            strokeWidth={1.5}
            isAnimationActive={false}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="Z"
            strokeWidth={1.5}
            stroke={colors.primary.primaryMain}
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
      <AppBarButton
        icon={<IconZoomCancel size="1.2rem" />}
        width="25px"
        height="25px"
        addMargin={false}
        onClickAvatar={() => zoomOut()}
      />
    </div>
  );
};

export default CustomLineChart;
