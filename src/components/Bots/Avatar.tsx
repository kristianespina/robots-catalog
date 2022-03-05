import React from "react";

interface IAvatar {
  avatar: string;
}

const Avatar = ({ avatar }: IAvatar) => {
  return (
    <img src={avatar} className="w-24 h-24 md:w-36 md:h-36" alt="avatar" />
  );
};

export default Avatar;
