import React from 'react';
import {Select} from 'semantic-ui-react';

import NavbarContainer from 'src/containers/NavbarContainer';
import CardBox from 'src/containers/CardboxContainer';
import StoreUrl from 'src/components/StoreUrl/StoreUrl';
import Footer from 'src/components/Footer/Footer';
import {searchTagsAndReturn, makeSelectOptions} from 'src/selectors/search';
import SetPathnameContainer from 'src/containers/SetPathnameContainer';

import './discovery.scss';

const Discovery = ({
  tags, 
  channels, 
  tagSelectValue, 
  tagSelectChange,
  isRefresh,
}) => {
    {/* if it's a refresh, a rerouting occurs using a path stored previously in sessionStorage */}
    if (isRefresh) {
      // console.log('on envoi SetPath')
      return (<SetPathnameContainer />)
    }
  
  // This function puts Select value in searchedValue prop.
  const handleChange = (evt, {value}) => {
    tagSelectChange(value);
  }
  // Options for select component
  const selectOptions = makeSelectOptions(tags);
  // Here the channels are filtered according to the option selected and terefore the searchedValue
  const renamedChannelList = channels.map(channel => ({...channel, name: channel.title}));
  
  const filteredChannels = searchTagsAndReturn(tagSelectValue, renamedChannelList);

  let channelsToDisplay = filteredChannels.length ? filteredChannels : channels;

  if (tagSelectValue !== '' && !filteredChannels.length) channelsToDisplay = [];
  
  return (
    <section className="discovery">
    <StoreUrl />
      <NavbarContainer />
      
      <div className="discovery__container">
        <h1 className="discovery__title">Chat rooms</h1>
        
        <div className="discovery__selectcontainer">
          <Select 
            placeholder='Catégories' 
            value={tagSelectValue}
            options={selectOptions}
            onChange={handleChange}
            />
        </div>
        
        <CardBox
          list={channelsToDisplay}
          isDeletable={false}
          />

      </div>
      <Footer />
    </section>
  );
};

export default Discovery;
