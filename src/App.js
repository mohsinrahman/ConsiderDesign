import React, { Component } from "react";
import ConsiderDesign from "./images/CD.png";
import Particles from "react-particles-js";
import LoginForm from "./components/LoginForm";
import "./App.css";

class App extends Component {
  render() {
    //console.log(Particles);
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
          <Particles
            params={{
              particles: {
                //color: {
                //  value: ["#727077", "#E99787", "#A49592"]
                //  },
                shape: {
                  type: "star",
                  stroke: {
                    width: 0,
                    color: "#ffffff"
                  },
                  polygon: {
                    nb_sides: 15
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 250,
                  width: 1,
                  shadow: {
                    enable: true,
                    color: "#E99787",
                    blur: 1
                  }
                }
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab"
                  },
                  onclick: {
                    enable: false,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 4
                  }
                }
              }
            }}
          />
          <LoginForm history={this.props.history} />
          <div className="claimer">
            <h3>easer team collaboration</h3>
            <p>
              One of the biggest challenges in Consider design is ensuring your
              UX <br />works across platforms. UXPin solves this problem for our
              team, making it simple to test our products earlier.<br />
              “Loremify is a free Mac app to quickly copy Lorem Ipsum to your
              clipboard. It lets you wrap the dummy text in HTML or markdown,
              <br /> specify the amount of text,and copy it to your
              clipboard—all in one click.” works across platforms. UXPin solves
              this problem for our team, <br />making it simple to test our
              products earlier.<br />
            </p>
          </div>
          <div className="footer">Designed by HiPixel Media</div>
        </section>
      </div>
    );
  }
}

export default App;
