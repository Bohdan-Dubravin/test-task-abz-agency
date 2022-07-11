import UserCard from './UserCard';
import Button from './Button';
import Loader from './Loader';

const UsersList = ({ usersList, fetchMoreUsers, totalPages, currentPage }) => {
  return (
    <section id="users" className="userList">
      <h1 className="userList__title">Working with GET request</h1>
      {!usersList.length ? (
        <Loader />
      ) : (
        <ul className="userList__list">
          {usersList.map((user) => (
            <li key={user.id} className={'userList__item'}>
              <UserCard
                name={user.name}
                email={user.email}
                phone={user.phone}
                position={user.position}
                avatar={user.photo}
              />
            </li>
          ))}
        </ul>
      )}
      {usersList.length > 0 && (
        <Button
          handleClick={fetchMoreUsers}
          classModificator={`button--wide userList__btn ${
            currentPage >= totalPages && 'button--hidden'
          }`}
        >
          Show more
        </Button>
      )}
    </section>
  );
};

export default UsersList;
