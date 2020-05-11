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

const sendOrder = (options, tripCost, trip) => {
  console.log(trip);

  const totalCost = formatPrice(calculateTotal(tripCost, options));

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

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const tripId = window.location.href.split('/').pop();

const OrderForm = ({tripCost, options, setOrderOption, trip}) => {
  return (
    <Row>
      {pricing.map((option) => (
        <Col key={option.id} md={4}>
          <OrderOption key={option.id} {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options} />
        <Button onClick={() => sendOrder(options, tripCost, trip(tripId))}>Order now!</Button>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  trip: PropTypes.func,
};

export default OrderForm;
