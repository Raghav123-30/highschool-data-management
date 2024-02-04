"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

type InvestmentHeaderProps = {
  showAddAttendanceButton: boolean;
};
const InvestmentHeader = ({
  showAddAttendanceButton,
}: InvestmentHeaderProps) => {
  const router = useRouter();
  return (
    <div>
      {showAddAttendanceButton && (
        <Button
          className="text-white flex gap-2 items-center"
          onClick={() => {
            router.push(routes.ATTENDANCE);
          }}
        >
          <PlusIcon className="w-5 h-5" />
          <p>Add Attendance</p>
        </Button>
      )}
    </div>
  );
};

export default InvestmentHeader;
