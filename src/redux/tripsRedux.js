/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  if(filters.duration){
    output = output.filter(trip => filters.duration.from <= trip.days && trip.days <= filters.duration.to);
  }

  if(filters.tags){
    output = output.filter(trip => filters.tags.every(tag => trip.tags.includes(tag)));
  }

  // TODO - sort by cost descending (most expensive goes first)
  // TODO - filter by region

  if(filters.regions){
    let list = false;
    Object.keys(filters.regions).forEach(key => list ? list.push(...filters.regions[key]) : list = [...filters.regions[key]]);
    output = output.filter(trip => list ? list.includes(trip.country.code) : true);

    /*let list = [];
    for (let region in filters.regions) {
      list.push(...filters.regions[region]);
    }
    if (list != []){
      output = output.filter(trip => list.includes(trip.country.code));
    }*/
    for(let i = 0; i <= 26; i++){
      //console.log(Object.keys(filters.regions).filter(key => filters.regions[key].includes(output[i].country.code)));
    }
    /*output = output.filter(trip => {
      console.log('Trip: ', trip);
      console.log(Object.keys(filters.regions).filter(key => (filters.regions[key].includes(trip.country.code))));
      return (Object.keys(filters.regions).filter(key => {
        console.log('Key: ', key);
        console.log(filters.regions[key].includes(trip.country.code));
        return (filters.regions[key].includes(trip.country.code));
      }));
    });*/
  }



  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);

  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;

  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
