import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const InvestmentHeader = () => {
  return (
    <Button className="text-white">
      <DownloadIcon className="w-5 h-5" />
    </Button>
  );
};

export default InvestmentHeader;
