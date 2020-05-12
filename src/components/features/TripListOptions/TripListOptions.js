import React from 'react';
import PropTypes from 'prop-types';
import styles from './TripListOptions.scss';

import {Row, Col} from 'react-flexbox-grid';

class TripListOptions extends React.Component {
  handleTags(tag, checked){
    if(checked) {
      //console.log('Adding tag', tag);
      this.props.addTag(tag);
    } else {
      //console.log('Removing tag', tag);
      this.props.removeTag(tag);
    }
  }

  handleRegions(region, regions, checked){
    if(checked) {
      //console.log(regions[region].countries);
      //console.log('Adding region', region);
      this.props.addRegion({[region]: regions[region].countries});
    } else {
      //console.log('Removing region', region);
      this.props.removeRegion(region);
    }
  }

  handleDuration(type, value){
    //console.log('Changing duration', type, value);
    if (type == 'from') {
      this.props.changeDurationFrom(parseInt(value));
    } else if (type == 'to') {
      this.props.changeDurationTo(parseInt(value));
    }
  }

  handleSearch(phrase){
    this.props.changeSearchPhrase(phrase);
  }

  render(){
    const {regions, tags, filters} = this.props;
    return (
      <div className={styles.component}>
        <Row around="lg">
          <Col lg={3}>
            <div className={styles.filter}>
              <label>
                <input className={`${styles.input} ${styles.search}`} type='text' placeholder='Search...' value={filters.phrase} onChange={event => this.handleSearch(event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={3}>
            <div className={styles.filter}>
              <label>
                Duration from:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.from} min='1' max={filters.duration.to} onChange={event => this.handleDuration('from', event.currentTarget.value)} />
              </label>
              <label>
                to:
                <input className={`${styles.input} ${styles.number}`} type='number' value={filters.duration.to} min={filters.duration.from} max='14' onChange={event => this.handleDuration('to', event.currentTarget.value)} />
              </label>
            </div>
          </Col>
          <Col lg={3}>
            <div className={styles.filter}>
              <details>
                <summary className={styles.toggle}>Filter by tags</summary>
                <div className={styles.dropdown}>
                  {Object.keys(tags).map(tag => (
                    <label key={tag} className={styles.option}>
                      <input type='checkbox' checked={filters.tags.indexOf(tag) > -1} onChange={event => this.handleTags(tag, event.currentTarget.checked)} />
                      {tag}
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </Col>
          <Col lg={3}>
            <div className={styles.filter}>
              <details>
                <summary className={styles.toggle}>Filter by region</summary>
                <div className={styles.dropdown}>
                  {Object.keys(regions).map(region => (
                    <label key={region} className={styles.option}>
                      <input type='checkbox' checked={region in filters.regions} onChange={event => this.handleRegions(region, regions, event.currentTarget.checked)} />
                      {region}
                    </label>
                  ))}
                </div>
              </details>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

TripListOptions.propTypes = {
  tags: PropTypes.object,
  regions: PropTypes.object,
  filters: PropTypes.object,
  changeSearchPhrase: PropTypes.func,
  changeDurationFrom: PropTypes.func,
  changeDurationTo: PropTypes.func,
  addTag: PropTypes.func,
  removeTag: PropTypes.func,
  addRegion: PropTypes.func,
  removeRegion: PropTypes.func,
};

export default TripListOptions;
