import classNames from 'classnames';
import React, { useState } from 'react';
import defaultImage from '../assets/images/photo-cover.svg';

const testFormat = /\.(jpg|jpeg)$/;

const UserCard = ({ name, email, phone, position, avatar }) => {
  const [isOver, setIsOver] = useState('');

  return (
    <div className="userCard">
      <img
        className="userCard__avatar"
        src={testFormat.test(avatar) ? avatar : defaultImage}
        alt="avatar-img"
      />
      <div className="userCard__text-container">
        <p
          onMouseOver={() => setIsOver('name')}
          onMouseOut={() => setIsOver('')}
          className="userCard__name"
        >
          {name}
        </p>
        <span
          className={classNames('userCard__fullInfo', {
            'userCard__fullInfo--active': isOver.includes('name'),
          })}
        >
          {name}
        </span>
      </div>

      <div className="userCard__text-container">
        <p
          onMouseOver={() => setIsOver('position')}
          onMouseOut={() => setIsOver('')}
          className="userCard__information"
        >
          {position}
        </p>
        <span
          className={classNames('userCard__fullInfo', {
            'userCard__fullInfo--active': isOver.includes('position'),
          })}
        >
          {position}
        </span>
      </div>

      <div className="userCard__text-container">
        <p
          onMouseOver={() => setIsOver('email')}
          onMouseOut={() => setIsOver('')}
          className="userCard__information"
        >
          {email}
        </p>
        <span
          className={classNames('userCard__fullInfo', {
            'userCard__fullInfo--active': isOver.includes('email'),
          })}
        >
          {email}
        </span>
      </div>

      <div className="userCard__text-container">
        <p
          onMouseOver={() => setIsOver('phone')}
          onMouseOut={() => setIsOver('')}
          className="userCard__information"
        >
          {phone}
        </p>
        <span
          className={classNames('userCard__fullInfo', {
            'userCard__fullInfo--active': isOver.includes('phone'),
          })}
        >
          {phone}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
