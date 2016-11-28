import React, { Component } from 'react';
import Button from 'apsl-react-native-button'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MyView from '../MyView'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
});


import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class GoogleSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  render() {
    if (!this.state.user) {
      return (
        <View style={styles.container}>
            <Button style={{width: 100, alignSelf: 'center'}} onPress={this._signIn.bind(this)}> 
                Login 
            </Button>
        </View>
      );
    }

    if (this.state.user) {
      return (
        <MyView name={this.state.user.name}/>
      );
    }
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/calendar'],
        iosClientId: '35830859772-tr00qqf4r2rnflateflrbep4uomvt5cn.apps.googleusercontent.com',
        webClientId: '824400829891-488lpiqle97frsidbgpt6hcjsfdhkv0h.apps.googleusercontent.com',
        offlineAccess: false
      });
      const user = await GoogleSignin.currentUserAsync();
      console.log('user',user);
      this.setState({user});
    }
    catch(err) {
      console.log("Google signin error", err.code, err.message);
    }
  }

  _signIn() {
    console.log("Sign in");
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({user: user});
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done()
    ;
  }

  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({user: null});
    })
    .done();
  }
}