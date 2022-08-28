import React, { useState } from "react";
import FormPreview from "./FormPreview";

const Form = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = text;
    setData([...data, newData]);

    setText("");
  };

  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index !== a;
    });
    setData(finalData);
  };

  return (
    <>
      <div className="row bg-primary text-white">
        <div className="col  p-2">
          <h4 className="text-center">Write Text Here</h4>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <div className="row justify-content-between text-white p-2">
          <div className="form-group flex-fill mb-2 row-6">
            <div class="form-group">
              <textarea
                className="form-control"
                id="todo-input"
                rows="3"
                value={text}
                onChange={onChangeHandler}
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary m-2 mr-2 col-12">
          Submit
        </button>
      </form>
      {data.map((value, index) => {
        return (
          <FormPreview
            key={index}
            id={index}
            text={value}
            onSelect={deleteItem}
          />
        );
      })}
    </>
  );
};

export default Form;
