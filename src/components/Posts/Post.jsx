import React from 'react';
import close_detail from '../../assets/images/close_detail.png';
import show_detail from '../../assets/images/show_detail.png';

const Post = ({ post, showDetails, onToggleDetails }) => {
  return (
    <div className="h-lg:h-24 h-20 flex justify-between items-center">
      <h3 className="text-3xl font-medium pl-7">{post.title}</h3>
      <img
        src={showDetails ? close_detail : show_detail}
        alt={showDetails ? 'Close Details' : 'Show Details'}
        className="cursor-pointer w-5 h-5 mr-7"
        onClick={onToggleDetails}
      />
    </div>
  );
};

export default Post;
