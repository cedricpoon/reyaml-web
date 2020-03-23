import { toast as _toast } from 'react-toastify';

import styles from './toast.module.css';

export default msg => {
  _toast.info(`> ${msg}`, {
    position: _toast.POSITION.BOTTOM_RIGHT,
    className: styles.card
  });
}