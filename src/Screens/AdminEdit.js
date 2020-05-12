import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import ProfileForm from '../Forms/ProfileForm';
import { adminUpdate, adminProfileSave, adminDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from '../components/common';
import AdminForm from '../Forms/AdminForm';

class AdminEdit extends Component {
  state = { showModal: false };

  UNSAFE_componentWillMount() {
    _.each(this.props.admin, (value, prop) => {
      this.props.adminUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { firstName, lastName, phone } = this.props;

    this.props.adminProfileSave({ firstName, lastName, phone, uid: this.props.profile.uid });
  }

  onAccept() {
    const { uid } = this.props.admin;

    this.props.profileDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <AdminForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delite Profile
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
  const { firstName, lastName, phone } = state.AdminForm;

  return { firstName, lastName, phone };
};

export default connect(mapStateToProps, {
  adminUpdate, adminProfileSave, adminDelete
})(AdminEdit);