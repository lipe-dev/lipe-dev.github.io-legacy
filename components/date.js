import { parseISO, format } from "date-fns";
import CustomPropTypes from "propTypes";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

Date.propTypes = {
  dateString: CustomPropTypes.isoDateString,
};
