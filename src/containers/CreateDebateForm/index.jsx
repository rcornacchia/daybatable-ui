import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import Button from 'material-ui/Button';
import { createDebate } from './actions';
import Card from '../../components/Card';

class CreateDebateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { warning: '' };
  }
  
  submit = e => {
    e.preventDefault();
    (this.props.valid) ? this.props.createDebate()
                       : this.setState({ warning: 'Oops, missing data' });
  }

  render() {
    const { warning } = this.state;

    return (
      <Card minWidth='650px' marginTop='20px'>
        <Container>
          <form onSubmit={this.submit}>
            <Field
              name='topic'
              component={TextField}
              label='Debate Topic'
              style={styles.textfield}
            />
            <Field
              name='firstPosition'
              component={TextField}
              label='First Position'
              style={styles.textfield}
            />
            <Field
              name='secondPosition'
              component={TextField}
              label='Second Position'
              style={styles.textfield}
            />
            <AddBtn className='register-button'>
              <Button raised type='submit'>Add Debate</Button>
            </AddBtn>
            <Warning>{warning}</Warning>
          </form>
        </Container>
      </Card>
    )
  }
}

const validate = values => {
  const errors = {};
  const requiredFields = [ 'topic', 'firstPosition', 'secondPosition' ];
  
  requiredFields.map(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required';
    }
  });
  return errors;
}

const mapDispatchToProps = dispatch => ({
  createDebate: () => dispatch(createDebate())
});

CreateDebateForm = reduxForm({
  form: 'createDebate',
  validate
})(CreateDebateForm);

export default connect(null, mapDispatchToProps)(CreateDebateForm);

const styles = {
  textfield: {
    width: '500px'
  }
}

const AddBtn = styled.div`
  float: right;
  padding-top: 15px;
`;

const Warning = styled.span`
  color: red;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 30%;
  min-width: 300px;
  margin: 0 auto;
`;
