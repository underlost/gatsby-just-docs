import * as React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <div className="search">
      <div className="search-input-wrap">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={e => refine(e.target.value)}
          value={currentRefinement}
          onFocus={onFocus}
        />
        <label htmlFor="search-input" className="search-label">
          <svg height="24" width="24" viewBox="0 0 24 24" className="search-icon">
            <use xlinkHref="#svg-search"></use>
          </svg>
        </label>
      </div>
    </div>
  )
)