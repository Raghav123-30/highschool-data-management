"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";
import Rollback from "../rollback";
type MidDayMealHeaderProps = {
  showAddAttendanceButton: boolean;
};
const MidDayMealHeader = ({
  showAddAttendanceButton,
}: MidDayMealHeaderProps) => {
  const router = useRouter();
  return (
    <div className="flex gap-2">
      {showAddAttendanceButton && (
        <Button
          className="flex gap-2 items-centertext-white text-white"
          onClick={() => {
            router.push(routes.ATTENDANCE);
          }}
        >
          <PlusIcon className="w-5 h-5" />
          <p>Add Attendance</p>
        </Button>
      )}
      {!showAddAttendanceButton && (
        <div className="flex gap-2 items-center">
          <Button
            className="text-white flex gap-2"
            onClick={() => {
              router.push(routes.ADDSTOCKPAGE);
            }}
          >
            <PlusIcon className="w-5 h-5" />
            <p>Add Stock</p>
          </Button>
          <Rollback />
        </div>
      )}
    </div>
  );
};

export default MidDayMealHeader;
