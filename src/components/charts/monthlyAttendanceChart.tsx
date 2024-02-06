"use client";
import { useTheme } from "next-themes";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";
import { attendance } from "@/models/ui/attendance";

const MonthlyAttendanceChart = () => {
  const [attendances, setAttendances] = useState<attendance[]>();
  const formatDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "2-digit",
    });
    return formattedDate;
  };
  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const domain = process.env.PRODUCTION_URL || "";
        const url = domain + "/api/chart";
        const response = await axios.get(url);
        setAttendances(response.data.attendanceData);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error.response?.data.message);
        }
      }
    };
    fetchAttendanceData();
  }, []);

  return (
    <Card>
      <CardContent className="px-9 py-10">
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={attendances}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <XAxis dataKey="date" tickFormatter={formatDate}></XAxis>
              <YAxis />
              <Tooltip
                labelStyle={{ color: "blue" }}
                labelFormatter={formatDate}
              ></Tooltip>
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="numberOfAttendees"
                name="Attendance"
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
