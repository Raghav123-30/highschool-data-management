import InvestmentHeader from "@/components/investment/investmentHeader";
import InvestmentTable from "@/components/investment/investmentTable";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const InvestmentPage = () => {
  let isAttendanceAdded = false;
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex justify-end">
          <InvestmentHeader showAddAttendanceButton={!isAttendanceAdded} />
        </div>
      </CardHeader>
      <CardContent>
        {isAttendanceAdded ? (
          <div>
            <InvestmentTable />
          </div>
        ) : (
          <p className="text-center text-red-500">
            {"Today's attendance is not yet submitted"}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default InvestmentPage;
