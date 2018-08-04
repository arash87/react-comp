import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import injectSheet from 'react-jss/lib/injectSheet'
import {Theming as theming} from '../../utils/themeProvider'

const styles = theme => ({
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        ...theme.button
      },
})

function ButtonJSS(props) {
    return (
      <div>
        <Button>Regular style</Button>
        <Button className={props.classes.button}>react-jss with theme</Button>
      </div>
    );
  }

ButtonJSS.propTypes = {
    classes: PropTypes.object.isRequired
}

export default injectSheet(styles, {theming})(ButtonJSS)