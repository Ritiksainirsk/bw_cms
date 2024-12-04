export const Const = {
  Token: "Token",
  Session: "Session",
  LoggedInRolePermission : "Role",
  User : "User",
  LoggedIn: "LoggedIn",
  LoggedInUser: "LoggedInUser",
  STrue: true,
  SFalse: false,
  Success200: 200,
  Redirect302: 302,
  Invalid400: 400,
  UnAuth401: 401,
  NotFound404: 404,
  Active: 1,
  Inactive: 2,
  Draft: 3,
  Trash: 4,
  Pending: 1,
  Completed: 2,
  Yettostart: 0,
  Limit: 20,
  Domain: "http://localhost:3000/",
  language: ["","Enlisgh","Hindi","Marathi","Gujarati"]
}

export const ProcessAPI = async (res, success, error) => {
  if (res.status === Const.Success200) {
    res.json().then((result) => success(result));
  } else if (res.status === Const.Redirect302) {
    
  } else if (res.status === Const.Invalid400) {
    
  } else if (res.status === Const.UnAuth401) {
    window.location.href="/login";
  } else if (res.status === Const.NotFound404) {

  } else {
    throw res;
  }
};
