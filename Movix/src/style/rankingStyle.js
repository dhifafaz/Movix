import {StyleSheet} from 'react-native';

const rankingPageStyles = StyleSheet.create({
  container: {
    backgroundColor: '#14162F',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '100%',
    // height: '100%',
    flex: 1,
  },
  margin: {
    margin: 20,
  },
  color: {
    color: 'white',
  },
  header: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  headerText: {
    fontSize: 34,
    fontFamily: 'Ubuntu-Bold',
    marginBottom: 30,
  },
  body: {
    width: '100%',
    //height: '90%',
  },
  box: {
    //marginLeft: '3%',
    //marginRight: '3%',
    backgroundColor: '#4A6495',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    marginTop: '15%',
    height: 150,
  },
  imageFrame: {
    width: '20%',
    marginLeft: 10,
    height: '10%',
    backgroundColor: 'white',
    top: '-15%',
  },
  image: {
    //
    width: 100,
    marginLeft: 10,
    height: 170,
    //backgroundColor: 'white',
    top: '-15%',
    //resizeMode: 'stretch',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Ubuntu-Medium',
    // marginTop: 10,
    // marginLeft: 20,
    color: 'white',
  },
  textArea: {
    width: '50%',
    marginLeft: 10,
  },
  rating: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Icon: {
    fontSize: 16,
    color: '#F8B911',
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 5,
    color: 'white',
  },
  genre: {
    fontSize: 12,
    fontFamily: 'Ubuntu-Medium',
    marginTop: 5,
    color: 'white',
  },
  durasi: {
    fontSize: 12,
    fontFamily: 'Ubuntu-Medium',
    marginTop: 5,
    color: 'white',
  },
  peringkat: {
    width: '10%',
    top: '-9%',
    alignItems: 'center',

    //justifyContent: 'center'
  },
  borderView: {
    width: '20%',
  },
  IconTrophy: {
    fontSize: 32,
    color: '#F8B911',
  },
  peringkatText: {
    fontSize: 12,
    color: 'white',
    top: '-22%',
    fontFamily: 'Ubuntu-Bold',
  },
});

export default rankingPageStyles;
