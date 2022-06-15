import React from 'react';

const Test = () => {
  const iframePart = () => {
    return {
      __html: '<iframe src="./Post.html" width="500px" height="100%"></iframe>',
    };
  };

    return (
      <div
      style={{ margin: 'auto', position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}
      dangerouslySetInnerHTML={iframePart()}
    />
    );
};

export default Test;