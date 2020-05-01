import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';

import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const OrderSummary = ({tripCost, options}) => (
  <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong></h2>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
