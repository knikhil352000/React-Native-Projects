import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './main/Feed'
const Tab = createBottomTabNavigator();
const Main = ({ fetchUser, currentUser }) => {
    React.useEffect(() => {
        fetchUser();
    })
    // console.log(currentUser);
    return (
        <Tab.Navigator>
            <Tab.Screen name='Feed' component={Feed}/>
            {/* <Tab.Screen name='Settings' component={SettingsScreen} /> */}
        </Tab.Navigator>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main)
