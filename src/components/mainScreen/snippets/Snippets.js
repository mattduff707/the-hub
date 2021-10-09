import useFetch from '../../../services/useFetch';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Snippets = () => {
  const api = 'https://fierce-falls-10148.herokuapp.com/api/snippets';
  const [snippets, setSnippets] = useState([]);

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
    </div>
  );
};

export default Snippets;
