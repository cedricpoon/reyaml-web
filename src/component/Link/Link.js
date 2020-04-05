import React from 'react';
import PropTypes from 'prop-types';

import styles from './Link.module.css';

class Link extends React.Component {
  render() {
    return (
      <a className={styles.root} href={this.props.href} rel='noreferrer noopener' target="_blank">
        {this.props.text}
      </a>
    )
  }
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string
};

Link.defaultProps = {};

export default Link;