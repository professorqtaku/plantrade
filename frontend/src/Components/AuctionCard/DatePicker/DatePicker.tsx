import MobileDatePicker from "@mui/lab/MobileDatePicker";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const DatePicker = () => {
  const [value, setValue] = useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  return (
    <MobileDatePicker
      label="Date mobile"
      inputFormat="MM/dd/yyyy"
      value={value}
      onChange={handleChange}
      renderInput={(params: any) => <TextField {...params} />}
    />
  );
};

export default DatePicker;
