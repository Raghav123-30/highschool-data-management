import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = async () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-In", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="p-30">
        <CardHeader>
          <CardTitle className="text-blue-500">
            Students Attendance visualization as of {formattedDate}
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="p-30 h-[400px]">
        <CardHeader>
          <CardTitle className="text-blue-500">
            {"Today's mid day meal stats"}
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="p-30 h-[400px]">
        <CardHeader>
          <CardTitle className="text-blue-500 ">
            {"Today's investment stats"}
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="p-30 h-[400px]">
        <CardHeader>
          <CardTitle className="text-blue-500">{"Overall report"}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default HomePage;
