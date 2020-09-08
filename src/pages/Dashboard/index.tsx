import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Github Repositories</Title>

      <Form>
        <input placeholder="Insert repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/33945119?s=460&v=4"
            alt="Marco Medeiros"
          />
          <div>
            <strong>marcomedeirosfh/github-explorer</strong>
            <p>Explore github repositories with React JS</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/33945119?s=460&v=4"
            alt="Marco Medeiros"
          />
          <div>
            <strong>marcomedeirosfh/github-explorer</strong>
            <p>Explore github repositories with React JS</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/33945119?s=460&v=4"
            alt="Marco Medeiros"
          />
          <div>
            <strong>marcomedeirosfh/github-explorer</strong>
            <p>Explore github repositories with React JS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
