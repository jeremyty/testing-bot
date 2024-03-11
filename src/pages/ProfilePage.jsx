import { useState } from "react";
import CheckIcons from "../components/Icons";
import LotterySpinner from "../components/LotterySpinner";

export default function ProfilePage() {
  const [participants, setParticipants] = useState([
    "Lorem ipsum dolor",
    "They employed him",
    "I'm cutting down",
    "Keep your hands!",
    "Lorem, ipsum",
    "Lorem ipsum dolor",
  ]);
  const [winner, setWinner] = useState(null);

  const handleFinish = (winner) => {
    setWinner(winner);
  };

  return (
    <div>
      <LotterySpinner participants={participants} onFinish={handleFinish} />
      <CheckIcons />
    </div>
  );
}
