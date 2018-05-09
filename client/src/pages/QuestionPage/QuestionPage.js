import React from "react";
import Navbar from "../../components/Navbar";
import "./questions.css";

export default class QuestionPage extends React.Component {
  state = {
    title: "Vocabulary",
    user: "Amanda Ramirez",
    question: "Wow, isn't this a great question?",
    answerArr: [
      "ok",
      "e = mc^2",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis nisl, consequat eu aliquet vitae, pulvinar sed orci."
    ],
    correctAns: "ok",
    chosenAns: "",
    ansStatus: undefined
  };

  handleAnsClick = e => {
    var ans = e.target.value;
    this.setState(() => ({
      chosenAns: ans
    }));
    if (this.state.chosenAns == this.state.correctAns) {
      this.setState(() => ({
        ansStatus: true
      }));
    } else {
      this.setState(() => ({
        ansStatus: false
      }));
    }
    console.log("correctAns: ", this.state.correctAns);
    console.log("chosenAns: ", this.state.chosenAns);
    console.log("ansStatus: ", this.state.ansStatus);
  };

  render() {
    return (
      <div className="fitpage">
        <Navbar firstName={localStorage.getItem("user")} />

        <div className="row info">
          <button className="white-button mini-title">
            {this.state.title}
          </button>
          <h3 className="mini-byline">by {this.state.user}</h3>
        </div>

        <div className="container text-center">
          <div className="row content">
            <h1 className="question">{this.state.question}</h1>
            {this.state.answerArr.map(answer => (
              <button
                key={answer}
                className="outline-button answer"
                onClick={this.handleAnsClick}
                value={answer}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
