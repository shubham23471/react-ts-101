import ListGroup from "./components/ListGroup";

// we use this component like regular HTML tag
function App() {
  let items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];
  // return <div><Message></Message></div>
  return (
    <div>
      <ListGroup items={items} heading="Cities" />{" "}
    </div>
  );
}

export default App;
