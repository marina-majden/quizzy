import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>Who is the best dog of all time?</h2>
      <img src="https://picsum.photos/id/1025/600/400" alt="adorable dog"></img>
      <ul>
        <li>Me</li>
        <li>Also me</li>
        <li>Me again</li>
        <li>Me, me, me</li>
      </ul>
      <button>next</button>
      <div className="index">1 out of 5 questions</div>
    </div>
  );
};

export default Quiz;
