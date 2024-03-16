import { useEffect } from "react";

export default function BookDetails({ selectedId, handleBack }) {
  async function getBookDetail() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/book/bookById/${selectedId}`
      ).catch((error) => console.log(error));
      const BookDetails = await response.json();
      console.log("BookDetails: ", BookDetails);
    } catch (error) {
      console.log("err: ", error.message);
    }
  }

  useEffect(() => {
    getBookDetail();
  }, []);

  return (
    <div className="m-2">
      <button onClick={handleBack}>Back</button>
      <div>{selectedId}</div>
    </div>
  );
}
