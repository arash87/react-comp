import React from 'react';
import TextInputStyleComponents  from 'react-comp-arash/TextInputStyledComponents'

/** Error TextInput */
export default class ExampleError extends React.Component{
    render(){
        return(
            <TextInputStyleComponents
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