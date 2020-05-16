const questions = (state = [], action) => {
    switch (action.type) {
      case "ADD_QUESTION":
        return [
          ...state,
          {
            id: action.id,
            question: action.question.question.trim(),
            options: action.question.options,
            correctOption: action.question.correctOption
          }
        ];
  
      default:
        return state;
    }
  };
  
  export default questions;
  