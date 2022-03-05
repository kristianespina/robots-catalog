import React from "react";
import MainLayout from "../layouts/MainLayout";
import MainContainer from "../components/Containers/MainContainer";
import Button from "../components/Buttons/Button";
import MainHeader from "../components/Headers/MainHeader";
import BotList from "../components/Bots/BotList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MainLayout>
      <MainHeader>
        <MainContainer>
          <Link to="/create">
            <Button type="primary">Create Robot</Button>
          </Link>
        </MainContainer>
      </MainHeader>
      <MainContainer>
        <div className="mb-8">{/* spacer */}</div>
        <BotList />
      </MainContainer>
    </MainLayout>
  );
};

export default Home;
