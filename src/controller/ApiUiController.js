import React from 'react';
import Loader from '../components/common/Loader';

export default function ApiUiController({inApiCall, children}){
  return inApiCall ? <Loader /> : children;
}
