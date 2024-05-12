import { useState, useEffect } from "react";

export default function Search() {
  const [query, setQurey] = useState("pizza");
  // Syntax of the useEffect hook
  useEffect(() => {
    function demo() {
      console.log("Demo function executed");
    }
    demo();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQurey(e.target.value)}
        type="text"
      />
    </div>
  );
}
