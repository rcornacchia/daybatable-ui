import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { TextField } from 'redux-form-material-ui';
import Button from 'material-ui/Button';
import Card from '../../components/Card';
import { post, setPostFormPosition, closePostForm } from './actions';
import CrunchyButton from '../../components/CrunchyButton';
import './PostForm.scss';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { warning: '' };
    this.setPostFormPosition = (...args) => this.setPosition.bind(this, ...args);
  }

  submit = e => {
    e.preventDefault();
    (this.props.valid) ? this.props.post()
                       : this.setState({ warning: 'Oops, missed a field.' });
  }

  closePostForm = () => this.props.closePostForm();

  setPosition = position => this.props.setPostFormPosition(position);

  handleChange = (event, value) => this.setState({ ...this.state, value });

  render() {
    const { warning } = this.state;
    const { debate: { forPosition, againstPosition }, currentPosition } = this.props;
    const forBtnType = (currentPosition == forPosition) ? 'for' : 'unvoted';
    const againstBtnType = (currentPosition == againstPosition) ? 'against' : 'unvoted';

    return (
      <Card minWidth='650px'>
        <PostFormContainer>
          <h3 className='post-form-title'>
            Post an Argument
            <div className='post-form-close-btn'>
              <i className='material-icons' onClick={this.closePostForm}>clear</i>
            </div>
          </h3>
          <br />
          <PositionSelector>
            Position:
            <PositionBtnContainer>
              <CrunchyButton type={forBtnType} action={this.setPostFormPosition(forPosition)} size='small'>
                {forPosition}
              </CrunchyButton>
            </PositionBtnContainer>
            vs
            <PositionBtnContainer>
              <CrunchyButton type={againstBtnType} action={this.setPostFormPosition(againstPosition)} size='small'>
                {againstPosition}
              </CrunchyButton>
            </PositionBtnContainer>
          </PositionSelector>
          <form className='post-form' onSubmit={this.submit}>
            <Field
              name='postText'
              className='post-textfield'
              component={TextField}
              label='Argument'
              multiLine
              rows={3}  
              style={styles.textfield}
            />
            <br />
            <Button 
              raised
              type='submit'
              className='post-form-submit-btn'
            >
              Submit
            </Button>
            <Button 
              raised
              onClick={this.closePostForm}
              className='post-form-cancel-btn'
            >
              Cancel
            </Button>
            <div className='warning'>{warning}</div>          
          </form>
        </PostFormContainer>
      </Card>
    )
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
  post: () => dispatch(post()),
  setPostFormPosition: position => dispatch(setPostFormPosition(position)),
  closePostForm: () => dispatch(closePostForm())
});

const mapStateToProps = state => ({
  debate: state.debate,
  currentPosition: state.posts.postFormPosition
});

Post = reduxForm({
  form: 'post',
  validate
})(Post);

export default connect(mapStateToProps, mapDispatchToProps)(Post);

const styles = {
  textfield: { width: 500 },
  iconStyle: { fill: 'red' }
}

const PostFormContainer = styled.div`
  display: block;
`

const PositionSelector = styled.div`
  font-size: 15px;
`

const PositionBtnContainer = styled.div`
  display: inline-block;
  margin: 0 10px;
`