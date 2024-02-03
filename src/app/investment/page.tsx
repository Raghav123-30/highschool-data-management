import InvestmentHeader from "@/components/investment/investmentHeader";
import InvestmentTable from "@/components/investment/investmentTable";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const InvestmentPage = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-end">
          <InvestmentHeader />
        </div>
      </CardHeader>
      <CardContent>
        <InvestmentTable />
      </CardContent>
    </Card>
  );
};

export default InvestmentPage;
