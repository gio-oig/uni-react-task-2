import PropTypes from 'prop-types';

import './Post.css';
const Post = ({ title, content }) => {
  return (
    <div className="post">
      <div className="post__title">{title}</div>
      <div className="post__content">{content}</div>
    </div>
  );
};

Post.prototype = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
