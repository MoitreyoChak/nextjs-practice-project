import { useState, useEffect } from "react";
export default function BlogFetcher() {
  const [data, setData] = useState("");
  const [loader, setLoader] = useState();

  useEffect(() => {
    fetch("http://localhost:3000");
  }, []);

  return (
    <>
      <span></span>
    </>
  );
}
