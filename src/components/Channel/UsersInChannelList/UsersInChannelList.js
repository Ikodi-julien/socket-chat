import React from 'react';
import {Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const UsersInChannelList = ({users, showUsersInChannel, toggleUsersInChannel}) => {
  
  // ici il y a la liste des users connectés au chat et ceux qui l'ont été.
  
  return (
    <section className={showUsersInChannel ? "usersinchannellist --show" : "usersinchannellist"}>
      <div class="usersinchannellist__header">
        <h1 className="usersinchannellist__title">Utilisateurs</h1>
        {
          window.innerWidth < 700 &&
          <button
            className='usersinchannellist__header__button'
            onClick={toggleUsersInChannel}
            >
            <i className="fas fa-times"></i>
          </button>
        }
      </div>
      
      <div class="usersinchannellist__links">
        {
          users.map(user => <Link 
            key={user.id} 
            className="usersinchannellist__links__link">
          {/* <span>{`${user.avatar}`}</span> */}
          <span>{`${user.nickname}`}</span></Link>)
        }
      </div>
      
      {/* <h1 className="usersinchannellist__title">Hors ligne</h1> */}
      {/* {
        users.map(user => <div key={user.id} className="usersinchannellist__user"> */}
        {/* <span>{`${user.avatar}`}</span> */}
        {/* <span>{`${user.nickname}`}</span></div>)
      } */}
      
    </section>
  )
}

export default UsersInChannelList;
