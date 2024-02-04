import InvestmentFilter from "@/components/investment/investmentFilter";
import InvestmentHeader from "@/components/investment/investmentHeader";
import InvestmentTable from "@/components/investment/investmentTable";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const InvestmentPage = () => {
  return (
    <div className="flex gap-2 flex-col md:flex-row">
      <div className="flex-[1/2] ">
        <InvestmentFilter />
      </div>
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
    </div>
  );
};

export default InvestmentPage;
