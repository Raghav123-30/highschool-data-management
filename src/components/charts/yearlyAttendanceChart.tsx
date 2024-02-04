"use client";
import { useTheme } from "next-themes";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "../ui/card";
const YearlyAttendanceChart = () => {
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
      <CardContent className="px-8 py-100">
        <div className="mt-4 h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Bar
                dataKey="month"
                style={
                  {
                    fill: "#2563eb",
                    opacity: 1,
                  } as React.CSSProperties
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default YearlyAttendanceChart;
