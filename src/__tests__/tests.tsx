import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Goto from '../components/goto'
import Data from '../components/data'
import Links from '../components/links'
import Header from '../components/header'

import App from './__mocks__/mockApp'

configure({ adapter: new Adapter() });

let app = {
    state:{
            location: '/test'
    },
    setLocation:
        (l) => {app.state.location = l}
}

describe('simple test', () => {
    it('test that jest works', () => {
        expect(true).toBe(true);
    })

    it('test goto component', () => {
        const component = mount(<Goto l='/test' n='Test' App={app} />)
        expect(component.html()).toMatch('Test');
    })

    it('test data component', () => {
        const component = mount(<Data 
            data={[
                {k: "Test name 1", v: "Test value 1"},
                {k: "Test name 두 ពីរ ਦੋ ສອງ 雙", v: "Test value 두 ពីរ ਦੋ ສອງ 雙"},
                {k: "Test name три tři trīs þrír üç", v: "Test value три tři trīs þrír üç"},
                {k: "Test name 4⃣ :four:", v: "Test value 4⃣ :four:"}
            ]} 
            App={app} />)
        expect(component).toMatchSnapshot()
    })

    it('test links component', () => {
        const component = mount(<Links
            links={[
                {l:
                    ["http://swapi.dev/api/people/1/",
                    "http://swapi.dev/api/people/2/",
                    "http://swapi.dev/api/people/3/",
                ],
                n: "Test people"},
                {l:
                    ["http://swapi.dev/api/planets/1/",
                    "http://swapi.dev/api/planets/2/",
                    "http://swapi.dev/api/planets/3/",
                ],
                n: "Test planets"},
                {l:
                    ["http://swapi.dev/api/films/1/",
                    "http://swapi.dev/api/films/2/",
                    "http://swapi.dev/api/films/3/",
                ],
                n: "Test films"}
            ]}
            App={app} />)
        expect(component.html()).toMatch('Luke Skywalker');
        expect(component.html()).toMatch('Tatooine');
        expect(component.html()).toMatch('The Empire Strikes Back');
    })

    it('test header component', () => {
        const component = mount(<Header App={app} />)
        expect(component).toMatchSnapshot();
    })

})