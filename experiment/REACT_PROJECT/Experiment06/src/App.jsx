import React from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
      }}
    >
      <form
        style={{
          width: "300px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          border: "2px solid black",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px black",
          padding: "20px",
          gap: "15px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "blue",
          }}
        >
          Login Form
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          style={{
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "yellow",
            color: "red",
            fontSize: "14px",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={{
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "yellow",
            color: "red",
            fontSize: "14px",
          }}
        />
        <input
          type="tel"
          placeholder="Enter Phone Number"
          style={{
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "yellow",
            color: "red",
            fontSize: "14px",
          }}
        />
         

        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default App;