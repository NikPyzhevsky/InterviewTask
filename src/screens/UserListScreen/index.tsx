import React, {FC, useCallback, useEffect} from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useFetch} from '../../hooks';
import {UserListResponse, UserT} from '../../types';
import {ROUTES, UserListScreenProps} from '../../navigation';
import {styles} from './styles';
import Animated, {SlideInLeft, SlideOutRight} from 'react-native-reanimated';

export const UserListScreen: FC<UserListScreenProps> = ({navigation}) => {
  const {data, isLoading, error, refresh} = useFetch<UserListResponse>(
    'https://randomuser.me/api/?results=24',
  );

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error?.message);
    }
  }, [error]);

  const pressHandler = useCallback(
    (user: UserT) => navigation.navigate(ROUTES.USER_DETAILS, {user}),
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onRefresh={refresh}
        refreshing={isLoading}
        data={data?.results}
        style={styles.container}
        keyExtractor={(item, index) => item.id.value + index}
        ListEmptyComponent={<Text style={styles.emptyTitle}>Empty</Text>}
        contentContainerStyle={styles.listContent}
        renderItem={({item}) => (
          <Animated.View entering={SlideInLeft} exiting={SlideOutRight}>
            <TouchableOpacity
              onPress={() => pressHandler(item)}
              style={styles.listItem}>
              <Image
                source={{uri: item.picture.medium}}
                style={styles.avatar}
              />
              <Text style={styles.name}>
                {`${item.name.title} ${item.name.first} ${item.name.last} `}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      />
    </SafeAreaView>
  );
};
