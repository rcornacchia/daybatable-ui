import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card from '../../components/Card';
import { post, setPostFormPosition, closePostForm } from './actions';
import CrunchyButton from '../../components/CrunchyButton';
import './PostForm.scss';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { warning: '', postText: '' };
    this.setPostFormPosition = (...args) => this.setPosition.bind(this, ...args);
  }

  submit = e => {
    e.preventDefault();
    const { postText } = this.state;
    
    if (postText && postText.length) {
      this.props.post(postText);
      this.setState({ warning: '', postText: '' });
    } else {
      this.setState({ warning: 'Oops, missed a field.' });
    }
  }

  setPosition = (position, positionName) => this.props.setPostFormPosition(position, positionName);
  handleChange = event => this.setState({ ...this.state, postText: event.target.value });
  closePostForm = () => this.props.closePostForm();

  render() {
    const { warning } = this.state;
    const { debate: { forPosition, againstPosition }, currentPosition } = this.props;
    const forBtnType = (currentPosition == 'for') ? 'for' : 'unvoted';
    const againstBtnType = (currentPosition == 'against') ? 'against' : 'unvoted';

    return (
      <Card minWidth='650px'>
        <PostFormContainer>
          <h3 className='post-form-title'>
            Post an Argument
            <div className='post-form-close-btn'>
              <i className='material-icons close-icon' onClick={this.closePostForm}>clear</i>
            </div>
          </h3>
          <br />
          <PositionSelector>
            Position:
            <PositionBtnContainer>
              <CrunchyButton
                type={forBtnType}
                action={this.setPostFormPosition('for', forPosition)}
                size='small'
              >
                {forPosition}
              </CrunchyButton>
            </PositionBtnContainer>
            vs
            <PositionBtnContainer>
              <CrunchyButton
                type={againstBtnType}
                action={this.setPostFormPosition('against', againstPosition)}
                size='small'
              >
                {againstPosition}
              </CrunchyButton>
            </PositionBtnContainer>
          </PositionSelector>
          <form className='post-form' onSubmit={this.submit}>
            <TextField
              multiline
              rows={4}
              rowsMax='20'
              margin='normal'
              label='Argument'
              style={styles.textfield}
              onChange={this.handleChange}
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

const mapDispatchToProps = dispatch => ({
  post: postText => dispatch(post(postText)),
  setPostFormPosition: (position, positionName) => dispatch(setPostFormPosition(position, positionName)),
  closePostForm: () => dispatch(closePostForm())
});

const mapStateToProps = state => ({
  debate: state.debate,
  currentPosition: state.posts.postFormPosition
});

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