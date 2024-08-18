import React, { useState } from 'react';
import Post from './Post';
import Detail from './Detail';
import post1 from '../../data/post1';
import post2 from '../../data/post2';
import post3 from '../../data/post3';

const Posts = () => {
  const [detailsVisibility, setDetailsVisibility] = useState([false, false, false]);

  const posts = [
    { id: 1, title: '[1] About Me', content: post1 },
    { id: 2, title: '[2] Activities', content: post2 },
    { id: 3, title: '[3] goorum', content: post3 },
  ];

  const toggleDetails = (index) => {
    const updatedVisibility = [...detailsVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setDetailsVisibility(updatedVisibility);
  };

  return (
    <div className="flex-1 px-24 pt-16 overflow-auto h-full">
      <h2 className="text-xl font-semibold mb-4 pl-2">전체 글 (3)</h2>
      <div className="w-full h-[2px] bg-gray-400 my-2"></div> {/* Divider */}
      {posts.map((post, index) => (
        <div key={post.id}>
          <Post
            post={post}
            showDetails={detailsVisibility[index]}
            onToggleDetails={() => toggleDetails(index)}
          />
          {detailsVisibility[index] && <Detail />}
          <div className="w-full h-[2px] bg-gray-400 my-2"></div> {/* Divider */}
        </div>
      ))}
    </div>
  );
};

export default Posts;
