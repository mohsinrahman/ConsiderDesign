import React, { Component } from "react";
import user from "./../user.json";
import { Container, Row, Col, Grid } from "react-bootstrap";
import lightLogo from "./../images/lightLogo.png";
import _ from "lodash";
import Konva from "konva";
import { Stage, Layer, Line, Text } from "react-konva";

class UserPanel extends Component {
  state = {
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

  render() {
    //console.log(user);
    return (
      <div className="UserPanel_wrapper">
        <Row className="show-grid">
          <Col xs={3} md={2} className="UserPanel_left">
            <img src={lightLogo} alt="logo" width="80%" />
            {_.times(5, i => (
              <h5 class="projectList" key={i}>
                Image {i}
              </h5>
            ))}
          </Col>
          <Col xs={9} md={10}>
            <h6 style={{ marginTop: "5px", color: "#727077" }}>Canvas </h6>
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
