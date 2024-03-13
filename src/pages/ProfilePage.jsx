import { useContext, useState } from "react";
import CheckIcons from "../components/Icons";
import LotterySpinner from "../components/LotterySpinner";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

export default function ProfilePage() {
  const [participants, setParticipants] = useState([
    "15SzxaaA4fAPCB5azWROwZn",
    "1M4Hpbo23Km6Eik5Jbv2Pgf",
    "1c3sQaPovuQ4MeoH6JmE0Hq",
    "1a6yBD7xdK0yABMdtwxrpLg",
    "1Z8wL0tofPYEbMkeGQUhwof",
    "1kySALqmBJXvw9VMnz6ZR5a",
  ]);
  const [winner, setWinner] = useState(null);

  const handleFinish = (winner) => {
    setWinner(winner);
  };

  const auth = getAuth();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  //check if no token
  if (!currentUser) {
    navigate("/");
  }

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      <LotterySpinner
        participants={participants}
        onFinish={handleFinish}
        handleLogout={handleLogout}
      />
      <CheckIcons />
    </div>
  );
}
