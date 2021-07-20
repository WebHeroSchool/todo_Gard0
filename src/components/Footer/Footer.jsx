import React from 'react';

const Footer = ({ count }) => (
    <div>
        Осталось выполнить {count} дел(а).
    </div>
);

Footer.defaultProps = {
    count: 0
};

export default Footer;