import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  return (
    <Container className="max-w-screen-sm w-full">
      <Input />
      <div className="flex justify-end mt-4">
        <Button />
      </div>
    </Container>
  );
}

export default App;
