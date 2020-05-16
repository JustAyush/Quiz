import { connect } from "react-redux";

import { editQuestion, deleteQuestion } from "../actions";

import QuestionList from "../components/QuestionList";

const mapStateToProps = (state, ownProps) => ({
  questions: state.questions, 
  setAddDialogOpen: ownProps.setAddDialogOpen
});

const mapDispatchToProps = dispatch => ({
  editQuestion: (questionId, updatedQuestion) => dispatch(editQuestion(questionId, updatedQuestion)),
  deleteQuestion: questionId => dispatch(deleteQuestion(questionId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
