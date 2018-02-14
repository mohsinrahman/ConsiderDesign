import React, { Component } from "react";
import ConsiderDesign from "./images/CD.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section-top">
          <div className="section-top-material">
            <img src={ConsiderDesign} alt="logo" />
            <p style={{ textDecoration: "underline" }}>
              <strong>Consider Design </strong> is tool to get client&apos;s
              feedback.
            </p>
            <p style={{ "text-decoration": "underline" }}>
              Makes your process fast.
            </p>
          </div>
        </section>
        <section className="section-bottom">
          <form className="form-signIn">
            <div className="form-group">
              <input
                type="email"
                id="formGroupExampleInput"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="formGroupExampleInput2"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                className="signInBtn"
                type="submit"
                id="formGroupExampleInput3"
                placeholder="Another input"
                value="SignIn"
              />
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default App;
