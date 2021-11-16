import { StyledUnderTitle } from "../../Pages/AuctionDetailPage/StyledAuctionDetailPage";
import { useEffect, useState, useCallback } from 'react';
import { handleCount, ONE_DAY_IN_MILLIS } from '../AuctionCard/auctionUtils';
import { Auction } from '../../Interfaces/Interfaces';

interface Props {
  auction: Auction,
  fetchAuction: () => Promise<void>,
  // status: string | undefined
}

function Countdown({ auction, fetchAuction }: Props) {
  const [counter, setCounter] = useState<number | null>(null);
  const [differenceInMillis, setDifferenceInMillis] = useState(0);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState("Dagar kvar:");
  const [lessThan24, setLessThan24] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [first, setFirst] = useState(0);

  useEffect(() => {
    handleTime();
  }, [daysLeft])

  useEffect(() => {
    if(counter && counter <= 0 && !isFetched){
      console.log('Times up: should be fetching new auction');
      fetchAuction();
      setIsFetched(true)
    } else {
      handleCounter();
    }
    if (remainingTime.slice(0, 3) !== 'Dag') {
      setLessThan24(true);
    }
  }, [counter]);

  const handleTime = async () => {
    const endDateInMillis = new Date(`${auction.endDate}`).getTime();
    const todayInMillis = new Date().getTime();
    setDifferenceInMillis(endDateInMillis - todayInMillis);
    differenceInMillis <= ONE_DAY_IN_MILLIS && setCounter(differenceInMillis);
    setDaysLeft(Math.round(differenceInMillis / (60 * 60 * 24 * 1000)));
  }
  
  const handleCounter = () => {
    if (counter !== null && counter > 0) {
      handleCount(
        counter,
        differenceInMillis,
        setDaysLeft,
        setRemainingTime,
        setCounter,
        handleTime,
        first
      );
      setFirst(1);
    }
  };

  return (
    <>
      {<StyledUnderTitle>{daysLeft} {remainingTime.slice(0, remainingTime.length - 1)} tills auktionen avslutas</StyledUnderTitle>}
    </>
  )
}

export default Countdown;