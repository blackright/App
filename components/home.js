import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

const token="pk.eyJ1IjoiamFzb25va29rYSIsImEiOiJjam92ZjY2cXUxaGY0M3FrZm02MzZtOTBuIn0.YCyv6rqxei4hO2gqnMP51g"

Mapbox.setAccessToken(token)

export default class Home extends Component {
  constructor(props){
    super(props)
  }
  renderpointer(){
    return (
      <Mapbox.PointAnnotation
        key='p'
        id='p'
        coordinate={[32.577126, 0.320307]}>
          <View style={styles.annotationContainer}>
            <View style={styles.annotationFill}>
            </View>
          </View>
          <Mapbox.Callout title={this.props.navigation.getParam('name', 'Did not find it')} />
        </Mapbox.PointAnnotation>
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Street}
          zoomLevel={12}
          centerCoordinate={[32.577126, 0.320307]}
          style={styles.container}
          showUserLocation={true}>
          {this.renderpointer()}
        </Mapbox.MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
   width: 30,
   height: 30,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'white',
   borderRadius: 15,
 },
 annotationFill: {
   width: 30,
   height: 30,
   borderRadius: 15,
   backgroundColor: 'orange',
   transform: [{ scale: 0.6 }],
 }
});
