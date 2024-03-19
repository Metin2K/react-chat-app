import './App.css';
import { ChatProvider } from './Context/ChatContext';
import Conteiner from './Components/Conteiner';
function App() {
  return (
    <ChatProvider>
      <Conteiner />
    </ChatProvider>
  );
}

export default App;
