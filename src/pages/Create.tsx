import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "../layouts/MainLayout";
import MainContainer from "../components/Containers/MainContainer";
import Button from "../components/Buttons/Button";
import MainHeader from "../components/Headers/MainHeader";
import Card from "../components/Cards/Card";
import Avatar from "../components/Bots/Avatar";
import TextField from "../components/Forms/TextField";
import TextAreaField from "../components/Forms/TextAreaField";
import { createRobot, getRobotById, updateRobot } from "../services/api/robots";
import { useNavigate } from "react-router-dom";
import { getAvatar } from "../utils/avatar";

interface ICreate {
  robotId?: string;
}
const Create = ({ robotId }: ICreate) => {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const navigate = useNavigate();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePurpose = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPurpose(e.target.value);
  };

  const handleSave = () => {
    // Verify input
    if (name.length < 6)
      return toast.error(
        "Robot's name is too short. Please name your robot with atleast 6 characters"
      );
    if (purpose.length < 6)
      return toast.error("Please provide a short purpose for the robot");
    if (robotId) updateRobot(robotId, name, purpose);
    else createRobot(name, purpose);
    navigate("/");
  };

  const handleDiscard = () => {
    goBack();
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (robotId) {
      const robot = getRobotById(robotId);
      if (robot) {
        setName(robot.name);
        setPurpose(robot.purpose);
      }
    }
  }, [robotId]);

  return (
    <MainLayout>
      <ToastContainer />
      <MainHeader>
        <MainContainer>
          <Button type="primary" onClick={goBack}>
            Go back
          </Button>
        </MainContainer>
      </MainHeader>
      <MainContainer>
        <div className="pt-24 md:pt-8 flex flex-col-reverse">
          <div className="text-right py-4 flex gap-x-4 gap-y-4 md:items-end md:justify-items-end justify-end flex-col md:flex-row">
            <Button type="default" onClick={handleSave}>
              Save Changes
            </Button>
            <Button type="danger" onClick={handleDiscard}>
              Discard Changes
            </Button>
          </div>
          <Card>
            <div className="-mt-24">
              <div className="flex items-center justify-center">
                <Avatar
                  avatar={
                    (robotId && getAvatar(robotId)) ||
                    "https://avatars.dicebear.com/api/bottts/1.svg"
                  }
                />
              </div>

              <div className="space-y-4 max-w-xl mx-auto">
                <TextField
                  value={name}
                  label="Name"
                  onChange={handleChangeName}
                />
                <TextAreaField
                  value={purpose}
                  label="Purpose"
                  onChange={handleChangePurpose}
                />
              </div>
            </div>
          </Card>
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default Create;
