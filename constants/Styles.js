import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imgs: {
    display: 'flex',
  },
  txt: {
    margin: 5,
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    width: 110,
    height: 110,
    margin: 5
  },
  onePhotos: {
    flex: 1,
    //flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onePhoto: {
    width: 300,
    height: 300,
  }
})

export {styles}
