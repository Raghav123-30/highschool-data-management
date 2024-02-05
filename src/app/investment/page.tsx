import InvestmentHeader from "@/components/investment/investmentHeader";
import InvestmentTable from "@/components/investment/investmentTable";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import axios from "axios";
import { isAxiosError } from "axios";

const InvestmentPage = async () => {
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
