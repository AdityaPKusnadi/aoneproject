import React from "react";
import Table from "./Table";

const users = [
  {
  id: 1,
  name: "Lila James",
  email: "lilajames@example.com",
  image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
  id: 2,
  name: "Oliver Stone",
  email: "oliverstone@example.com",
  image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
  id: 3,
  name: "Ava Clark",
  email: "avaclark@example.com",
  image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
  id: 4,
  name: "Ethan Wood",
  email: "ethanwood@example.com",
  image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
  id: 5,
  name: "Ella Green",
  email: "ellagreen@example.com",
  image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
  id: 6,
  name: "William King",
  email: "williamking@example.com",
  image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
  id: 7,
  name: "Sophie Baker",
  email: "sophiebaker@example.com",
  image: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
  id: 8,
  name: "Lucas White",
  email: "lucaswhite@example.com",
  image: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
  id: 9,
  name: "Chloe Garcia",
  email: "chloegarcia@example.com",
  image: "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
  id: 10,
  name: "Daniel Lee",
  email: "daniellee@example.com",
  image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  ];

function User() {
  return (
    <div className="flex flex-col ml-auto w-4/5 bg-[#f7f8fc]">
      <div className="overflow-x-auto bg-white border-b border-t border-l border-r rounded-[8px] border-[#d2d3dd] h-full mb-[124px] ml-[30px] mr-[33px]">
        <h2 className="text-2xl font-medium mt-[32px] ml-[32px] mb-4">
          All users
        </h2>
        <Table data={users} pageSize={4} />
      </div>
    </div>
  );
}
export default User;
