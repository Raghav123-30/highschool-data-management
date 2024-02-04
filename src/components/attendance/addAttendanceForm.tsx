"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const AddAttendanceForm = () => {
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
    } catch (error) {}
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
        {error ?? <p className="text-sm text-red-500">{errorMessage}</p>}
      </CardContent>
    </Card>
  );
};

export default AddAttendanceForm;
