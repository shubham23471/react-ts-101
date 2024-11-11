import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

// we use this component like regular HTML tag
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
        <Alert />
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />{" "}
      </div>
    </>
  );
}

export default App;
