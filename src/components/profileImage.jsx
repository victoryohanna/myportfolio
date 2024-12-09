import React from 'react'
import profile from "../assets/images/victor.jpg"

export default function ProfileImage() {
  return (
    <img src={profile} alt="" className="h-[8rem] w-[8rem] rounded-full" />
  );
}
