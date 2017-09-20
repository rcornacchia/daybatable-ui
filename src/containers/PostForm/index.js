import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField, RadioButtonGroup } from 'redux-form-material-ui';
import { RadioButton } from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton';
import Card from '../../components/Card';
import Topic from '../Topic';
import { post } from './actions';
import './PostForm.scss';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { warning: '' }
  }

  submit = e => {
    e.preventDefault();
    const { valid } = this.props;
    (valid) ? this.props.post()
            : this.setState({ warning: 'Oops, missed a field.' });
  }

  render() {
    const { warning } = this.state;
    const { debate } = this.props;
    const { forPosition, againstPosition } = debate;

    return (
      <div>
        <Topic />
        <Card minWidth='650px'>
          <div className='post-form-container'>
            <br />
            <form className='post-form' onSubmit={this.submit}>
              <h3>Post an Argument</h3>
              <Field name='position' component={RadioButtonGroup} >
                <RadioButton value='for' label={forPosition} iconStyle={{fill: '#00A8E8'}} />
                <RadioButton value='against' label={againstPosition} iconStyle={{fill: '#F22B4A'}} />
              </Field>
              <Field name ='postText'
                className='post-textfield'
                component={TextField}
                floatingLabelText='Argument'
                multiLine
                rows={3} 
                style={styles.textfield}/>
              <br />
              <RaisedButton label='submit' type='submit' className='post-form-submit-btn'/>
              <span className='warning'>{warning}</span>          
            </form>
          </div>
        </Card>
      </div>
    )
  }
}

const styles = {
  textfield: {
    width: 500
  },
  iconStyle: {
    fill: 'red'
  }
}

const validate = values => {
  const errors = {};
  const requiredFields = ['position', 'postText'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  })
  return errors;
}

const mapDispatchToProps = dispatch => ({
  post: () => dispatch(post())
});

const mapStateToProps = state => ({
  debate: state.debate
});

Post = reduxForm({
  form: 'post',
  validate
})(Post);
export default connect(mapStateToProps, mapDispatchToProps)(Post);