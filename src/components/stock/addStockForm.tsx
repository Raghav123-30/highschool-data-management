"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { QUANTITY } from "@/constants/expense";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import axios, { isAxiosError } from "axios";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
const AddStockForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [stock, setStock] = useState({
    wheat: 0,
    rice: 0,
    oil: 0,
    dal: 0,
    milk: 0,
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onStockAdded = async () => {
    try {
      if (
        stock.wheat >= 0 &&
        stock.rice >= 0 &&
        stock.oil >= 0 &&
        stock.dal >= 0 &&
        stock.milk >= 0
      ) {
        const domain = process.env.PRODUCTION_URL || "";
        const url = domain + "/api/stock";
        const response = await axios.post(url, stock);
        if (response.status == 201) {
          toast({
            title: "Success",
            description: "Stock has been updated successfully",
          });
          setTimeout(() => {
            router.push("/");
          }, 250);
        }
      } else {
        setError(true);
        setErrorMessage("Please provide valid values");
      }
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
            onChange={(e) =>
              setStock({
                ...stock,
                wheat: Number(e.target.value),
              })
            }
          ></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.RICE.name + "(gm)"}</label>
          <Input
            type="number"
            onChange={(e) =>
              setStock({
                ...stock,
                rice: Number(e.target.value),
              })
            }
          ></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.OIL.name + "(gm)"}</label>
          <Input
            type="number"
            onChange={(e) =>
              setStock({
                ...stock,
                oil: Number(e.target.value),
              })
            }
          ></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.DAL.name + "(gm)"}</label>
          <Input
            type="number"
            onChange={(e) =>
              setStock({
                ...stock,
                dal: Number(e.target.value),
              })
            }
          ></Input>
        </div>
        <div className="space-y-2">
          <label>{QUANTITY.MILK.name + "(gm)"}</label>
          <Input
            type="number"
            onChange={(e) =>
              setStock({
                ...stock,
                milk: Number(e.target.value),
              })
            }
          ></Input>
        </div>
        <div>
          <Button onClick={onStockAdded}>Submit</Button>
        </div>
        <div>
          {error && <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default AddStockForm;
