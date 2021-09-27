import useFetch from '../../../services/useFetch';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Snippets = () => {
  const api = '/api/snippets';
  const [snippets, setSnippets] = useState();

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
  useEffect(() => {
    setSnippets(() => data);
  }, [data]);

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
        {snippets.map((e, index) => {
          return (
            <NavLink key={index} to={`/snippets/${e.name}`}>
              {e.name}
            </NavLink>
          );
        })}
      </nav>
      <Switch>
        {snippets.map((e, index) => {
          return (
            <Route key={index} exact path={`/snippets/${e.name}`}>
              <h2>{e.name}</h2>
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
