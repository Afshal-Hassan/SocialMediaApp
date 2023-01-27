export const getHoursDiffBetweenDates = (dateInitial, dateFinal) =>{
  return (dateFinal - dateInitial) / (1000 * 3600);
}