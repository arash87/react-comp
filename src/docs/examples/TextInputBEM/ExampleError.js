import React from 'react';
import TextInputBEM from 'react-comp-arash/TextInputBEM'

/** Error TextInput */
export default class ExampleError extends React.Component{
    render(){
        return(
            <TextInputBEM
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