import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ count }) => (
    <div>
        Осталось выполнить {count} дел(а).
    </div>
);

Footer.defaultProps = {
    count: 0
};

export default Footer;