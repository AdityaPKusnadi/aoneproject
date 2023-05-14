import React from 'react';

function Header(props) {
  const { activeMenu } = props;

  let title = "";
  if (activeMenu === "about") {
    title = "About";
  } else if (activeMenu === "user") {
    title = "User";
  }

  return (
    <header className="ml-auto w-4/5 flex items-center justify-between px-6 py-4 bg-[#f7f8fc] border-b border-[#f7f8fc]">
      <h1 className="text-[24px] font-medium">{title}</h1>
      <div className="flex items-center space-x-4">
      <p className="text-[#252732] font-medium">
        John Doe
      </p>
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
        className="h-12 w-12 rounded-full border-2 border-[#dfe0ea] p-1"
      />
    </div>


    </header>
  );
}

export default Header;
