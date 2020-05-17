import { connect } from "react-redux";

import { answerQuestion } from "../actions";
import Quiz from "../components/Quiz";

const mapStateToProps = (state) => ({
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  answerQuestion: (questionId, chosenOption) =>
    dispatch(answerQuestion(questionId, chosenOption)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
