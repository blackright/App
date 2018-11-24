import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Home from './components/home'

var styles = StyleSheet.create({
    overlay: {
      opacity: 10,
      position: 'absolute',
      alignItems: 'center',
      flex: 1,
      top: 100,
      left: 100
    },
    logo: {
      width: 110,
      height: 110,
      bottom: 20
      //top: 120,
      //left: 120
    }
});

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {password:'', username: ''}
}

Press(){
    console.log(this.state.username)
    console.log(this.state.password)
    this.props.navigation.navigate('Home', {name:this.state.username})
  }
  static navigationOptions={header:null}
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#00000f'}}>
        <View style={styles.overlay}>
          <Image style={styles.logo} source={require('./img/pickme-logo.png')}/>
          <TextInput
            style={{height: 55, width: 220, paddingLeft: 40, color:'#FDC127',borderBottomWidth: 2, borderBottomColor: '#FDC127',}}
            placeholder=" Enter Your Username"
            placeholderTextColor='#FDC127'
            onChangeText={(text) => this.setState({username:text})} />

            <TextInput
              style={{height: 55, width: 220, paddingLeft: 40, color:'#FDC127', borderBottomWidth: 2, borderBottomColor: '#FDC127',}}
              placeholder=" Enter Your Password"
              placeholderTextColor='#FDC127'
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password:text})} />

            <TouchableOpacity
              style={{borderWidth: 1, borderRadius: 5, borderColor: '#FDC127', top: 15, padding: 12}}
              onPress={() => this.Press()}
              >
              <Text style={{color: '#FDC127', fontSize: 15}}>Login</Text>
            </TouchableOpacity>

        </View>
      </View>
    );
  }
}

var App=createStackNavigator({
  Login:Login,
  Home:Home
})

export default App
