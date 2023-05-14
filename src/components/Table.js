import React, { useState } from "react";

function Table({ data, pageSize = 4 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / pageSize);

  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
    <table className="w-full whitespace-nowrap]">
          <thead>
            <tr>
              <th className="border-b-2 border-[#DFE0EB] font-medium text-left pr-4 pl-[115px] py-2 text-[#9FA2B4]">
                Name
              </th>
              <th className="border-b-2 border-[#DFE0EB] font-medium text-left px-4 py-2 text-[#9FA2B4]">
                Email
              </th>
              <th className="border-b-2 border-[#DFE0EB] font-medium text-left px-4 py-2 text-[#9FA2B4]"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((user) => (
              <tr key={user.id}>
                <td className="border-b border-[#DFE0EB] py-[36px]">
                  <div className="flex items-center">
                    <img
                      src={user.image}
                      alt={`Avatar for ${user.name}`}
                      className="rounded-full ml-[32px] mr-[36px]"
                      width="44"
                      height="44"
                    />
                    <span className="text-base">{user.name}</span>
                  </div>
                </td>
                <td className="border-b border-[#DFE0EB] py-[36px]">
                  {user.email}
                </td>
                <td className="border-b border-[#DFE0EB] py-[36px]">
                  <div className="w-[116px] h-[40px] rounded-full bg-[#65A7DB] flex justify-center items-center">
                    <button className="text-white font-medium">
                      VIEW DETAIL
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="flex mt-8 justify-between items-center">
          <div class="text-sm text-[#9FA2B4]"></div>
          <div class="flex text-[#9FA2B4]">
          {`Showing ${Math.min(
          (currentPage - 1) * pageSize + 1,
          data.length
        )}-${Math.min(currentPage * pageSize, data.length)} of ${
          data.length
        }`}
            <button onClick={prevPage} disabled={currentPage === 1} class="px-3 py-1bg-white hover:bg-gray-100 ml-[33px] mr-[30px]">
              &lt;
            </button>
            <button onClick={nextPage} disabled={currentPage === maxPage} class="px-3 py-1bg-whiteusers.map((user) => hover:bg-gray-100 mr-[41px]">
              &gt;
            </button>
          </div>
        </div>
        </>
  );
};

export default Table;