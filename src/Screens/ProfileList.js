import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, StyleSheet } from 'react-native';
import { profilesFetch } from '../actions';
import { NavLink } from '../components/common/NavLink';
import ProfileItem from '../components/ProfileItem';
import { AntDesign, MaterialIcons,Feather } from '@expo/vector-icons';

class ProfileList extends Component {
  UNSAFE_componentWillMount() {
    this.props.profilesFetch(); 
}

state = {
    isLoading: false,
}   

renderRefreshControl() {
    this.setState({ isLoading: true })
    this.props.profilesFetch();
}

renderRow(profile) {
    return <ProfileItem profile={profile} />;
  }

  render() {
    return (
        <View style={styles.container}>
            <FlatList 
                data = {this.props.profiles}
                renderItem = {({item}) => this.renderRow(item)}
                onRefresh={() => this.renderRefreshControl()}
				        refreshing={this.state.isLoading}
                keyExtractor={(item, index) => item.uid}
            />

            <View style={styles.iconStyle} >
              <NavLink 
                text="Bookings"
              />
              <NavLink 
                text="profile"
              />  
              <NavLink 
                text="something"
              />    
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
  const profiles = _.map(state.profiles, (val, uid) => {
    return { ...val, uid };
  });

  return { profiles };
};

export default connect(mapStateToProps, { profilesFetch })(ProfileList);