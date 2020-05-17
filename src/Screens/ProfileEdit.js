import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileForm from '../Forms/ProfileForm';
import { profileUpdate, profileSave, profileDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from '../components/common';

class ProfileEdit extends Component {
  state = { showModal: false };

  UNSAFE_componentWillMount() {
    _.each(this.props.profile, (value, prop) => {
      this.props.profileUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { firstName, lastName, phone, tattooStyle } = this.props;

    this.props.profileSave({ firstName, lastName, phone, tattooStyle, uid: this.props.profile.uid });
  }

  onAccept() {
    const { uid } = this.props.profile;

    this.props.profileDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <ProfileForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        {/* <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete Profile
          </Button>
        </CardSection> */}

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
  const { firstName, lastName, phone, tattooStyle } = state.profileForm;

  return { firstName, lastName, phone, tattooStyle };
};

export default connect(mapStateToProps, {
  profileUpdate, profileSave, profileDelete
})(ProfileEdit);