import { connect } from "react-redux";

import { addQuestion } from "../actions";

import AddQuestion from "../components/AddQuestion";

const mapDispatchToProps = dispatch => ({
  addQuestion: input => dispatch(addQuestion(input))
});

export default connect(
  null,
  mapDispatchToProps
)(AddQuestion);
