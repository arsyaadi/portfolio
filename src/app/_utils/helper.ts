import he from "he";

export const decodeHtml = (html: string) => {
  return he.decode(html);
};

export const formatDateRange = (startDate: Date, endDate?: Date) => {
  const startYear = startDate.getFullYear();

  let endYear = null;
  if (endDate) {
    endYear = endDate.getFullYear();
  }

  return `${startYear} - ${endYear ? endYear : "Present"}`;
};
