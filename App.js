
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, Button, Platform ,TouchableOpacity } from 'react-native';

import colors from './config/colors';

export default function App() {
  const [currentPage, setPage] = useState('account')
  const switchPage = (page) => {
    setPage(page)
  }
  const listOfNotes = [
    {
      title: "Note Title 1",
      body: "Though, the objectives of discussions of the referential arguments can be neglected in most cases, it should be realized that the matter of the formal action is of a great interest. ",
      color: colors.blue
    },
    {
      title: "Note Title 2",
      body: "Though, the objectives of discussions of the referential arguments can be neglected in most cases, it should be realized that the matter of the formal action is of a great interest. ",
      color: colors.green
    },
    {
      title: "Note Title 3",
      body: "Though, the objectives of discussions of the referential arguments can be neglected in most cases, it should be realized that the matter of the formal action is of a great interest. ",
      color: colors.pink
    },
    {
      title: "Note Title 4",
      body: "Though, the objectives of discussions of the referential arguments can be neglected in most cases, it should be realized that the matter of the formal action is of a great interest. ",
      color: colors.blue
    },
    {
      title: "Note Title 5",
      body: "Though, the objectives of discussions of the referential arguments can be neglected in most cases, it should be realized that the matter of the formal action is of a great interest. ",
      color: colors.pink
    },
    {
      title: "Note Title 6",
      body: "Though, the objectives of discussions of the referential arguments can be neglected in most cases, it should be realized that the matter of the formal action is of a great interest. ",
      color: colors.green
    },
    ]

  if (currentPage == 'splash') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.splashContainer}>
          <Image style={styles.splashLogo} source={require("./assets/logo.svg")} />
          <Text numberOfLines={3} style={styles.splashDescription}>Track your notes anywhere, anytime and share your notes to your friends.</Text>
          <View style={[styles.splashButton, styles.splashLogin]}>
            <Text style={{ color: '#fff' }} onPress={() => switchPage('home')}>Login</Text>
          </View>
          <View style={[styles.splashButton, styles.splashRegister]}>
            <Text onPress={() => switchPage('register')}>Register</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  else if (currentPage == 'login') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.splashContainer}>
          <Text>Login</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    )

  } else if (currentPage == 'register') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.homeContainer}>
          <Text>Register</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    )

  } else if (currentPage == 'account') {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={()=> switchPage('home')}>
            <Image style={styles.navBack} source={require('./assets/back.png')} />
          </TouchableOpacity>
          <Text  style={styles.navLogout} onPress={()=> switchPage('splash')}>Logout</Text>
        </View>
        <View style={styles.profileInfo}>
          <Image style={styles.bigAvatar} source={require('./assets/avatar.jpg')}/>
          <View>
            <Text style={[styles.lgText, styles.boldText]}>Inutz CEO</Text>
            <Text style={[styles.smText]}>inutz2021@gmail.com</Text>
          </View>
        </View>
        <View style={styles.profileCard}>
          <Text style={[styles.mdText, styles.boldText]}>Account Info</Text>
          <View style = {styles.profileGroup}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Name"
              value="Inutz CEO"
            />
          </View>
          <View style = {styles.profileGroup}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter Email Address"
              value="inutz2021@gmail.com"
            />
          </View>
          <View style = {styles.profileGroup}>
            <Text style={[styles.buttonFlex]}>Update Account Info</Text>
          </View>
        </View>
        <View style={styles.profileCard}>
          <Text style={[styles.mdText, styles.boldText]}>Change Password</Text>
          <View style = {styles.profileGroup}>
            <TextInput
              style={styles.inputText}
              placeholder="Old Password"
            />
          </View>
          <View style = {styles.profileGroup}>
            <TextInput
              style={styles.inputText}
              placeholder="New Password"
            />
          </View>
          <View style = {styles.profileGroup}>
            <TextInput
              style={styles.inputText}
              placeholder="Confirm Password"
              
            />
          </View>
          <View style = {styles.profileGroup}>
            <Text style={[styles.buttonFlex]}>Update Password</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    )
  }
  else if (currentPage == 'home') {
    return (
      <SafeAreaView style={styles.homeContainer}>
        <View style={styles.navContainer}>
          <Image style={styles.navLogo} source={require('./assets/logo.svg')} />
          <TouchableOpacity onPress={()=> switchPage('account')}>
            <Image style={styles.smallAvatar} source={require('./assets/avatar.jpg')} />
          </TouchableOpacity>
        </View>
        <View style={styles.noteContainer}>
        {
          listOfNotes.map((note, index) => (
            <View style={[styles.noteCard,{backgroundColor: note.color}]} key={index}>
              <Text style={styles.mdText}>{note['title']}</Text>
              <Text numberOfLines="3" style={styles.noteBody}>{note['body']}</Text>
            </View>
          ))
        }
        </View>
        <View style={styles.bottomContainer}>
          <Image style={styles.bottomButton} source={require('./assets/note_icon.png')} />
          <Image style={styles.bottomButton} source={require('./assets/note_add.png')} />
          <Image style={styles.bottomButton} source={require('./assets/note_share.png')} />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  splashContainer: {
    padding: 40,
    textAlign: 'center',
    alignItems: 'center'
  },
  splashLogo: {
    padding: 10,
    height: 80,
    width: '50%'
  },
  splashDescription: {
    padding: "1.5em"
  },
  splashButton: {
    width: 150,
    padding: 13,
    borderRadius: 40,
    boxShadow: '0px 2px 4px rgba(100,100,100,0.5)'
  }
  ,
  splashLogin: {
    backgroundColor: colors.black,
    marginVertical: 2
  },
  splashRegister: {
    marginVertical: 10
  },

  homeContainer: {
    justifyContent: 'flex-start',
    flex: 1,
  },

  navContainer: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  navLogo: {
    marginTop: 10,
    width: 130,
    height: 50
  },
  navBack: {
    width: 30,
    height: 30,
  },
  navLogout: {
    padding: 15,
    backgroundColor: colors.white,
  },
  smallAvatar: {
    borderRadius: 100,
    height: 40,
    marginHorizontal: 10,
    width: 40
  },
  bigAvatar: {
    borderRadius: 100,
    height: 80,
    width: 80,
    marginRight:20
  },

  bottomContainer: {
    backgroundColor: colors.white,
    padding: 35,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'fixed',
    width: '100%',
    height: 30,
    bottom: 0,
    left: 0,
    boxShadow: '0px 2px 4px rgba(100,100,100,0.5)'

  },
  bottomButton: {
    width: 35,
    height: 35
  },

  noteCard: {
    overflow: 'hidden',
    margin: 18,
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
  }
  ,noteBody: {
    marginVertical: 15,
    marginHorizontal: 5,
    color: colors.darkgray
  },
  noteContainer: {
    marginVertical: 15,
    paddingBottom: 50
  },

  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25
  },
  lgText: {
    fontSize: '15pt',
    paddingBottom: 5,
  },
  mdText: {
    fontSize: '13pt',
    paddingBottom: 5,
  },
  smText: {
    fontSize: '11pt',
    paddingBottom: 10,
  },
  boldText: {
    fontWeight: 'bolder'
  },
  profileCard: {
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
  },
  profileGroup: {
    marginVertical: 5
  },
  inputText: {
    padding: 10,
    borderRadius: 8,
    border: '1.5px solid'+ colors.lightgray
  },
  buttonFlex: {
    padding: 10,
    backgroundColor: colors.lightgray,
    borderRadius: 10,
    textAlign: 'center'
  }

  
});
