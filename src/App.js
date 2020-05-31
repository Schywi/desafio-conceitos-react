import React, { useeffect , useState} from "react";

import "./styles.css";
import { useEffect } from "react";
import api from "./services/api";

function App() {
    const [repositories,setRepository] = useState([])

  useEffect( () => {
    api.get('repositories').then(response => { 
      setRepository(response.data)
    })
  } , [])

  async function handleAddRepository() {
    const response = await api.post('repositories' , {
      title: 'Umbriel',
      url: 'http://github.com/rocketseat/umbriel',
      techs: ['Node.js', 'ReactJs']
    })
      const repository = response.data
    setRepository([...repositories, repository])
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`)
  

  setRepository(repositories.filter(
    repository => repository.id !== id 
  ))}

  return (
    <div>
      <ul data-testid="repository-list">
       {repositories.map(repository => (
          <li key={repository.id}>
          {repository.title}

          <button onClick={() => handleRemoveRepository(repository.id)}>
            Remover
          </button>
        </li>
       ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
