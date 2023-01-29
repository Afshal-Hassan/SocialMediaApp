import './App.css';
import { PostProvider } from './hooks/context/PostContext';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div >
        <PostProvider>
        <Home/>
        </PostProvider>
    </div>
  );
}

export default App;
