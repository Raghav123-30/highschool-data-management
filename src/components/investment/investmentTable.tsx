"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { investment } from "@/models/ui/investment";
import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";

const InvestmentTable = () => {
  const [investmentData, setInvestmentData] = useState<investment[]>([]);

  useEffect(() => {
    const getInvestmentData = async () => {
      try {
        const domain = process.env.PRODUCTION_URL || "";
        const url = domain + "/api/investment";
        const response = await axios.get(url);
        setInvestmentData(response.data.investmentData);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    };
    getInvestmentData();
  }, []);
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
      <TableBody>
        {investmentData.map((item, index) => (
          <TableRow key={item._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.itemName}</TableCell>
            <TableCell>
              {(item.totalExpense / item.studentCount).toFixed(2)}
            </TableCell>
            <TableCell>{item.studentCount}</TableCell>
            <TableCell>{item.totalExpense.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default InvestmentTable;
