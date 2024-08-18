import React from 'react';
import Calendar from './Calendar';
import menu from '../../assets/images/menu.png';
import search from '../../assets/images/search.png';
import memoji from '../../assets/images/memoji.png';
import discord from '../../assets/images/discord.png';
import instagram from '../../assets/images/instagram.png';
import blog from '../../assets/images/blog.png';
import email from '../../assets/images/email.png';

const Tab = () => {
  return (
    <div className="w-[23%] min-w-[500px] h-screen bg-tab bg-cover bg-center flex flex-col items-center justify-between">
      {/* Top icons */}
      <div className="w-full flex justify-between px-5 py-5">
        <img
          src={menu}
          alt="Menu"
          className="w-8 h-8 cursor-pointer"
          onClick={null} // TODO: Implement menu click event
        />
        <img
          src={search}
          alt="Search"
          className="w-8 h-8 cursor-pointer"
          onClick={null} // TODO: Implement search click event
        />
      </div>

      {/* Title and user info */}
      <div className="w-full flex flex-col items-center">
        <div className="w-[30%] h-[2px] bg-white mb-8"></div>
        <div className="text-white text-4xl font-semibold mb-12">MINSEO’s GITHUB</div>
        <div className="w-[100px] h-[100px] bg-black rounded-full mb-8 flex items-center justify-center">
          <img
            src={memoji}
            alt="Profile"
            className="object-cover w-[80px] h-[80px] transform translate-y-[-8px]"
          />
        </div>
        <div className="text-xl font-medium text-white italic-text">@minseo25</div>
      </div>

      <div className="flex flex-col items-center w-full">
        {/* Calendar component */}
        <Calendar />
        {/* Social icons */}
        <div className="h-lg:w-[70%] w-[60%] flex justify-around py-5">
          <img src={discord} alt="Discord" className="cursor-pointer h-6" onClick={()=>{alert("__yeonyeon")}}/>
          <a href="https://www.instagram.com/ms._.xxv/"><img src={instagram} alt="Instagram" className="h-6"/></a>
          <a href="https://minseosavestheworld.tistory.com/"><img src={blog} alt="Blog" className="h-6" /></a>
          <a href="mailto:ms05251@naver.com"><img src={email} alt="Email" className="h-6" /></a>
        </div>
      </div>

      
    </div>
  );
};

export default Tab;
