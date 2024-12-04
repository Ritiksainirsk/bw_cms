import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const match = {
      path: location ? location.pathname.substring(0, location.pathname.length) : '',
      params: useParams()
    };
    return (<Component {...props} match={match} location={{ search: location.search }}  navigate={useNavigate()} />);
  }
  return ComponentWithRouterProp;
}
export default withRouter;