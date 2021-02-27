import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Goto from '../components/goto'
import Data from '../components/data'
import Links from '../components/links'
import Header from '../components/header'
import Page from '../components/page'
import Films from '../components/films'
import Planets from '../components/planets'
import Starships from '../components/starships'
import Vehicles from '../components/vehicles'
import Species from '../components/species'
import People from '../components/people'
import Main from '../components/main'

import App from './__mocks__/mockApp'

configure({ adapter: new Adapter() });

let app = {
    state:{
            location: '/test'
    },
    setLocation:
        (l) => {app.state.location = l}
}

const links = [
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
]

describe('base test suite', () => {

    it('test that jest works', () => {
        expect(true).toBe(true)
    })

    it('test goto component', () => {
        const component = mount(<Goto l='/test' n='Test' App={app} />)
        expect(component.html()).toMatch('Test')
    })

    it('test goto component snapshot', () => {
        const component = mount(<Goto l='/test' n='Test' App={app} />)
        expect(component).toMatchSnapshot()
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
            links={links}
            App={app} />)
        expect(component.html()).toMatch('Luke Skywalker')
        expect(component.html()).toMatch('Tatooine')
        expect(component.html()).toMatch('The Empire Strikes Back')
    })

    it('test links component snapshot', () => {
        const component = mount(<Links
            links={links}
            App={app} />)
        expect(component).toMatchSnapshot()
    })

    it('test links incorrect component snapshot', () => {
        const component = mount(<Links
            links={[{l:
                ["http://swapi.dev/api/films/0/"
            ],
            n: "Test links"}]}
            App={app} />)
        expect(component).toMatchSnapshot()
    })

    it('test links component zero length', () => {
        const component = mount(<Links
            links={[{l:[], n: "Test links"}]}
            App={app} />)
        expect(component).toMatchSnapshot()
    })

    it('test header component', () => {
        const component = mount(<Header App={app} />)
        expect(component).toMatchSnapshot();
    })

    it('test page component correct film', () => {
        app.setLocation('/films/1')
        const component = mount(<Page
            resource='films'
            maxCount={7}
            data={[
                {k: 'Title', v: 'title'},
                {k: 'Episode', v: 'episode_id'},
                {k: 'Opening crawl', v: 'opening_crawl'},
                {k: 'Release date', v: 'release_date'},
                {k: 'Producer', v: 'producer'}
            ]}
            links={[
                {l: 'species', n: 'Species'},
                {l: 'vehicles', n: 'Vehicles'},
                {l: 'starships', n: 'Starships'},
                {l: 'characters', n: 'Characters'},
                {l: 'planets', n: 'Planets'}
            ]}
            App={app} />)
        app.setLocation('/test')
        expect(component).toMatchSnapshot();
    })

    it('test page component incorrect', () => {
        app.setLocation('/test/10')
        const component = mount(<Page
            resource='films'
            maxCount={7}
            data={[
                {k: 'Test', v: 'test'}
            ]}
            links={[
                {l: 'Test', n: 'test'}
            ]}
            App={app} />)
        app.setLocation('/test')
        expect(component).toMatchSnapshot();
    })

    it('test films component', () => {
        const component = mount(<Films App={app} />)
        expect(component).toMatchSnapshot();
    })

    it('test people component', () => {
        const component = mount(<People App={app} />)
        expect(component).toMatchSnapshot();
    })

    it('test planets component', () => {
        const component = mount(<Planets App={app} />)
        expect(component).toMatchSnapshot();
    })

    it('test species component', () => {
        const component = mount(<Species App={app} />)
        expect(component).toMatchSnapshot();
    })

    it('test starships component', () => {
        const component = mount(<Starships App={app} />)
        expect(component).toMatchSnapshot();
    })

    it('test vehicles component', () => {
        const component = mount(<Vehicles App={app} />)
        expect(component).toMatchSnapshot();
    })

    it('test main component', () => {
        const component = mount(<Main App={app} />)
        expect(component).toMatchSnapshot();
    })

})