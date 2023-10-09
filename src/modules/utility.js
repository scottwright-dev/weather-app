import { format } from "date-fns";

export const formatDate = (date) =>
  date ? format(new Date(date), "dd/MM/yyyy") : null;

export const formatDateAndTime = (dateAndTime) =>
  dateAndTime
    ? format(new Date(dateAndTime), "do 'of' MMMM yyyy, h:mm aa")
    : null;
