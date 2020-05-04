import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, RefreshControl } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from '../components/ListItem';

class EmployeeList extends Component {
  UNSAFE_componentWillMount() {
    this.props.employeesFetch();

}

state = {
    isLoading: false,
}   

renderRefreshControl() {
    this.setState({ isLoading: true })
    this.props.employeesFetch();
}

renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
        <View>
            <FlatList 
                data = {this.props.employees}
                renderItem = {({item}) => this.renderRow(item)}
                onRefresh={() => this.renderRefreshControl()}
				        refreshing={this.state.isLoading}
                keyExtractor={(item, index) => item.uid}
            />
        </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);