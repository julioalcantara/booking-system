import React, { Component } from 'react';
import { connect } from 'react-redux';
import { profileUpdate, adminCreateProfile } from '../actions';
import { Card, CardSection, Button } from '../components/common';
import AdminProfileForm from '../Forms/AdminProfileForm';

class AdminCreateProfile extends Component {
  onButtonPress() {
    const { afirstName, alastName, aphone } = this.props;

    this.props.adminCreateProfile({ afirstName, alastName, aphone });
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
  const { afirstName, alastName, aphone } = state.adminForm;

  return { afirstName, alastName, aphone };
};

export default connect(mapStateToProps, {
  profileUpdate, adminCreateProfile
})(AdminCreateProfile);