import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {UserDetailsScreenProps} from '../../navigation';
import Animated, {
  ZoomInDown,
  ZoomInRight,
  ZoomInUp,
} from 'react-native-reanimated';
import {styles} from './styles';

const DURATION = 300;
export const UserDetailsScreen: FC<UserDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const {
    picture: {large},
    login: {username},
    name,
    email,
    dob: {age},
  } = route.params.user;

  useEffect(() => {
    navigation.setOptions({headerTitle: username});
  }, [navigation, username]);

  return (
    <View style={styles.container}>
      <Animated.Text
        entering={ZoomInUp.duration(DURATION)}
        style={
          styles.title
        }>{`${name.title} ${name.first} ${name.last} `}</Animated.Text>
      <Animated.Image
        entering={ZoomInRight.duration(DURATION)}
        style={styles.avatar}
        source={{uri: large}}
      />
      <Animated.Text
        entering={ZoomInDown.duration(DURATION)}
        style={styles.userInf}>
        {email}
      </Animated.Text>
      <Animated.Text
        entering={ZoomInDown.duration(DURATION)}
        style={styles.userInf}>
        {age}
      </Animated.Text>
    </View>
  );
};
