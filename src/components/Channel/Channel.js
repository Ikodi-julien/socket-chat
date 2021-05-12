import React, {useEffect} from 'react';
import {Button} from 'semantic-ui-react';
import MyChannels from './MyChannels/MyChannels';
import UsersInChannelList from './UsersInChannelList/UsersInChannelList';
import ChannelMessages from './ChannelMessages/ChannelMessages';
import ChannelForm from './ChannelForm/ChannelForm';
import Navbar from 'src/containers/NavbarContainer';
import Footer from 'src/components/Footer/Footer';
import BigLoader from 'src/components/BigLoader/BigLoader';
import {useParams} from 'react-router-dom';
import Error from 'src/components/Error/Error';


import './channels.scss';

const Channel = ({
  channel, 
  user,
  setInputValue,
  fetchChannel,
  channelFormSubmit,
  toggleMyChannels,
  toggleUsersInChannel,
  // updateChannel,
  }) => {
  
    // Ici on récupère l'id du channel dans l'url (/channels/:id)
    let {id} = useParams();
    console.log('id', id);
    
    // Ici on envoi la demande pour récupérer les infos de ce channel
    useEffect(() => {
      fetchChannel(id)
    }, [])
  
  if (channel.isLoading) { // On affiche un loader tant que pas de réponse de l'API
    return (
      <section className='channels'>
      <Navbar />
      <div className="channels__row">
        <BigLoader />
      </div>
      <Footer />
    </section>
    )
  };
  
  if (channel.error) {
    return (
      <section className='channels'>
      <Navbar />
      <div className="channels__row">
        <Error />
      </div>
      <Footer />
    </section>
    )
  };
  
  return (
    <section className='channels'>
      <Navbar />
      <div className="channels__row">
        <MyChannels 
          myChannelLinks={user.myChannelLinks}
          showMychannels={channel.showMychannels}
          fetchChannel={fetchChannel}
          />
        <div className="channel__container">
        
          <div className='channel__container__options'>
            <Button 
              secondary 
              content='Mes salons'
              onClick={toggleMyChannels}
              />
            <Button 
              secondary 
              content='En ligne' 
              onClick={toggleUsersInChannel}
              />
          </div>
          <ChannelMessages title={channel.title} messages={channel.messages}/>
          <ChannelForm setInputValue={setInputValue} inputValue={channel.inputForm} channelFormSubmit={channelFormSubmit}/>
        </div>
        <UsersInChannelList 
          users={channel.users}
          showUsersInChannel={channel.showUsersInChannel}
          />
      </div>
      <Footer />
    </section>
  )
}

export default Channel;
