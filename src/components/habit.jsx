// rcc +tap 기본틀 만드는 자동완성
// * extension 설치 필요
import React, { Component } from "react";

//class명은 대문자로 시작해야한다.
class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    // state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트
    // this.state.count++ > 그냥 이렇게 업데이트하면 리액트가 알 수 없음
    // state를 업데이트 하기 위해 setState를 활용해야함
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        {/* 아이콘은 fontAwesome을 활용 */}
        {/* yarn add @fortawesome/fontawesome-free */}
        {/* ctrl+p 검색을 통해 파일 이동가능 */}
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i class="fa-solid fa-square-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i class="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
