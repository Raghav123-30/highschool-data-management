"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { QUANTITY } from "@/constants/expense";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddStockForm = () => {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-blue-500 text-xl text-center">
          Add stock data
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col px-8 py-10 space-y-5">
        <div className="space-y-2">
          <label>{QUANTITY.WHEAT.name}</label>
          <Input></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.RICE.name}</label>
          <Input></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.OIL.name}</label>
          <Input></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.DAL.name}</label>
          <Input></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.MILK.name}</label>
          <Input></Input>
        </div>
        <div>
          <Button>Submit</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddStockForm;
