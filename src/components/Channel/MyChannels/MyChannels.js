import React from 'react';
import {Link} from 'react-router-dom';

const MyChannels = (
  {
    myChannelLinks, 
    showMychannels, 
    fetchChannel, 
    toggleMyChannels,
  }
  ) => {

  // On met à jour les infos du channel au click sur le lien.
  const handleClick = (channelId) => {
    fetchChannel(channelId);
  };
  //
  const handleMyChannelClick = () => {
    toggleMyChannels();
  };
  
  return (
    <section className={showMychannels ? "mychannels --show" : "mychannels"}>
      
      <div class="mychannels__header">
      <h1 className="mychannels__title">Mes Channels</h1>
        {
          window.innerWidth < 700 &&
          <button
            className='mychannels__header__button'
            onClick={ handleMyChannelClick }
            >
            <i className="fas fa-times"></i>
          </button>
        }
      </div>
      
      <div class="mychannels__links">
        {
          myChannelLinks.map(link => <Link
            key={link.id}
            className='mychannels__links__link'
            to={`/channels/${link.id}`}
            onClick={() => {handleClick(link.id)}}
            >{link.name}</Link>)
        }
      </div>
    </section>
  )
}

export default MyChannels;
