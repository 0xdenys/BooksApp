import React, {useState, useEffect} from 'react';

import {View, Text, Switch, ActivityIndicator} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useDispatch} from 'react-redux';
import {themeActions} from '../../redux/themes';
import {DefaultHeader} from '../../components/Headers';

import {BaseBlock, MainBlock} from '../../components/Blocks';

import styles from './styles';
import {scaledSize} from '../../styles';

const ProfileInput = ({...props}) => (
  <Input
    {...props}
    labelStyle={styles.profileInfoLabel}
    inputStyle={styles.profileInfoValue}
    inputContainerStyle={styles.inpContainerStyle}
    containerStyle={styles.profileInfoBlock}
    renderErrorMessage={false}
  />
);

function Profile({navigation}) {
  const [fullname, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [password, setPassword] = useState('123456778900');

  const [isActive, changeTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const themeName = isActive ? 'dark' : 'light';
    dispatch(themeActions.changeThemeMode(themeName));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [isActive]);

  if (loading) {
    return (
      <MainBlock>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={'#0b1e35'} />
        </View>
      </MainBlock>
    );
  }

  return (
    <BaseBlock>
      <DefaultHeader title="Profile" />
      <KeyboardAwareScrollView contentContainerStyle={styles.containerScroll}>
        <View style={styles.profileContainer}>
          <Avatar
            source={require('../../assets/images/avatar.png')}
            rounded
            size={scaledSize(151)}
            containerStyle={{marginRight: scaledSize(71)}}
          />
          <View style={{flex: 1}}>
            <Text style={styles.username}>John Doe</Text>
            <Text style={styles.books}>11 books read</Text>
          </View>
        </View>

        <ProfileInput
          label="Full name"
          value={fullname}
          onChangeText={(text) => setFullName(text)}
        />

        <ProfileInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <ProfileInput
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.rowItem}>
          <Text style={styles.label}>Dark Mode</Text>
          <Switch
            value={isActive}
            onValueChange={() => changeTheme(!isActive)}
          />
        </View>
        <View style={styles.rowItem}>
          <Text style={styles.label}>Notifications</Text>
          <Switch />
        </View>
        <View style={[styles.rowItem, {marginVertical: scaledSize(88)}]}>
          <Text style={styles.link}>About Popcorn Books</Text>
          <Text style={styles.link}>Privacy policy</Text>
        </View>
      </KeyboardAwareScrollView>
    </BaseBlock>
  );
}

export default Profile;
