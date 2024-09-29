import React, { useState, useMemo } from "react";
import { Virtuoso } from "react-virtuoso";

const MyTable = () => {
  const [selectAll, setSelectAll] = useState(false); // Biến kiểm soát tất cả checkbox
  const [items, setItems] = useState(
    Array.from({ length: 100000 }, (_, index) => ({
      id: index,
      name: `Row ${index + 1}`,
      selected: false,
    }))
  );

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, selected: !selectAll }))
    );
  };
  console.log("selectAll++", selectAll);
  // Chỉ render những phần tử trong viewport
  const Row = ({ index }) => {
    const item = items[index];
    return (
      <div style={{ background: selectAll || item.selected ? "red" : "" }}>
        <input
          type="checkbox"
          checked={selectAll || item.selected}
          onChange={() =>
            setItems((prevItems) =>
              prevItems.map((prevItem, idx) =>
                idx === index
                  ? { ...prevItem, selected: !prevItem.selected }
                  : prevItem
              )
            )
          }
        />
        {item.name}
      </div>
    );
  };
  console.log("secletd", items);
  return (
    <div>
      <button onClick={toggleSelectAll}>
        {selectAll ? "Unselect All" : "Select All"}
      </button>

      <Virtuoso
        style={{ height: 500, width: 300 }}
        totalCount={items.length}
        itemContent={(index) => <Row index={index} />}
      />
    </div>
  );
};

export default MyTable;
