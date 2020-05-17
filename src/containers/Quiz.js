import { connect } from "react-redux";

import { answerQuestion, resetAnswer } from "../actions";
import Quiz from "../components/Quiz";

const mapStateToProps = (state) => ({
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  answerQuestion: (questionId, chosenOption) =>
    dispatch(answerQuestion(questionId, chosenOption)),
  resetAnswer: () => dispatch(resetAnswer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
