import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Login from '../Screens/Login.js'
import List from '../Screens/List.js'
import Book from '../Screens/Book.js'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book
    })
)

export default Routes