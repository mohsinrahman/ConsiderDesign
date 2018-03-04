import React, { Component } from "react";
import user from "./../user.json";
import { Container, Row, Col, Grid } from "react-bootstrap";
import lightLogo from "./../images/lightLogo.png";
import wireframe from "./../images/wireframe.png";
import _ from "lodash";
import Konva from "konva";
import { Stage, Layer, Line, Text, Image } from "react-konva";
import { Link } from "react-router";

class UserPanel extends Component {
  state = {
    image: null,
    lines: [],
    height: 0,
    width: 0
  };

  componentDidMount() {
    const height = this.divElement.clientHeight;
    const width = this.divElement.clientWidth;
    this.setState({
      height,
      width
    });
  }

  handelImage = e => {
    e.preventDefault();
    const image = new window.Image();
    image.src = "http://konvajs.github.io/assets/yoda.jpg";
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image: image
      });
    };
  };

  handleMouseDown = () => {
    this._drawing = true;
    // add line
    this.setState({
      lines: [...this.state.lines, []]
    });
  };

  handleMouseMove = e => {
    // no drawing - skipping
    if (!this._drawing) {
      return;
    }
    const stage = this.stageRef.getStage();
    const point = stage.getPointerPosition();
    const { lines } = this.state;

    let lastLine = lines[lines.length - 1];
    // add point
    lastLine = lastLine.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    this.setState({
      lines: lines
    });
  };

  handleMouseUp = () => {
    this._drawing = false;
  };

  signoutMe = () => {
    console.log(this.props.history.push);
  };

  render() {
    console.log();
    return (
      <div className="UserPanel_wrapper">
        <Row className="show-grid">
          <Col xs={3} md={2} className="UserPanel_left">
            <img src={lightLogo} alt="logo" width="80%" />
            {_.times(user.Product.wireframes.length, i => (
              <h5 class="projectList" key={i} onClick={this.handelImage}>
                <img
                  src={process.env.PUBLIC_URL + user.Product.wireframes[i]}
                  alt="logo"
                  width="50"
                />
              </h5>
            ))}
          </Col>

          <Col xs={9} md={10}>
            <Row className="show-grid">
              <h6
                style={{
                  marginTop: "5px",
                  marginLeft: "15px",
                  color: "#727077"
                }}
              >
                Canvas
              </h6>
              <div
                style={{
                  marginTop: "5px",
                  position: "absolute",
                  color: "#727077",
                  right: "10%"
                }}
              >
                <ul style={{ listStyle: "none" }}>
                  <li
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontSize: ".9em"
                    }}
                    onClick={this.signoutMe()}
                  >
                    Signout
                  </li>
                </ul>
              </div>
            </Row>
            <div
              class="canvas"
              id="can"
              ref={divElement => (this.divElement = divElement)}
            >
              <Stage
                width={this.state.width}
                height={this.state.height}
                onContentMousedown={this.handleMouseDown}
                onContentMousemove={this.handleMouseMove}
                onContentMouseup={this.handleMouseUp}
                ref={nod => {
                  this.stageRef = nod;
                }}
              >
                <Layer>
                  <Image image={this.state.image} />
                  <Text text="" />
                  {this.state.lines.map((line, i) => (
                    <Line key={i} points={line} stroke="#E99787" />
                  ))}
                </Layer>
              </Stage>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
//<canvas id="canvas" style={{ border: "1px solid #727077" }}>
export default UserPanel;
