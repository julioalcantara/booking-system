import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native-elements';
import { FlatList, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { profilesFetch, goToBookings, goToProfile, goToStudioProfile, goToProfileEdit } from '../actions';
import { NavLink } from '../components/common/NavLink';
import { Ionicons } from '@expo/vector-icons';
import { CardSection } from '../components/common';
import ProfileItem from '../components/ProfileItem';

class UserProfileScreen extends Component {
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

        <View style={styles.rowStyles}>

          <Ionicons style={styles.picIcon} name = "md-person-add"/> 

          <FlatList 
            style={styles.flatListStyles}
            data = {this.props.profiles}
            renderItem = {({item}) => this.renderRow(item)}
            onRefresh={() => this.renderRefreshControl()}
            refreshing={this.state.isLoading}
            keyExtractor={(item, index) => item.uid}
          />

          

          <View style={styles.imageStyle}>
            <Image
                source={ require('../images/logo2.png')}
                style={{ width: 80, height: 80}}
            />
          </View>  
        </View>

        <TouchableOpacity>
          <CardSection>
            <Text style={styles.textStyle}> Edit Profile </Text>
          </CardSection>  
        </TouchableOpacity>
        
        

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
    flex:1,
    
  },
  iconStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  rowStyles: {
    flex: 1,
    flexDirection: "row"
  },
  picIcon: {
    fontSize: 60,
    marginTop: 90,
    marginLeft:30, 
  },
  editIcon: {
    fontSize:20,

  },
  imageStyle: {
    marginTop: 15,
    marginRight:15, 
    alignItems: 'flex-end'
  },
  flatListStyles: {
    paddingTop: 70,
    marginTop: 30,
  },
  textStyle: {
    marginTop: 30,
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = state => {
  const profiles = _.map(state.profiles, (val, uid) => {
    return { ...val, uid };
  });

  return { profiles };
};

export default connect(mapStateToProps, { profilesFetch })(UserProfileScreen);