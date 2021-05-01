import React from "react";

const CVRender = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default CVRender;
