import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} itemProp={item} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
