"use client";
export default function button() {
  return (
    <button onClick={clickHandler} type="button">
      Click here!
    </button>
  );
}

function clickHandler() {
  console.log("Testing...");
}
