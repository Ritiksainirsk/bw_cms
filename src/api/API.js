
class Api {

    static Link = 'https://2r9pjtfdg3.execute-api.ap-south-1.amazonaws.com/prod/api';
  
    static check = (token, onAuth, onFailure) => {
      fetch(`${Api.Link}/test/${token}`, { method: 'POST', 
          headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }})
      .then(async res => {
        if(res.status === 200) { const response = await res.json(); onAuth(response); }
        else if(res.status === 401) {  onFailure(); }
        else { onFailure(); }
      }).catch(er => onFailure(er));
    }
    
    static sendInfo = (token, body, onSuccess, onFailure) => {
      fetch(`${Api.Link}/register-bw/${token}`, { method: 'POST', body: JSON.stringify(body),
          headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }})
      .then(async res => {
        if(res.status === 200) { const response = await res.json(); onSuccess(response); }
        else if(res.status === 401) {  onFailure(); }
        else { onFailure(); }
      }).catch(er => onFailure(er));
    }
  
    static getQuestions = (token, onSuccess, onFailure) => {
      fetch(`${Api.Link}/get-questions/${token}`, { method: 'POST',
          headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }})
      .then(async res => {
        if(res.status === 200) { const response = await res.json(); onSuccess(response); }
        else if(res.status === 401) {  onFailure(); }
        else { onFailure(); }
      }).catch(er => onFailure(er));
    }
  
    static sendTemp = (token, body) => {
      fetch(`${Api.Link}/temp-test/${token}`, { method: 'POST', body: JSON.stringify(body),
          headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }})
      .then(res => { }).catch(er => { });
    }
  
    static sendResult = (token, body, onSuccess, onFailure) => {
      fetch(`${Api.Link}/submit-test/${token}`, { method: 'POST', body: JSON.stringify(body),
          headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }})
      .then(async res => {
        if(res.status === 200) { const response = await res.json(); onSuccess(response); }
        else if(res.status === 401) {  onFailure(); }
        else { onFailure(); }
      }).catch(er => onFailure(er));
    }
  
    static getUsers = (token, body, onSuccess, onFailure) => {
      fetch(`${Api.Link}/user-list/${token}`, { method: 'POST', body: JSON.stringify(body),
          headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }})
      .then(async res => {
        if(res.status === 200) { const response = await res.json(); onSuccess(response); }
        else if(res.status === 401) {  onFailure(); }
        else { onFailure(); }
      }).catch(er => onFailure(er));
    }
  
    static getHeader = (token, onSuccess, onFailure) => {
      fetch(`${Api.Link}/header-data/${token}`, { method: 'POST',
          headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }})
      .then(async res => {
        if(res.status === 200) { const response = await res.json(); onSuccess(response); }
        else if(res.status === 401) {  onFailure(); }
        else { onFailure(); }
      }).catch(er => onFailure(er));
    }
  }
  
  export default Api;