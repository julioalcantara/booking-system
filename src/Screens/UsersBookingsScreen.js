import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, RefreshControl, StyleSheet, TouchableOpacity} from 'react-native';
import { bookingsFetchTest, goToProfile, goToUsersBookings, goToStudioProfile } from '../actions';
import { NavLink } from '../components/common/NavLink';
import ListItem from '../components/ListItem';

class UserBookingsScreen extends Component {
  UNSAFE_componentWillMount() {
    this.props.bookingsFetchTest();
}

state = {
    isLoading: false,
}   

renderRefreshControl() {
    this.setState({ isLoading: true })
    this.props.bookingsFetchTest();
    
}

renderRow(booking) {
    return <ListItem booking={booking} />;
  }

  render() {
    console.log(this.props.bookings);
    return (
        <View style={styles.container} > 
            <FlatList 
                data = {this.props.bookings}
                renderItem = {({item}) => this.renderRow(item)}
                onRefresh={() => this.renderRefreshControl()}
				refreshing={this.state.isLoading}
                keyExtractor={(item, index) => item.uid}
            />

            <View style={styles.iconStyle} >

            <TouchableOpacity onPress={goToProfile}>
                <NavLink text="profile"/>
              </TouchableOpacity>

              <TouchableOpacity onPress={goToUsersBookings}>
                <NavLink text="bookings"/>
              </TouchableOpacity>
                
              <TouchableOpacity onPress={goToStudioProfile}>
                <NavLink text="studio"/>
              </TouchableOpacity>
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  iconStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  }
});

const mapStateToProps = state => {
  const bookings = _.map(state.bookings, (val, uid) => {
    return { ...val, uid };
  });

  return { bookings };
};

export default connect(mapStateToProps, { bookingsFetchTest })(UserBookingsScreen);