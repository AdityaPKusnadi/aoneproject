import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://apk-project.my.id/aonebackend/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data.users[0]))
      .catch((error) => console.error(error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col ml-auto w-4/5 bg-[#f7f8fc]">
      <div className="overflow-x-auto bg-white border-b border-t border-l border-r border-[#DFE0EB] w-[559px] h-[406px] ml-[30px] mt-[58px] mb-[36px]">
  <h2 className="text-2xl mt-[32px] ml-[32px] mb-4 mb-[27px]">
    {user.first_name} {user.last_name}
  </h2>
  <div className="flex ml-[32px]">
  <div className="w-[242px] h-[242px] rounded-[8px]">
  <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
</div>

    <div className="ml-[45px]">
      <div className="mb-[10px]">
        <span className="font-medium mr-[10px] text-[#252733]">First Name</span>
      </div>
      <div className="mb-[38px] text-[#828282]">
        <span>{user.first_name}</span>
      </div>
      <div className="mb-[10px]">
        <span className="font-medium mr-[10px] text-[#252733]">Last Name</span>
      </div>
      <div className="mb-[38px] text-[#828282]">
        <span>{user.last_name}</span>
      </div>
      <div className="mb-[10px]">
        <span className="font-medium mr-[10px] text-[#252733]">Email</span>
      </div>
      <div className="text-[#828282]">
        <span>{user.email}</span>
      </div>
    </div>
  </div>
</div>

        {/* button */}
        <div className="w-[116px] h-[40px] rounded-full bg-[#65A7DB] flex justify-center items-center ml-[31px]">
          <Link to="/user">
            <button className="text-white font-medium">BACK</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Detail;
