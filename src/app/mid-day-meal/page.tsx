import MidDayMealFilter from "@/components/midDayMeal/midDayMealFilter";
import MidDayMealHeader from "@/components/midDayMeal/midDayMealHeader";
import MidDayMealTable from "@/components/midDayMeal/midDayMealTable";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const MidDayMealPage = () => {
  return (
    <div className="flex gap-2 flex-col md:flex-row">
      <div className="flex-[1/2] ">
        <MidDayMealFilter />
      </div>
      <Card className="flex-1">
        <CardHeader>
          <div className="flex justify-end">
            <MidDayMealHeader showAddAttendanceButton={true} />
          </div>
        </CardHeader>
        <CardContent>
          <MidDayMealTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default MidDayMealPage;
