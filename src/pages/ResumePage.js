import React from 'react';
import Button from 'react-bootstrap/Button';
import {Document, Page} from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import resume from '../assets/pdf/resume.pdf';

export default class ResumePage extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = document => {
    const {numPages} = document;
    this.setState({
      numPages,
      pageNumber: 1,
    });
  };

  changePage = offset =>
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + offset,
    }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);

  render() {
    const {numPages, pageNumber} = this.state;

    return (
      <React.Fragment>
        <Document file={resume} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <Button
            className='previous'
            type="button"
            disabled={pageNumber <= 1}
            onClick={this.previousPage}
          >
            Previous
          </Button>
          <Button
            className="mx-1 px-4 next"
            type="button"
            disabled={pageNumber >= numPages}
            onClick={this.nextPage}
          >
            Next
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
