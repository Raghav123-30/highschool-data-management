"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
const AddAttendanceForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [attendance, setAttendance] = useState({
    classEighth: "",
    classNinth: "",
    classTenth: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onAttendanceAdded = async () => {
    try {
      const eighthClassAttendance = parseInt(attendance.classEighth);
      const ninthClassAttendance = parseInt(attendance.classNinth);
      const tenthClassAttendance = parseInt(attendance.classNinth);
      const totalAttendance =
        eighthClassAttendance + ninthClassAttendance + tenthClassAttendance;
      console.log(totalAttendance);
      if (
        eighthClassAttendance >= 0 &&
        ninthClassAttendance >= 0 &&
        tenthClassAttendance >= 0
      ) {
        setError(false);
        const domain = process.env.PRODUCTION_URL || "";
        const url = domain + "/api/attendance";
        const result = await axios.post(url, {
          numberOfAttendees: totalAttendance,
        });

        if (result.status == 201) {
          toast({
            title: "Success",
            description: "attendance data succesfully submitted",
          });
          setTimeout(() => {
            router.push("/");
          }, 250);
        }
      } else {
        console.log("invalid values");
        setErrorMessage("Provide valid attendance values");
        setError(true);
      }
    } catch (error) {
      setErrorMessage("Something went wrong");
      setError(true);
    }
  };
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-blue-500 text-xl text-center">
          {"Add today's attendance"}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col px-8 py-10 space-y-5">
        <div className="space-y-2">
          <label>{"Class 8"}</label>
          <Input
            type="number"
            value={attendance.classEighth}
            onChange={(e) =>
              setAttendance({
                ...attendance,
                classEighth: e.target.value,
              })
            }
          ></Input>
        </div>
        <div className="space-y-2">
          <label>{"Class 9"}</label>
          <Input
            type="number"
            value={attendance.classNinth}
            onChange={(e) =>
              setAttendance({
                ...attendance,
                classNinth: e.target.value,
              })
            }
          ></Input>
        </div>
        <div className="space-y-2">
          <label>{"Class 10"}</label>
          <Input
            type="number"
            value={attendance.classTenth}
            onChange={(e) =>
              setAttendance({
                ...attendance,
                classTenth: e.target.value,
              })
            }
          ></Input>
        </div>

        <div className="space-y-1">
          <Button onClick={onAttendanceAdded}>Submit</Button>
        </div>
        {error && <h1 className="text-sm text-red-500">{errorMessage}</h1>}
      </CardContent>
    </Card>
  );
};

export default AddAttendanceForm;
