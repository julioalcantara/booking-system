import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { adminUpdate, adminProfileSave, adminDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from '../components/common';
import AdminProfileForm from '../Forms/AdminProfileForm';

class AdminEdit extends Component {
  state = { showModal: false };

  UNSAFE_componentWillMount() {
    _.each(this.props.adminProfile, (value, prop) => {
      this.props.adminUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { afirstName, alastName, aphone } = this.props;

    this.props.adminProfileSave({ afirstName, alastName, aphone, uid: this.props.adminProfile.uid });
  }

  onAccept() {
    const { uid } = this.props.adminProfile;

    this.props.adminDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <AdminProfileForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete Profile
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { afirstName, alastName, aphone } = state.adminForm;

  return { afirstName, alastName, aphone };
};

export default connect(mapStateToProps, {
  adminUpdate, adminProfileSave, adminDelete
})(AdminEdit);