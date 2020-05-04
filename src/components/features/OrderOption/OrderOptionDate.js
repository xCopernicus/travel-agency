import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = ({currentValue, setOptionValue}) => {

  return (
    <DatePicker
      dateFormat='dd/MM/yyyy'
      selected={currentValue}
      onChange={(date) => setOptionValue(date)}
    />
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.date,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
