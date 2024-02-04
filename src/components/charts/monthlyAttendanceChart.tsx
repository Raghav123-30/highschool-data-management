"use client";
import { useTheme } from "next-themes";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "../ui/card";

const MonthlyAttendanceChart = () => {
  const { theme } = useTheme();
  const data = [
    {
      month: 30,
    },
    {
      month: 80,
    },
    {
      month: 70,
    },
    {
      month: 65,
    },
    {
      month: 0,
    },
    {
      month: 65,
    },
    {
      month: 75,
    },
    {
      month: 60,
    },
    {
      month: 65,
    },
  ];
  return (
    <Card>
      <CardContent className="px-9 py-10">
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="month"
                activeDot={{
                  r: 6,
                  style: { fill: "var(--theme-primary)", opacity: 0.25 },
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyAttendanceChart;
