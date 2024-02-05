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
import axios, { isAxiosError } from "axios";
import { useState, useEffect } from "react";

const MidDayMealTable = () => {
  const [mealData, setMealData] = useState([]);
  useEffect(() => {
    async function oneMoreAttempt() {
      try {
        const domain = process.env.PRODUCTION_URL || "";
        let url = domain + "/api/users/me";
        const response = await axios.get(url);
        const highSchoolId = response.data.highSchoolId;
        console.log(highSchoolId);
      } catch (error) {}
    }
    oneMoreAttempt();
  }, []);
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
