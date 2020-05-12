import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import { adminProfilesFetch, goToUsersBookings, goToProfile, goToStudioProfile } from '../actions';
import { NavLink } from '../components/common/NavLink';
import AdminItem from '../components/AdminItem';

class AdminList extends Component {
  UNSAFE_componentWillMount() {
    this.props.adminProfilesFetch(); 
}

state = {
    isLoading: false,
}   

renderRefreshControl() {
    this.setState({ isLoading: true })
    this.props.adminProfilesFetch();
}

renderRow(adminProfile) {
    return <AdminItem adminProfile={adminProfile} />;
  }

  render() {
    return (
        <View style={styles.container}>
            <FlatList 
                data = {this.props.adminProfiles}
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
                  <NavLink text="users"/>
                </TouchableOpacity>   
            </View>
            
        </View>
    );
  }
}


//layout pros https://reactnative.dev/docs/layout-props
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
  const adminProfiles = _.map(state.adminProfiles, (val, uid) => {
    return { ...val, uid };
  });

  return { adminProfiles };
};

export default connect(mapStateToProps, { adminProfilesFetch })(AdminList);