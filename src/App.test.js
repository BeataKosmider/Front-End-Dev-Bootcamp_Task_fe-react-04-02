import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('List tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Poprawnie wyświetla button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('Domyślnie nie wyświetla paragrafu', () => {
    expect(wrapper.find('p').props().className).toBe('hidden');
    expect(wrapper.find('p').props().className).not.toBe('displayed');
  });

  it('Po kliknięciu w button wyświetla paragraf z odpowienim hasłem', () => {
    wrapper.find('button').simulate('click');

    expect(wrapper.find('p').props().className).toBe('displayed');
    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('p').text()).toBe('A kuku!');
  });

  it('Po ponownym kliknięciu w button ukrywa paragraf', () => {
    // show
    wrapper.find('button').simulate('click');

    // hide
    wrapper.find('button').simulate('click');

    expect(wrapper.find('p').props().className).not.toBe('displayed');
    expect(wrapper.find('p').props().className).toBe('hidden');
  });
});
