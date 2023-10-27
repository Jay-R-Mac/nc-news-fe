import { useState } from "react";
import BrowseArticles from "./BrowseArticles";

export default function SortArticles() {
  const [sortBy, setSortBy] = useState("created_at");
  const [sortAsc, setAsc] = useState("Desc");

  return (
    <div className="block mb-2">
      Sort by:
      <select
        className="border ml-2 border-gray-300 p-2 rounded"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment count</option>
        <option value="votes">Votes</option>
      </select>
      <select
        className="border border-gray-300 p-2 rounded"
        value={sortAsc}
        onChange={(e) => setAsc(e.target.value)}
      >
        <option value={"Asc"}>Ascending</option>
        <option value={"Desc"}>Descending</option>
      </select>
      <BrowseArticles sortBy={sortBy} sortAsc={sortAsc} />
    </div>
  );
}
