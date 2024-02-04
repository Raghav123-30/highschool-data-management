"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { QUANTITY } from "@/constants/expense";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import axios, { isAxiosError } from "axios";

const AddStockForm = () => {
  const [stock, setStock] = useState({
    wheat: "",
    rice: "",
    oil: "",
    dal: "",
    milk: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onStockAdded = async () => {
    try {
      const domain = process.env.PRODUCTION_URL || "";
      const url = domain + "/api/midDayMealItem";
      console.log(url);
      await axios.get(url);
    } catch (error) {
      if (isAxiosError(error)) {
        setError(true);
        setErrorMessage(error.response?.data.message);
      }
    }
  };
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-blue-500 text-xl text-center">
          Add stock data
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col px-8 py-10 space-y-5">
        <div className="space-y-2">
          <label>{QUANTITY.WHEAT.name + "(gm)"}</label>
          <Input
            type="number"
            value={stock.wheat}
            onChange={(e) =>
              setStock({
                ...stock,
                wheat: e.target.value,
              })
            }
          ></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.RICE.name + "(gm)"}</label>
          <Input
            type="number"
            value={stock.rice}
            onChange={(e) =>
              setStock({
                ...stock,
                rice: e.target.value,
              })
            }
          ></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.OIL.name + "(gm)"}</label>
          <Input
            type="number"
            value={stock.oil}
            onChange={(e) =>
              setStock({
                ...stock,
                oil: e.target.value,
              })
            }
          ></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.DAL.name + "(gm)"}</label>
          <Input
            type="number"
            value={stock.dal}
            onChange={(e) =>
              setStock({
                ...stock,
                dal: e.target.value,
              })
            }
          ></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.MILK.name + "(gm)"}</label>
          <Input
            type="number"
            value={stock.milk + "gm"}
            onChange={(e) =>
              setStock({
                ...stock,
                milk: e.target.value,
              })
            }
          ></Input>
        </div>
        <div>
          <Button onClick={onStockAdded}>Submit</Button>
        </div>
        <div>
          {error ?? <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default AddStockForm;
