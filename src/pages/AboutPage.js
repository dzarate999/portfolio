import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Project Manager/Estimator with repeated success in executing marketing
          plans, business initiatives, and product deliverables that lead to
          considerable revenue and profit growth.
        </p>
        <p>
          Project Management: Skilled in coordinating large-scale projects from
          planning and estimation through delivery.
        </p>
        <p>
          Graphic Design: Experienced in the print industry, including graphic
          and architectural design in 2D & 3D formats.
        </p>
        <p>
          Technical Skills: Demonstrated proficiency with Adobe Creative Suite
          and Microsoft Office Suite.
        </p>
        <p>
          Business Growth: Built branch from startup to over $2M in revenue, 13
          employees, and 7000-sq. ft. facility. Process Improvement: Drove
          culture of best practices, focused on workflow improvement and market
          expansion.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
