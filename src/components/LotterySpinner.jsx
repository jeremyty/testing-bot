import { useEffect, useState } from "react";

const LotterySpinner = ({ participants, onFinish }) => {
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (spinning) {
      const spinInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * participants.length);
        setWinner(participants[randomIndex]);
      }, 50); // Adjust the interval for the spinning speed
      setTimeout(() => {
        clearInterval(spinInterval);
        setSpinning(false);
        onFinish(winner);
      }, 8000); // Adjust the duration of spinning
    }
  }, [spinning]);

  const handleStartSpin = () => {
    setSpinning(true);
    setWinner(null);
  };

  return (
    <div>
      <h2 className="mx-5 mt-3">
        {spinning
          ? "CHECKED: " + Math.floor(Math.random() * 20000)
          : "Lost Wallet Finder"}
      </h2>
      {winner ? (
        <div className="winner-info mx-5 mt-3">
          <a>Wallet Search: {winner}</a>
          <br />
          <a>Wallet Search: {winner}</a>
          <br />
          <a>Wallet Search: {winner}</a>
          <br />
          <a>Wallet Search: {winner}</a>
          <br />
          <a>Wallet Search: {winner}</a>
          <br />
          <a>Wallet Search: {winner}</a>
          <br />
          <a>Wallet Search: {winner}</a>
          <br />
          <a>Wallet Search: {winner}</a>
          <br />
          <a>Wallet Search: {winner}</a>
          <br />
          <a>Wallet Search: {winner}</a>
          <br />
          <a>Wallet Search: {winner}</a>
        </div>
      ) : (
        <div className="mx-5">
          <p>Wallet Search: ......</p>
        </div>
      )}
      <div>
        <h2 className="mx-5 mt-3" style={{ color: "green" }}>
          Found: 1
        </h2>
      </div>
      <textarea className="winner-container mx-5"></textarea>
      <br />
      <button
        className="mx-5 mt-3"
        onClick={handleStartSpin}
        disabled={spinning}
      >
        {spinning ? "Seaching..." : "Start Seaching"}
      </button>
    </div>
  );
};

export default LotterySpinner;
