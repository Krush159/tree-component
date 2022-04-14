import React from "react";
import Tree from "./Tree";

const treeData = [
  {
    key: "0",
    label: "A",
    icon: "fa-solid fa-user",
    children: [
      {
        key: "0-0",
        label: "B",
        icon: "fa-solid fa-user",
        children: [
          {
            key: "0-1-1",
            label: "C",
            icon: "fa-solid fa-user",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "D",
    icon: "fa-solid fa-user",
    children: [
      {
        key: "1-0",
        label: "E",
        icon: "fa-solid fa-user",
      },
    ],
  },
  {
    key: "2",
    label: "F",
    icon: "fa-solid fa-user",
    // children: [],
  },
];

const TreeList = () => {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Hierarchy Tree Component</h2>
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <Tree data={treeData} />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default TreeList;