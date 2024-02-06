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
import { meal } from "@/models/ui/meal";
import axios, { isAxiosError } from "axios";
import { useState, useEffect } from "react";

const MidDayMealTable = () => {
  const [mealData, setMealData] = useState<meal[]>([]);
  useEffect(() => {
    const getMidDayMealData = async () => {
      try {
        const domain = process.env.PRODUCTION_URL || "";
        const url = domain + "/api/mid-day-meal";
        const response = await axios.get(url);
        setMealData(response.data.midDayMealData);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error.response?.data.message);
        }
      }
    };
    getMidDayMealData();
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
      <TableBody>
        {mealData.map((item, index) => (
          <TableRow key={item._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.itemName}</TableCell>
            <TableCell>{item.totalStock + item.usedQuantity}</TableCell>
            <TableCell>{item.usedQuantity}</TableCell>
            <TableCell>{item.totalStock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
};

export default MidDayMealTable;
