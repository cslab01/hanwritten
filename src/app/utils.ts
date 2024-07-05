export const dateRangeFormatter = ([start, end]: [Date, Date]): string => {
   const dateTimeFormat = new Intl.DateTimeFormat("en-us", {
     year: "numeric",
     month: "short",
   });
   return dateTimeFormat.formatRange(start, end);
 };
 
export const concatArrFormatter = (param: string[]): string => param.join(",");