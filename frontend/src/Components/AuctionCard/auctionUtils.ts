export const ONE_DAY_IN_MILLIS = 86400000;
export const ONE_HOUR_IN_MILLIS = 3600000;
export const ONE_MINUTE_IN_MILLIS = 60000;
export const ONE_SECOND_IN_MILLIS = 1000;
export const HOUR_IN_DAY = 24;

export const handleCount = (
  counter: number,
  differenceInMillis: number,
  setDaysLeft: React.Dispatch<React.SetStateAction<number | null>>,
  setRemainingTime: React.Dispatch<React.SetStateAction<string>>,
  setCounter: React.Dispatch<React.SetStateAction<number | null>>,
  handleTime: () => Promise<void>
) => {
  if (counter > ONE_HOUR_IN_MILLIS) {
    setDaysLeft(Math.floor((differenceInMillis / (1000 * 60 * 60)) % 24));
    setRemainingTime("Timmar kvar:");
    setTimeout(async () => {
      await handleTime();
      setCounter(counter - 1);
    }, ONE_HOUR_IN_MILLIS);
  }

  // Minutes
  if (counter >= ONE_MINUTE_IN_MILLIS && counter < ONE_HOUR_IN_MILLIS) {
    setDaysLeft(Math.floor((differenceInMillis / (1000 * 60)) % 60));
    setRemainingTime("Minuter kvar:");
    setTimeout(async () => {
      await handleTime();
      setCounter(counter - 1);
    }, ONE_MINUTE_IN_MILLIS);
  }

  // Seconds
  if (counter >= ONE_SECOND_IN_MILLIS && counter < ONE_MINUTE_IN_MILLIS) {
    setDaysLeft(Math.floor((differenceInMillis / 1000) % 60));
    setRemainingTime("Sekunder kvar:");
    setTimeout(async () => {
      await handleTime();
      setCounter(counter - 1);
    }, ONE_SECOND_IN_MILLIS);
  }
};
