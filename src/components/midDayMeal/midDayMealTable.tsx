import {
  Table,
  TableBody,
  TableCaption,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MidDayMealTable = () => {
  return (
    <Table>
      <TableCaption>{"Today's mid day meal report"}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Sl no</TableHead>
          <TableHead>Item</TableHead>
          <TableHead>{"Stock(gm)"}</TableHead>
          <TableHead>{"Used(gm)"}</TableHead>
          <TableHead>{"Balance(gm)"}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default MidDayMealTable;
