import {createTheming} from 'react-jss'

//Namespace conflict between JSS and Material-UI, as both libraries use same porvider
// Use createTheming 
// https://stackoverflow.com/questions/47697245/custom-jss-theme-overwrites-material-ui-theme
export const Theming = createTheming('__MY_NAMESPACED_THEME__')