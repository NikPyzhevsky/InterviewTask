import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  listContent: {gap: 8, paddingHorizontal: 8, paddingTop: 16},
  listItem: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#ececec',
    borderRadius: 36,
    borderBottomRightRadius: 18,
    borderTopRightRadius: 18,
  },
  avatar: {width: 72, height: 72, borderRadius: 36},
  name: {color: '#000028', fontSize: 18, marginTop: 12},
  emptyTitle: {color: '#000028', fontSize: 18, alignSelf: 'center', flex: 1},
});
