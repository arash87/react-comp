import React from 'react'
import ProTypes from 'prop-types'

const Navigation = ({components}) => {
    return (
        <ul className="navigation">
            {
             components.map( name => {
                 return(
                     <li key={name}>
                        <a href={`#${name}`}>{name}</a>
                    </li>
                 )
             })   
            }
        </ul>
    )
}

Navigation.propTypes = {
    components: ProTypes.array.isRequired
}

export default Navigation