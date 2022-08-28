import React from "react";

const FormPreview = (text) => {
  return (
    <div>
      <div className="container">
        <div className="row my-2">
          <div className="col-9">
            <h6>{text.text}</h6>
          </div>
          <div className="col-3">
            <button
              className="btn btn-danger"
              onClick={() => {
                text.onSelect(text.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPreview;
