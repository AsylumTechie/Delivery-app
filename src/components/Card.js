import React from "react";

export default function Card() {
  const options = Array.from(Array(6), (e, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ));
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img
            src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some important text</p>
            <div className="container w-100">
              {/* Render the options array here */}
              <select className="m-2 h-100  bg-success rounded">
                {options}
              </select>
              <select className="m-2 h-100  bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
