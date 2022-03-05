import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { update } from "../../features/robots/robotsSlice";
import { getRobots } from "../../services/api/robots";
import { getAvatar } from "../../utils/avatar";
import emptyDataAnimation from "../../resources/empty_data.json";

import Card from "../Cards/Card";
import BotItem from "./BotItem";
import Lottie from "lottie-react";

const BotList = () => {
  const dispatch = useAppDispatch();
  const { robots } = useAppSelector((state) => state.robots);

  // Fetch robots
  useEffect(() => {
    const bots = getRobots();
    dispatch(update(bots));
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-y-16 md:gap-y-4">
      {robots.length ? (
        robots.map((bot) => (
          <Card key={bot.id}>
            <BotItem
              robotId={bot.id}
              avatar={getAvatar(bot.id)}
              name={bot.name}
              purpose={bot.purpose}
            />
          </Card>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-12 h-full">
          <p className="text-2xl font-bold text-[#F3B547]">
            Oops. There are no entries
          </p>
          <p className="text-lg font-bold text-gray-500">
            Please create a robot to continue
          </p>
          <div className="w-96 h-96">
            <Lottie animationData={emptyDataAnimation} loop autoplay />
          </div>
        </div>
      )}
    </div>
  );
};

export default BotList;
