import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const id = 'id';
    const correctLink = `/trip/${id}`;

    const component = shallow(<TripSummary id={id} tags={[]} />);
    expect(component.find('Link').prop('to')).toEqual(correctLink);
  });

  it('should render correct image', () => {
    const correctImage = 'image.jpg';
    const correctName = 'name';

    const component = shallow(<TripSummary id='id' image={correctImage} name={correctName} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(correctImage);
    expect(component.find('img').prop('alt')).toEqual(correctName);
  });

  it('should render correct name, cost, days', () => {
    const correctName = 'name';
    const correctCost = 'cost';
    const correctDays = 1;

    const component = shallow(<TripSummary name={correctName} cost={correctCost} days={correctDays} />);
    expect(component.find('.title').text()).toEqual(correctName);
    expect(component.find('.details').find('span').at(0).text()).toEqual(`${correctDays} days`);
    expect(component.find('.details').find('span').at(1).text()).toEqual(`from ${correctCost}`);
  });

  it('should render tags', () => {
    const correctId = 'id';
    const correctImage = 'image.jpg';
    const correctName = 'name';
    const correctCost = 'cost';
    const correctDays = 1;
    const correctTags = ['one', 'two', 'three'];

    const component = shallow(<TripSummary id={correctId} image={correctImage} name={correctName} cost={correctCost} days={correctDays} tags={correctTags} />);

    for (let i = 0; i < correctTags.length ; i++) {
      expect(component.find('.tag').at(i).text()).toEqual(correctTags[i]);
    }

  });

  it('should render without an error', () => {
    const props = {
      id: 'id',
      image: 'image.jpg',
      name: 'name',
      cost: 'cost',
      days: 1,
      tags: [],
    };

    const component = shallow(
      <div>
        <TripSummary id={props.id} image={props.image} name={props.name} cost={props.cost} days={props.days} tags={props.tags} />
      </div>
    );

    expect(component.find(TripSummary).prop('id')).toEqual(props.id);
    expect(component.find(TripSummary).prop('image')).toEqual(props.image);
    expect(component.find(TripSummary).prop('name')).toEqual(props.name);
    expect(component.find(TripSummary).prop('cost')).toEqual(props.cost);
    expect(component.find(TripSummary).prop('days')).toEqual(props.days);


  });

  it('should not render div for tags', () => {
    const correctId = 'id';
    const correctImage = 'image.jpg';
    const correctName = 'name';
    const correctCost = 'cost';
    const correctDays = 1;
    const correctTags = [];

    const component = shallow(<TripSummary id={correctId} image={correctImage} name={correctName} cost={correctCost} days={correctDays} tags={correctTags} />);

    expect(component.find('.tags')).toMatchObject({});
  });
});
