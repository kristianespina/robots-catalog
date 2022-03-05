import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { removeRobotById } from "../../features/robots/robotsSlice";
import { deleteRobotById } from "../../services/api/robots";
import Button from "../Buttons/Button";
import Avatar from "./Avatar";

interface IBotDetails {
  robotId: string;
  avatar: string;
  name: string;
  purpose: string;
}
const BotDetails = ({ robotId, avatar, name, purpose }: IBotDetails) => {
  const dispatch = useAppDispatch();

  const handleDelete = (robotId: string) => {
    console.log("Deletes", robotId);
    deleteRobotById(robotId);
    dispatch(removeRobotById(robotId));
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-x-4">
      <div className="-mt-16 md:mt-0">
        <Avatar avatar={avatar} />
      </div>
      <div className="flex flex-col flex-grow">
        <p className="text-lg font-bold mb-2">{name}</p>
        <p className="text-md font-medium text-gray-500 leading-normal">
          {purpose}
        </p>
      </div>
      <div className="text-right mt-4 space-x-2 sm:space-y-2 sm:space-y-0">
        <Link to={`/view/${robotId}`}>
          <Button type="primary">View Details</Button>
        </Link>
        <Button type="danger" onClick={() => handleDelete(robotId)}>
          Delete Bot
        </Button>
      </div>
    </div>
  );
};

export default BotDetails;
