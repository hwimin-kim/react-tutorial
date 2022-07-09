import Hello from "./Hello";
import "./App.css";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };

  return (
    <>
      {/* 주석 사용법 */}
      <Hello
      // 이런식으로 태그 내부에 작성하는 주석은 화면에 표시되지 않는다.
      />

      {/* 변수 및 css는 {} 사용 */}
      <div style={style}>{name}</div>

      {/* class 속성은 class가 아닌 className으로 사용 */}
      <div className="gray-box"></div>

      {/*
      2개 이상의 태그는 하나의 태그 내부에 있어야 한다.
      <></>: Fragments는 DOM에 별도의 노드를 추가하지 않고 여러 자식을 그룹화할 수 있다.
      */}
    </>
  );
}

export default App;
