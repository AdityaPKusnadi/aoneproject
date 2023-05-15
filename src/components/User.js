import React, { useState, useEffect } from "react";
import Table from "./Table";
function User() {
  const [users, setUsers] = useState([]);
  const apiUrl = 'https://apk-project.my.id/aonebackend/users/';

  useEffect(() => {
    // Mengambil data dari API menggunakan fetch
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Mengganti state users dengan data dari API
        setUsers(data.data.users);
      })
      .catch(error => console.error(error));
  }, []);
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
