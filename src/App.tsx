import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];

  // seperate event handler for onSelectItem as it take a function
  // convention: handle<>
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alterVisible, setAlertVisibility] = useState(false);
  return (
    <>
      <div>
        {alterVisible && (
          <Alert onClose={() => setAlertVisibility(false)}> My Alert</Alert>
        )}
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        <Button onClick={() => setAlertVisibility(true)}>My button</Button>
      </div>
    </>
  );
}

export default App;
