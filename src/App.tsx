import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState<string[]>([""]);

  useEffect(() => {
    fetch("http://localhost:8000/lib")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const Books: React.JSX.Element[] = books.map(
    (book: string, index: number) => {
      return <div key={index}>{book}</div>;
    },
  );

  return (
    <>
      <h1>Rishabh</h1>
      <>{Books}</>
    </>
  );
};

export default App;
