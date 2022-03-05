import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import MainContainer from "../components/Containers/MainContainer";
import Button from "../components/Buttons/Button";
import MainHeader from "../components/Headers/MainHeader";
import Card from "../components/Cards/Card";
import Avatar from "../components/Bots/Avatar";
import { useNavigate, useParams } from "react-router-dom";
import { deleteRobotById, getRobotById, Robot } from "../services/api/robots";
import { getAvatar } from "../utils/avatar";

const View = () => {
  const { id } = useParams();
  const [robot, setRobot] = useState<Robot>();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    if (id) deleteRobotById(id);
    navigate(`/`);
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (id) {
      const response = getRobotById(id);
      if (response) setRobot(response);
    }
  }, [id]);

  return (
    <MainLayout>
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
            <Button type="default" onClick={handleEdit}>
              Edit Details
            </Button>
            <Button type="danger" onClick={handleDelete}>
              Delete Bot
            </Button>
          </div>
          <Card>
            <div className="-mt-24">
              <div className="flex items-center justify-center">
                <Avatar avatar={(id && getAvatar(id)) || ""} />
              </div>
              <p className="text-lg font-bold mb-2">{robot?.name}</p>
              <p className="text-md font-medium text-gray-500 leading-normal">
                {robot?.purpose}
              </p>
            </div>
          </Card>
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default View;
