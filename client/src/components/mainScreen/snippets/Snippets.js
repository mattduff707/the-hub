import useFetch from '../../../services/useFetch';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';

const Snippets = () => {
  const api = '/api/snippets';

  const postData = async (url, data) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  const { data, loading, error } = useFetch(api);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error!!!</h2>;
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    postData(api, { test: e.target.test.value });
  };

  return (
    <div>
      <nav>
        {data.map((e, index) => {
          return (
            <NavLink key={index} to={`/snippets/${e}`}>
              {e}
            </NavLink>
          );
        })}
      </nav>
      <Switch>
        {data.map((e, index) => {
          return (
            <Route key={index} exact path={`/snippets/${e}`}>
              <h2>{e}</h2>
            </Route>
          );
        })}
      </Switch>
      <form onSubmit={handleSubmit}>
        <input name="test" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Snippets;
