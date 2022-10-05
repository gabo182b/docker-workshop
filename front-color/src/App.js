import { useEffect, useState } from 'react';
import './App.css';
import { Square } from './Components/Square';

function App() {
  const [nodes, setNodes] = useState([])
  useEffect(() => {
    const interval = setInterval(async () => {
      let resp = await (await fetch("http://localhost:3001/"))
      let data = await resp.json()
      console.log(data)
      await setNodes(data.slice(-105))
    }, 500)
    return () => clearInterval(interval)
  }, [nodes, setNodes])

  return (
    <div className="App">
      {nodes.map((node, i) =>
        <Square
          key={i}
          color={node.color}
          number={node.id}
        />)
      }
      {/* {nodes.map((nodes, i) => nodes.map((node, i) => <Square key={i} color={node.color} />))} */}
    </div>
  );
}

export default App;