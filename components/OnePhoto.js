import { Image, Text, View } from 'react-native';
import React, { Component } from 'react';
import {styles} from '../constants/Styles.js'


class OnePhoto extends Component {
	constructor (props){
	super (props)	
	}

	render (){
		const { navigation } = this.props;
		const img = navigation.getParam('img', img);
		const name = navigation.getParam('name', name);

		return (
              < View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'grey' }}>
                  <Image source={img} style={styles.onePhoto}/>
                  <Text style = {{fontSize: 21, marginTop: 15}} >Author: {name}</Text>
              </ View >
			)
	}
}

export {OnePhoto}