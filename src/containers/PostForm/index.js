import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { FormControl, FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Button from 'material-ui/Button';
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
    (this.props.valid) ? this.props.post()
            : this.setState({ warning: 'Oops, missed a field.' });
  }

  handleChange = (event, value) => {
    this.setState({ ...this.state, value });
  };

  render() {
    const { warning } = this.state;
    const { debate } = this.props;
    const { forPosition, againstPosition } = debate;
    console.log(forPosition);
    return (
      <div>
        <Topic />
        <Card minWidth='650px'>
          <div className='post-form-container'>
            <br />
            <form className='post-form' onSubmit={this.submit}>
              <h3>Post an Argument</h3>
              <div>
                <Field
                  name="position"
                  component="input"
                  type="radio"
                  value="for"
                  label={forPosition}
                />
                
              </div>
              <Field name ='postText'
                className='post-textfield'
                component={TextField}
                label='Argument'
                multiLine
                rows={3}  
                style={styles.textfield}/>
              <br />
              <Button raised type='submit' className='post-form-submit-btn'>Submit</Button>
              <span className='warning'>{warning}</span>          
            </form>
          </div>
        </Card>
      </div>
    )
  }
}

const styles = {
  textfield: { width: 500 },
  iconStyle: { fill: 'red' }
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