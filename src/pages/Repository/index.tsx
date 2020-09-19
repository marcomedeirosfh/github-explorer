import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Exlorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>Repo Name</strong>
            <p>Description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>Nmb</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>Nmb</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>Nmb</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="ddddd">
          <div>
            <strong>repo</strong>
            <p>issue</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
