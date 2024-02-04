import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type InvestmentHeaderProps = {
  showAddAttendanceButton: boolean;
};
const InvestmentHeader = ({
  showAddAttendanceButton,
}: InvestmentHeaderProps) => {
  return (
    <div>
      {showAddAttendanceButton && (
        <Button className="text-white flex gap-2 items-center">
          <PlusIcon className="w-5 h-5" />
          <p>Add attendance</p>
        </Button>
      )}
    </div>
  );
};

export default InvestmentHeader;
