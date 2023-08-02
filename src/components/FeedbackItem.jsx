import Card from "./Shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ itemProp }) {
  return (
    <Card>
      <div className="num-display">{itemProp.rating}</div>
      <div className="text-display">{itemProp.text}</div>
    </Card>
  );
}
FeedbackItem.propType = {
  itemProp: PropTypes.object.isRequired,
};

export default FeedbackItem;
