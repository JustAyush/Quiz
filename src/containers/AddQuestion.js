import { connect } from "react-redux";

import { addQuestion } from "../actions";

import AddQuestion from "../components/AddQuestion";


const mapStateToProps = (state, ownProps) => ({
  addDialogOpen: ownProps.addDialogOpen,
  setAddDialogOpen: ownProps.setAddDialogOpen
})

const mapDispatchToProps = dispatch => ({
  addQuestion: input => dispatch(addQuestion(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddQuestion);
