import React, { Component } from 'react';
import { connect } from 'react-redux';
import { profileUpdate, adminCreate } from '../actions';
import { Card, CardSection, Button } from '../components/common';
import AdminProfileForm from '../Forms/AdminProfileForm';

class AdminCreate extends Component {
  onButtonPress() {
    const { firstName, lastName, phone } = this.props;

    this.props.profileCreate({ firstName, lastName, phone });
  }

  render() {
    return (
      <Card>
        <AdminProfileForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { firstName, lastName, phone } = state.adminForm;

  return { firstName, lastName, phone };
};

export default connect(mapStateToProps, {
  profileUpdate, adminCreate
})(AdminCreate);