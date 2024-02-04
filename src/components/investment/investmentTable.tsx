"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const InvestmentTable = () => {
  const [investmentData, setInvestmentData] = useState([]);
  return (
    <Table>
      <TableCaption>{"Today's investment report "}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Sl no</TableHead>
          <TableHead>Item</TableHead>
          <TableHead>{"Amount(₹) per student"}</TableHead>
          <TableHead>Number of students</TableHead>
          <TableHead>{"Total amount(₹)"}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody></TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default InvestmentTable;
