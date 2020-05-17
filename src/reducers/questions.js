export const questions = (state = [], action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return [
        ...state,
        {
          id: action.id,
          question: action.question.question.trim(),
          options: action.question.options,
          correctOption: action.question.correctOption,
          chosenOption: null,
        },
      ];

    case "EDIT_QUESTION":
      let quesId = state.findIndex((item) => item.id === action.questionId);
      let newQuestions = [...state];
      newQuestions[quesId] = {
        ...newQuestions[quesId],
        question: action.updatedQuestion.question,
        options: action.updatedQuestion.options,
        correctOption: action.updatedQuestion.correctOption,
      };
      state = [...newQuestions];
      return state;

    case "DELETE_QUESTION":
      return state.filter((item) => item.id !== action.questionId);

    case "ANSWER_QUESTION":
      let questionId = state.findIndex((item) => item.id === action.questionId);
      let answeredQuestions = [...state];
      answeredQuestions[questionId] = {
        ...answeredQuestions[questionId],
        chosenOption: action.chosenOption,
      };
      state = [...answeredQuestions];
      return state;

    case "RESET_ANSWER":
      let tempQues = [...state]
      tempQues.map((item, index) => {
        item.chosenOption = null;
      })
      state = [...tempQues]
      return state;

    default:
      return state;
  }
};
