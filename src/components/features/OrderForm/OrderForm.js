import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';

import Button from '../../common/Button/Button';

import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const sendOrder = (options, trip) => {

  const totalCost = formatPrice(calculateTotal(trip.cost, options));

  const payload = {
    tripName: trip.name,
    tripId: trip.id,
    countryCode: trip.country.code,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  if (options.name && options.contact) {
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      }).catch(() => {
        alert('Error while fetching data');
      });
  } else {
    alert('Please make sure you enter your name and contact info.');
  }
};

const OrderForm = ({options, setOrderOption, trip}) => {
  return (
    <Row>
      {pricing.map((option) => (
        <Col key={option.id} md={4}>
          <OrderOption key={option.id} {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={trip.cost} options={options} />
        <Button onClick={() => sendOrder(options, trip)}>Order now!</Button>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  trip: PropTypes.object,
};

export default OrderForm;
