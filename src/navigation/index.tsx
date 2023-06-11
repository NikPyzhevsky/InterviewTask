import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {UserDetailsScreen, UserListScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {UserT} from '../types';

export enum ROUTES {
  USER_LIST = 'UserList',
  USER_DETAILS = 'UserDetails',
}

type RootStackParamList = {
  [ROUTES.USER_LIST]: undefined;
  [ROUTES.USER_DETAILS]: {user: UserT};
};

export type UserDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.USER_DETAILS
>;

export type UserListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ROUTES.USER_LIST
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.USER_LIST} component={UserListScreen} />
        <Stack.Screen
          name={ROUTES.USER_DETAILS}
          component={UserDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
