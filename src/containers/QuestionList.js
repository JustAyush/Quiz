import { connect } from "react-redux";
import QuestionList from "../components/QuestionList";

const mapStateToProps = state => ({
  questions: state.questions
});

export default connect(mapStateToProps)(QuestionList);
