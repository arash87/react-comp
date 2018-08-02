import React from 'react';
import TextInputCSSModules from 'react-comp-arash/TextInputCSSModules'

/** !!! Need to turn on CSS-Modules in Webpack for this to work !!!! */
export default class ExampleError extends React.Component{
    render(){
        return(
            <TextInputCSSModules
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