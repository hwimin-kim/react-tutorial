import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello color="aqua"></Hello>
      <Hello name="react" color="red" />
    </Wrapper>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};

export default App;
