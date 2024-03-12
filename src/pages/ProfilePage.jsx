import { useContext, useState } from "react";
import CheckIcons from "../components/Icons";
import LotterySpinner from "../components/LotterySpinner";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";

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
