import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];

  // seperate event handler for onSelectItem as it take a function
  // convention: handle<>
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        {" "}
        {/* <Alert children="An alert" /> */}
        <Alert>
          {" "}
          <h1> An Alert</h1>
        </Alert>
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />{" "}
      </div>
      <div>
        <Button onClick={() => console.log("Clicked")}>My button</Button>
      </div>
    </>
  );
}

export default App;
