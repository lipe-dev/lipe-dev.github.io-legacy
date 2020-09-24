import PropTypes from "prop-types";
import { parseISO } from "date-fns";

const isoDateString = (props, propName, componentName) => {
  if (!props[propName]) return new Error(`Prop ${propName} is required`);
  try {
    parseISO(props[propName]);
  } catch (e) {
    return new Error(
      "Invalid prop `" +
        propName +
        "` supplied to" +
        " `" +
        componentName +
        "`. Expected a valid Date string."
    );
  }
};

const postData = PropTypes.shape({
  image: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: isoDateString,
  excerpt: PropTypes.string.isRequired,
});

export default {
  isoDateString,
  postData,
};
