import React from "react";

export default function Index() {
  React.useEffect(() => {
    fetch("/.netlify/functions/hello")
      .then(response => response.json())
      .then(console.log);
  }, []);

  return <h1>api test</h1>;
}
