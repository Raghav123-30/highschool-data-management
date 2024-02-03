import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import MidDayMealTable from "@/components/midDayMeal/midDayMealTable";
import MidDayMealHeader from "@/components/midDayMeal/midDayMealHeader";

const MidDayMealPage = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-end">
          <MidDayMealHeader />
        </div>
      </CardHeader>
      <CardContent>
        <MidDayMealTable />
      </CardContent>
    </Card>
  );
};

export default MidDayMealPage;
