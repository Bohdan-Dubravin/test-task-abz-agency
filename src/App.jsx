import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import { useEffect, useState } from 'react';
import axios from './api/axios';
const UserList = React.lazy(() => import('./components/UsersList'));
const CreateUserForm = React.lazy(() => import('./components/CreateUserForm'));

function App() {
  const [usersList, setUsersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);

  const getUsers = async (currentPage) => {
    const response = await axios.get(`/users?page=${currentPage}&count=6`);
    setUsersList((prev) => [...prev, ...response.data.users]);
    setTotalPages(response.data.total_pages);
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);

  const resetUsersList = async () => {
    const response = await axios.get(`/users?page=${1}&count=6`);
    setUsersList(response.data.users);
    setTotalPages(response.data.total_pages);
  };

  useEffect(() => {
    getUsers(currentPage);
  }, [currentPage]);

  const fetchMoreUsers = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="page">
      <Header />

      <Banner />
      <div className="page__container">
        <UserList
          usersList={usersList}
          totalPages={totalPages}
          fetchMoreUsers={fetchMoreUsers}
          currentPage={currentPage}
        />
        <CreateUserForm getUsers={resetUsersList} />
      </div>
    </div>
  );
}

export default App;
