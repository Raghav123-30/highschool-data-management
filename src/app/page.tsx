import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const HomePage = async () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-In", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="p-30 flex flex-col justify-center items-center">
        <CardContent></CardContent>
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
