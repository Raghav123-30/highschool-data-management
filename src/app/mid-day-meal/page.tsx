import MidDayMealHeader from "@/components/midDayMeal/midDayMealHeader";
import MidDayMealTable from "@/components/midDayMeal/midDayMealTable";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const MidDayMealPage = () => {
  let isAttendanceAdded = false;
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
