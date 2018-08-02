import React from 'react';
import TextInput from 'react-comp-arash/TextInput'

/** Error TextInput */
export default class ExampleError extends React.Component{
    render(){
        return(
            <TextInput
                htmlId="example-optional"
                label="First Name"
                name="firstname"
                onChange={() => {}}
                required
                error="first name is required"
            />

        )
    }
}