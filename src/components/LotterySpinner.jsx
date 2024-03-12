import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const LotterySpinner = ({ participants, onFinish, handleLogout }) => {
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
    <Container>
      <div className="row">
        <h1 className=" mt-3">
          {spinning
            ? "CHECKED: " + Math.floor(Math.random() * 20000)
            : "Lost Wallet Finder"}
        </h1>
        <button className="col-auto mx-3" onClick={handleLogout}>
          <i className="bi bi-door-closed" /> Logout
        </button>
        {winner ? (
          <div className="winner-info mx-2 mt-3">
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
          <h3 className="mt-3">
            <p>Wallet Search: ......</p>
          </h3>
        )}
        <div>
          <h2 className=" mt-3" style={{ color: "green" }}>
            Found: 1
          </h2>
        </div>
        <textarea
          className="winner-container mx-2"
          style={{ color: "green" }}
        ></textarea>
        <br />
        <Button
          className="col-auto mx-2 mt-3"
          onClick={handleStartSpin}
          disabled={spinning}
          variant="danger"
        >
          {spinning ? "Seaching..." : "Start Seaching"}
        </Button>
      </div>
    </Container>
  );
};

export default LotterySpinner;
