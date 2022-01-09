import { Canvas } from '@react-three/fiber'
import './scss/main.scss';

// 
function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh />
      </Canvas>
    </div>
  )
}

export default App;
