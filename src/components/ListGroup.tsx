import { useState } from "react";

//{ items : [], heading: string}
interface Props {
  items: string[];
  heading: string;
  //Passing function via Props: passing the value of selected item to App.tsx
  // by convention using var name as on<Varible-name>
  onSelectItem: (item: string) => void;
}

// parameter: props of Type Props
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No Item Found</p> : null}; */}
      {items.length === 0 && <p>No Item Found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item, index)}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
