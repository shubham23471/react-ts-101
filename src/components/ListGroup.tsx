import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];
  // this is a local variable to the this function and react doesn't
  // know about this function. so we have use Hook
  let selectedIndex = 0;
  //
  const arr = useState(-1);
  arr[0]; // variable (eg: selectedIndex)
  arr[1]; // updater function

  return (
    <>
      <h1>List</h1>
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
              selectedIndex = index;
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

// import { MouseEvent } from "react";

// function ListGroup() {
//   let items = ["New York", "San Franciso", "Tokyo", "London", "Paris"];
//   let selectedIndex = -1; // -1: No item is selected
//   //   items = [];

//   // we can also assing the value of a variable
//   //   const message = items.length === 0 ? <p>No Item Found</p> : null;

//   //Event handler
//   const handleClick = (event: MouseEvent) => console.log(event);
//   return (
//     <>
//       <h1>List</h1>
//       {/* {items.length === 0 ? <p>No Item Found</p> : null}; */}
//       {items.length === 0 && <p>No Item Found</p>}

//       <ul className="list-group">
//         {items.map((item, index) => (
//           <li
//             className={
//               selectedIndex === index
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//             key={item}
//             // onClick={() => console.log(item, index)}
//             onClick={handleClick}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;

// ================================================
