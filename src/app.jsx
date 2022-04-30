import "./app.css";
import React from "react";
import Habit from "./components/habit";

function App() {
  // 비지니스 로직
  const name = "jake";

  return (
    <React.Fragment>
      {/* 컴포넌트를 불러오는 방법   */}
      <Habit />
    </React.Fragment>
  );
}

export default App;
