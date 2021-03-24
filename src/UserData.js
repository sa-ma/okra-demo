import React from 'react';

const UserData = ({ data }) => {
  return (
    <section>
      <h2>User Info</h2>
      <ul>
        <li>
          Name: <span>{data.name}</span>{' '}
        </li>
        <li>
          Account No.: <span>{data.accountNo}</span>{' '}
        </li>
        <li>
          Bank.: <span>{data.bankName}</span>{' '}
        </li>
        <li>
          Balance.: <span>{data.balance}</span>{' '}
        </li>
      </ul>
    </section>
  );
};

export default UserData;
