import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import HomePageHeader from "@/components/home/homePageHeader";
import HomePageFilter from "@/components/home/homePageFilter";
import MonthlyAttendanceChart from "@/components/charts/monthlyAttendanceChart";
import YearlyAttendanceChart from "@/components/charts/yearlyAttendanceChart";

const HomePage = async () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-In", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <Card>
      <CardContent className="px-8 py-10 flex flex-col gap-5">
        <div className="flex justify-end">
          <HomePageHeader />
        </div>
        <div className="flex justify-start">
          <HomePageFilter />
        </div>
        <div>
          <MonthlyAttendanceChart />
          <YearlyAttendanceChart />
        </div>
      </CardContent>
    </Card>
  );
};

export default HomePage;
