import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Oops!!</h1>
          <h2>Something went wrong!!</h2>
          <h3>{err.status}: {err.statusText} </h3>
    </div>
  );
}

export default Error