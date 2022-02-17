import React from 'react';
import ChoosePart from './ChoosePart';
import ErrorMsg from './ErrorMsg';
import Result from './Result';

export default function Display({ data, searchInput, setData, handleSearch }) {
  return (
    <div>
      {data.hasOwnProperty('res') ? (
        <Result res={data.res} handleSearch={handleSearch} />
      ) : data.hasOwnProperty('pos') ? (
        <ChoosePart
          parts={data.pos}
          searchInput={searchInput}
          setData={setData}
        />
      ) : data.hasOwnProperty('err') ? (
        <ErrorMsg err={data.err} searchInput={searchInput} />
      ) : (
        ''
      )}
    </div>
  );
}
