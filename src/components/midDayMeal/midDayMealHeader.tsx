import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type MidDayMealHeaderProps = {
  showAddAttendanceButton: boolean;
};
const MidDayMealHeader = ({
  showAddAttendanceButton,
}: MidDayMealHeaderProps) => {
  return (
    <div className="flex gap-2">
      {showAddAttendanceButton && (
        <Button className="flex gap-2 items-centertext-white text-white">
          <PlusIcon className="w-5 h-5" />
          <p>Add Attendance</p>
        </Button>
      )}
      <Button className="text-white flex gap-2">
        <PlusIcon className="w-5 h-5" />
        <p>Add Stock</p>
      </Button>
    </div>
  );
};

export default MidDayMealHeader;
