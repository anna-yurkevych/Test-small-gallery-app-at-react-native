import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import {styles} from '../constants/Styles.js'

import {Provider, connect} from 'react-redux';
import thunk from 'redux-thunk';

import {store, mapStateToProps} from '../redux/Redux.js'
import {actionPhotos} from '../redux/Actions.js'




class MainGalleryNoConnect extends Component {
  constructor (props){
   super (props)
      onPress = (img, name, bio) => {
      	return this.props.navigation.navigate('Photo', { img, name, bio})
      }
     }

 componentDidMount (){
 	store.dispatch(actionPhotos())
  }

  render() {
        
    return (
      < ScrollView style={ styles.imgs }>
        {
          this.props.allPhotosArr.map(function (item, index, arr) {
            return (
                    <View style={styles.txt} key = {index}>
                      <TouchableOpacity activeOpacity = { .5 } onPress={() => onPress(item.pic, item.user.name )}>
                        <Image source={item.pic} style={styles.img} />
                      </TouchableOpacity>
                        <View style={{flex: 1, display: 'block'}}>
                            <Text>Author: {item.user.name}</Text >
                            <Text style={{color: 'green'}}>Bio: {item.user.bio}</Text >
                        </View>
                    </View>
                    )
          })
        }
        
      </ ScrollView>
    );
  }
}//

let MainGallery = connect (mapStateToProps)(MainGalleryNoConnect)

export {MainGallery}