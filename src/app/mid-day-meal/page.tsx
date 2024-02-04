import MidDayMealHeader from "@/components/midDayMeal/midDayMealHeader";
import MidDayMealTable from "@/components/midDayMeal/midDayMealTable";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const MidDayMealPage = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-end">
          <MidDayMealHeader showAddAttendanceButton={true} />
        </div>
      </CardHeader>
      <CardContent>
        <MidDayMealTable />
      </CardContent>
    </Card>
  );
};

export default MidDayMealPage;
