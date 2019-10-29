import React from 'react';

import FormContent from '../components/FormContent';
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';

function ContactPage (props) {
  return (
    <div>
      <Hero 
        title={props.title} 
        class={props.class} 
        
      />
      <Container className='p-5'>
        <FormContent />
      </Container>
    </div>
  );
}

export default ContactPage;
