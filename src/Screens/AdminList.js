import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import { adminFetch, goToBookings, goToProfile, goToStudioProfile } from '../actions';
import { NavLink } from '../components/common/NavLink';
import AdminItem from '../components/AdminItem';

class AdminList extends Component {
  UNSAFE_componentWillMount() {
    this.props.adminFetch(); 
}

state = {
    isLoading: false,
}   

renderRefreshControl() {
    this.setState({ isLoading: true })
    this.props.adminFetch();
}

renderRow(admin) {
    return <AdminItem admin={admin} />;
  }

  render() {
    return (
        <View style={styles.container}>
            <FlatList 
                data = {this.props.admins}
                renderItem = {({item}) => this.renderRow(item)}
                onRefresh={() => this.renderRefreshControl()}
				        refreshing={this.state.isLoading}
                keyExtractor={(item, index) => item.uid}
            />

            <View style={styles.iconStyle} >
              <TouchableOpacity onPress={goToProfile}>
                  <NavLink text="profile"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={goToBookings}>
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
  const admins = _.map(state.admins, (val, uid) => {
    return { ...val, uid };
  });

  return { admins };
};

export default connect(mapStateToProps, { adminFetch })(AdminList);