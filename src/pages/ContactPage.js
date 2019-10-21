import React from 'react';

import FormContent from '../components/FormContent';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ContactPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <FormContent />
            </Content>
        </div>
    );
}

export default ContactPage;