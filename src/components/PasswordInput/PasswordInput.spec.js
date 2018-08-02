import React from 'react'
import renderer from 'react-test-renderer'
import PasswordInput from './PasswordInput'
import {shallow} from 'enzyme'

test('hides password quality by default', () => {
    const tree = renderer.create(<PasswordInput 
        htmlId="test"
        name="test"
        onChange={() => {}}
        value="blabla" />).toJSON()
    
    expect(tree).toMatchSnapshot()
})

test('toggles input type when show/hide password clicked', () => {
    const wrapper = shallow(<PasswordInput 
        htmlId="test"
        name="test"
        value=""
        onChange={() => {}}
        showVisibilityToggle
        />
    )

    // Enzyme uses in-memory DOM here
    // Passwordinput should have a type of password initially  
    expect(wrapper.find({type: 'password'})).toHaveLength(1)
    expect(wrapper.find({type: 'text'})).toHaveLength(0)

    wrapper.find('a').simulate('click')
    
    expect(wrapper.find({type: 'password'})).toHaveLength(0)
    expect(wrapper.find({type: 'text'})).toHaveLength(1)

})