import React from 'react';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@example.com',
  },
  {
    id: 3,
    name: 'Bob Smith',
    email: 'bobsmith@example.com',
  },
];

function User() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-2xl font-medium mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-200 font-medium text-left px-4 py-2">
                ID
              </th>
              <th className="border-b-2 border-gray-200 font-medium text-left px-4 py-2">
                Name
              </th>
              <th className="border-b-2 border-gray-200 font-medium text-left px-4 py-2">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border-b border-gray-200 px-4 py-2">{user.id}</td>
                <td className="border-b border-gray-200 px-4 py-2">{user.name}</td>
                <td className="border-b border-gray-200 px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
