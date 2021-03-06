import React, { useEffect, useContext } from "react";
import SocketContext from "../SocketContext";
import { useParams } from "react-router-dom";
import Board from "./Board/Board";
import "../css/Room.css";

function Room() {
  const { room } = useParams();
  const { user, setRoom } = useContext(SocketContext);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      setRoom(room);
    }

    return function cleanup() {
      mounted = false;
    };
  }, [room, setRoom]);

  return user.room ? (
    <div className="Room">
      <Board />
    </div>
  ) : (
    "LOADING"
  );
}

export default Room;
