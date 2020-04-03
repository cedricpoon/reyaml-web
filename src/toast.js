import { toast as _toast } from 'react-toastify';

import styles from './toast.module.css';

export default (msg, args = {}) => {
  _toast.info(
    !args.noPrefix ? `> ${msg}` : msg,
    {
      position: _toast.POSITION.BOTTOM_RIGHT,
      className: !args.persisted ? styles.card : styles.darkCard,
      autoClose: !args.persisted
    }
  );
}