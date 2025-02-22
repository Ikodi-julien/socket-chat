import React from 'react';
import {Search, Select} from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';
import { searchChangeHandler, makeSelectOptions } from '../../../selectors/search';

const NavSearch = (
  {
    tags,
    channels,
    isSearchLoading,
    searchedValue,
    searchResult,
    tagSelectValue,
    toggleSearch,
    searchChange,
    tagSelectChange,
    setSearchResult,
    fetchChannel,
  }) => {
  // This allows to redirect with a history.push('/someurl')
  let history = useHistory();
  // Options for select component
  const selectOptions = makeSelectOptions(tags);
  
  /* ------- Search handling -------- */
  const tagNames = tags.map(tag => tag.name);
  
  const handleResultSelect = (_, {result}) => {
    // If a channel is clicked, displays the related channel page.
    if (result.id) {
      history.push(`/channels/${result.id}`);
      fetchChannel(result.id);
      searchChange('');
      return;
    }
    // if it has no property id it's a tag (i hope)
    if (tagNames.includes(result.title)) {
      history.push('/discovery');
      tagSelectChange(result.title);
      searchChange('');
      return
    }
  };
  
  const handleSelectChange = (evt, {value}) => {
    // When a tag is selected, displays discovery page and results.
    history.push('/discovery');
    tagSelectChange(value);
  };
  
  // Make filtered list of items that's shown in search input dropdown
  const handleSearchChange = (evt) => {
    searchChangeHandler(evt, {
      tags: tags,
      channels: channels,
      searchChange: searchChange,
      setSearchResult: setSearchResult,
    })
  }

  return (
    <div className='nav__search'>
      <div 
        className={window.innerWidth < 700 ? 'nav__search__touchzone' : ''}
        onClick={toggleSearch}
      ></div>
    
      <div className='nav__search__container'>
        <div className="nav__search__container__search">
          <Search
            category
            loading={isSearchLoading}
            onResultSelect={handleResultSelect}
            onSearchChange={handleSearchChange}
            results={searchResult}
            value={searchedValue}
          />
        </div>
        
        <div className="nav__search__container__select">
          <Select 
            placeholder="Catégories" 
            value={tagSelectValue}
            options={selectOptions}
            onChange={handleSelectChange}
          />
        </div>
      </div>
    </div>
  )
};

export default NavSearch;
