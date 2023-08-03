import Card from "./Shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ itemProp, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{itemProp.rating}</div>
      <button className="close" onClick={() => handleDelete(itemProp.id)}>
        <FaTimes color="pink" />
      </button>
      <div className="text-display">{itemProp.text}</div>
    </Card>
  );
}
FeedbackItem.propType = {
  itemProp: PropTypes.object.isRequired,
};

export default FeedbackItem;
