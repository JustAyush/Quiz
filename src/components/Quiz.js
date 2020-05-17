import React, { useState } from "react";

import QuizQuestion from "./QuizQuestion";

const Quiz = ({ questions, answerQuestion }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevNextToggle, setprevNextToggle] = useState(false);
  const [finish, setFinish] = useState(false);

  const handlePrev = () => {
    if (selectedIndex === 0) return;
    setSelectedIndex(selectedIndex - 1);
    setprevNextToggle(!prevNextToggle);
  };
  const handleNext = () => {
    if (selectedIndex === questions.length - 1) return;
    setSelectedIndex(selectedIndex + 1);
    setprevNextToggle(!prevNextToggle);
  };
  const handleFinish = () => {
    setFinish(true);
  };

  return (
    <>
      {finish ? (
        <h1 style={{ marginTop: "200px" }}>Hurray, you finished the quiz.</h1>
      ) : (
        <QuizQuestion
          question={questions[selectedIndex]}
          handlePrev={handlePrev}
          handleNext={handleNext}
          currentQuestion={selectedIndex + 1}
          totalQuestions={questions.length}
          answerQuestion={answerQuestion}
          prevNextToggle={prevNextToggle}
          handleFinish={handleFinish}
        />
      )}
    </>
  );
};

export default Quiz;
