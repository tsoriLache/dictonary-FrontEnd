import React from 'react';
import ChoosePart from './ChoosePart';
import ErrorMsg from './ErrorMsg';
import Result from './Result';

export default function Display({ data }) {
  return (
    <div>
      {console.log(data)}
      {data.hasOwnProperty('res') ? (
        <Result res={data.res} />
      ) : data.hasOwnProperty('pos') ? (
        <ChoosePart pos={data.pos} />
      ) : (
        <ErrorMsg err={data} />
      )}
    </div>
  );
}
