import { useState } from "react";
import { patchVotes } from "./Axios";

export default function Voter({ votes, id }) {
  const [voteDiff, setVoteDiff] = useState(0);

  function updateVote(value) {
    setVoteDiff((currentVotes) => {
      return currentVotes + value;
    });
    patchVotes(id, voteDiff + value)
    .then((res)=>{console.log(res.status)})
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300"
        disabled={voteDiff === 1}
        onClick={() => {
          updateVote(1);
        }}
      >
        +
      </button>
      <p>{votes + voteDiff} Votes</p>
      <button
        className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded ml-2 transition duration-300"
        disabled={voteDiff === -1}
        onClick={() => {
          updateVote(-1);
        }}
      >
        -
      </button>
    </div>
  );
}
