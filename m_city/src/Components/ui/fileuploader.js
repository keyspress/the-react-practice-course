import React, { Component } from 'react';
import FileUploader from 'react-firebase-file-uploader';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebase } from '../../firebase';

class Fileuploader extends Component {
  state = {
    name: '',
    isUploading: false,
    fileURL: ''
  };

  static getDerivedStateFromProps(props, state) {
    if (props.defaultImg) {
      return (state = {
        name: props.defaultImgName,
        fileURL: props.defaultImg
      });
    }
    return null;
  }

  render() {
    return (
      <div>
        {!this.state.fileURL ? (
          <div>
            <div className="label_inputs">{this.props.tag}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Fileuploader;
