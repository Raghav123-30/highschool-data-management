import InvestmentHeader from "@/components/investment/investmentHeader";
import InvestmentTable from "@/components/investment/investmentTable";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const InvestmentPage = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex justify-end">
          <InvestmentHeader showAddAttendanceButton={true} />
        </div>
      </CardHeader>
      <CardContent>
        <InvestmentTable />
      </CardContent>
    </Card>
  );
};

export default InvestmentPage;
