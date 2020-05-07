import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllRegions} from '../../../redux/regionsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationFrom, changeDurationTo, addTag, removeTag, addRegion, removeRegion} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  regions: getAllRegions(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDurationFrom: (value) => dispatch(changeDurationFrom(value)),
  changeDurationTo: (value) => dispatch(changeDurationTo(value)),
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
  addRegion: region => dispatch(addRegion(region)),
  removeRegion: region => dispatch(removeRegion(region)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
