import {connect} from 'react-redux';
import OrderForm from './OrderForm';

import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';
import {getTripById} from '../../../redux/tripsRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
  trip: id => getTripById(state, id),
});

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
