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
  handleTime: () => Promise<void>,
  first: number
) => {

  let seconds = ONE_SECOND_IN_MILLIS;
  let minutes = ONE_MINUTE_IN_MILLIS;
  let hours = ONE_HOUR_IN_MILLIS;
  
  if (first == 0) {
    seconds = Math.floor((counter / 1000) % 60)
    minutes = Math.floor((counter / (1000 * 60)) % 60)
    hours = Math.floor((counter / (1000 * 60 * 60)) % 24);
  }

  const secondsInMillis = Math.floor(seconds * 1000);
  const minutesInMillis = Math.floor(minutes * 1000 * 60);

  console.log(counter, 'counter');
  
  if (hours) {
    setDaysLeft(Math.floor((differenceInMillis / (1000 * 60 * 60)) % 24));
    setRemainingTime("Timmar kvar:");
    setTimeout(async () => {
      await handleTime();
      // setCounter(counter - 1);
    }, (minutes));
  }
  
  // Minutes
  if (hours == 0 && minutesInMillis >= ONE_MINUTE_IN_MILLIS) {
    console.log('minutes');
    
    setDaysLeft(Math.floor((differenceInMillis / (1000 * 60)) % 60));
    setRemainingTime("Minuter kvar:");
    setTimeout(async () => {
      await handleTime();
      // setCounter(counter - 1);
    }, secondsInMillis);
  }

  // Seconds
  if (counter >= ONE_SECOND_IN_MILLIS && counter < ONE_MINUTE_IN_MILLIS) {
    setDaysLeft(Math.floor((differenceInMillis / 1000) % 60));
    setRemainingTime("Sekunder kvar:");
    setTimeout(async () => {
      await handleTime();
      // setCounter(counter - 1);
    }, ONE_SECOND_IN_MILLIS);
  }
};
