import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState<string[]>([""]);

  useEffect(() => {
    fetch("https://library-bff.onrender.com/lib")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, [books]);

  const Books: React.JSX.Element[] = books.map(
    (book: string, index: number) => {
      const bookName: string = book.split(".")[0].replaceAll("-", " ");

      return (
        <div key={index} className="books">
          <div>{bookName}</div>
        </div>
      );
    },
  );

  return (
    <>
      <h1>Library</h1>
      <>{Books}</>
    </>
  );
};

export default App;
