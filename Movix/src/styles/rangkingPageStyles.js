import {StyleSheet} from 'react-native';

const rangkingPageStyles = StyleSheet.create({
  container: {
    backgroundColor: '#14162F',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
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
  },
  body: {
    width: '100%',
    height: '90%',
  },
  box: {
    marginLeft: '3%',
    marginRight: '3%',
    backgroundColor: '#4A6495',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    marginTop: '15%',
  },
  imageFrame: {
    width: '20%',
    marginLeft: 10,
    height: '150%',
    backgroundColor: 'white',
    top: '-15%',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Ubuntu-Medium',
    marginTop: 10,
    marginLeft: 20,
    color: 'white',
  },
  textArea: {
    width: '60%',
    marginLeft: 20,
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
    width: '20%',
    top: '-5%',
    alignItems: 'center',
  },
  IconTrophy: {
    fontSize: 40,
    color: '#F8B911',
  },
  peringkatText: {
    fontSize: 20,
    color: 'white',
    top: '-40%',
    fontFamily: 'Ubuntu-Bold',
  },
});

export default rangkingPageStyles;
