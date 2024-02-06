import MidDayMealHeader from "@/components/midDayMeal/midDayMealHeader";
import MidDayMealTable from "@/components/midDayMeal/midDayMealTable";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import axios, { isAxiosError } from "axios";

const MidDayMealPage = async () => {
  let isAttendanceAdded = false;
  try {
    const domain = process.env.PRODUCTION_URL || "";
    const url = domain + "/api/attendance";
    const response = await axios.get(url);
    if (response.status == 200) {
      console.log("attendance added");
      isAttendanceAdded = true;
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response?.data.message);
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-end">
          <MidDayMealHeader showAddAttendanceButton={!isAttendanceAdded} />
        </div>
      </CardHeader>
      <CardContent>
        {isAttendanceAdded ? (
          <MidDayMealTable />
        ) : (
          <p className="text-center text-red-500">
            {"Today's attendance is not yet submitted"}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default MidDayMealPage;
