import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../common/Icon/Icon';

import {formatPrice} from '../../../utils/formatPrice';

import styles from './OrderOption.scss';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div
        className={`${styles.icon} ${currentValue == '' ? (styles.iconActive) : ''}`}
        onClick={() => setOptionValue('')}
      >
        <Icon name='times-circle' />
        none
      </div>
    )}
    {values.map(value => (
      <div
        className={`${styles.icon} ${currentValue == value.id ? (styles.iconActive) : ''}`}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name} {formatPrice(value.price)}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};


export default OrderOptionIcons;
