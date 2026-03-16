import React from 'react';

const BasicBadge = ({ content, color = 'blue', children }) => {
  const badgeStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold'
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      {children}
      <span style={badgeStyle}>{content}</span>
    </div>
  );
};

export default BasicBadge;
