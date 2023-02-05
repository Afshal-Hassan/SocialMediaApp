import './App.css';
import { LoaderProvider } from './hooks/context/LoadingContext';
import { PostProvider } from './hooks/context/PostContext';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div >
      <LoaderProvider>
        <PostProvider>
          <Home/>
        </PostProvider>
      </LoaderProvider>
    </div>
  );
}

export default App;
