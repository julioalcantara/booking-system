import React, { Component } from 'react';
import { connect } from 'react-redux';
import { profileUpdate, profileCreate } from '../actions';
import { Card, CardSection, Button } from '../components/common';
import ProfileForm from '../Forms/ProfileForm';

class ProfileScren extends Component {
  onButtonPress() {
    const { firstName, lastName, phone, tattooStyle } = this.props;

    this.props.profileCreate({ firstName, lastName, phone, tattooStyle: tattooStyle || 'Realism' });
  }

  render() {
    return (
      <Card>
        <ProfileForm {...this.props} />
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
  const { firstName, lastName, phone, tattooStyle } = state.profileForm;

  return { firstName, lastName, phone, tattooStyle };
};

export default connect(mapStateToProps, {
  profileUpdate, profileCreate
})(ProfileScren);