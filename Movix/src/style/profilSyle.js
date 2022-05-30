import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2046',
    flex: 1,
  },
  header: {
    marginTop: '10%',
    marginBottom: '20%',
  },
  picture: {
    width: 150,
    height: 150,
    marginTop: 10,
    borderRadius: 150 / 2,
    alignSelf: 'center',
    allignItems: 'center',
  },
  nameText: {
    fontFamily: 'Ubuntu',
    color: 'white',
    fontSize: 28,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  firstTab: {
    width: 345,
    height: 50,
    backgroundColor: '#4A6495',
    alignSelf: 'center',
    marginTop: '3%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  subJud: {
    fontFamily: 'Ubuntu',
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 5,
    fontWeight: '500',
  },
  secondTab: {
    width: 345,
    height: 50,
    backgroundColor: '#4A6495',
    alignSelf: 'center',
    marginTop: '3%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  thirdTab: {
    width: 300,
    height: 50,
    backgroundColor: '#4A6495',
    alignSelf: 'center',
    marginTop: '3%',
    borderRadius: 10,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignContent: 'center'
  },
  logout: {
    width: 345,
    height: 50,
    backgroundColor: '#963333',
    alignSelf: 'center',
    marginTop: 45,
    borderRadius: 10,
    alignContent: 'center',
  },
  logoutText: {
    fontFamily: 'Ubuntu',
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    fontWeight: '500',
    alignSelf: 'center',
  },
});

export default styles;
