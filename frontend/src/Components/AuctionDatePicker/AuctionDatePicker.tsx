import React, { useState } from "react";
import { StyledDatePicker, StyledWrapper } from "./StyledAuctionDatePicket";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  endDate: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const AuctionDatePicker = ({ endDate }: Props) => {
  let oneMonth = new Date();
  oneMonth.setDate(oneMonth.getDate() + 30);

  let oneDay = new Date();
  oneDay.setDate(oneDay.getDate() + 1);
  const [startDate, setStartDate] = useState<Date>(oneDay);

  const handleChange = (date: Date) => {
    setStartDate(date);
    endDate(date.getTime());
  };

  return (
    <StyledWrapper>
      <StyledDatePicker
        selected={startDate}
        onChange={(date: Date) => handleChange(date)}
        maxDate={oneMonth}
        minDate={oneDay}
        placeholderText="Välj ett slutdatum"
      />
    </StyledWrapper>
  );
};

export default AuctionDatePicker;
