import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { StyledDatePicker } from "./StyledAuctionDatePicket";

import "react-datepicker/dist/react-datepicker.css";

const AuctionDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  let oneMonth = new Date();
  oneMonth.setDate(oneMonth.getDate() + 30);

  let oneDay = new Date();
  oneDay.setDate(oneDay.getDate() + 1);

  return (
    <StyledDatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      maxDate={oneMonth}
      minDate={oneDay}
    />
  );
};

export default AuctionDatePicker;
