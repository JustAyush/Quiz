const initialState = [
  {
    id: 101,
    question: "Who is your favourite youtuber?",
    options: [
      {
        id: 0,
        option: "Casey Neistat",
      },
      {
        id: 2,
        option: "Mr. Beast",
      },
      {
        id: 3,
        option: "David Dobrik",
      },
      {
        id: 4,
        option: "Jason Nash",
      },
      {
        id: 5,
        option: "MKBHD",
      },
    ],
    correctOption: "0",
  },
  {
    id: 102,
    question: "Who won the fight?",
    options: [
      {
        id: 0,
        option: "KSI",
      },
      {
        id: 2,
        option: "Logan Paul",
      },
    ],
    correctOption: "0",
  },
  {
    id: 103,
    question: "Who has got the most subs in Youtube?",
    options: [
      {
        id: 0,
        option: "Pewdiepie",
      },
      {
        id: 2,
        option: "Logan Paul",
      },
      {
        id: 3,
        option: "Mr. Beast",
      },
      {
        id: 4,
        option: "Dude Perfect",
      },
    ],
    correctOption: "0",
  },
];

export const questions = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      return [
        ...state,
        {
          id: action.id,
          question: action.question.question.trim(),
          options: action.question.options,
          correctOption: action.question.correctOption,
        },
      ];

    case "EDIT_QUESTION":
      let quesId = state.findIndex((item) => item.id === action.questionId);
      let newQuestions = [...state]
      newQuestions[quesId] = {
        ...newQuestions[quesId],
        question: action.updatedQuestion.question,
        options: action.updatedQuestion.options,
        correctOption: action.updatedQuestion.correctOption,
      };
      state = [...newQuestions]
      return state;

    case "DELETE_QUESTION":
      return state.filter((item) => item.id !== action.questionId);

    default:
      return state;
  }
};
