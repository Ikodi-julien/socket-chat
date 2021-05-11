import React from 'react';
import {Link} from 'react-router-dom';

const MyChannels = ({myChannelLinks, showMychannels}) => {

  
  return (
    <section className={showMychannels ? "mychannels --show" : "mychannels"}>
      <h1 className="mychannels__title">Mes Channels</h1>
      {
        myChannelLinks.map(link => <Link key={link.id} to={`/channels/${link.id}`}>{link.name}</Link>)
      }
    </section>
  )
}

export default MyChannels;
