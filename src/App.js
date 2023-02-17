import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Background from './components/user/Background';
import UpdateProfile from './components/user/UpdateProfile';
import { FriendsSuggestionProvider } from './hooks/context/FriendsSuggestionContext';
import { LoaderProvider } from './hooks/context/LoadingContext';
import { PostProvider } from './hooks/context/PostContext';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div >
      <FriendsSuggestionProvider>
      <LoaderProvider>
        <PostProvider>
          <Switch>
            <Route exact path="/" component={Home}><Home/></Route>
            <Route exact path="/profile/:email" component={Profile}><Profile/></Route>
            <Route exact path="/login" component={Login}><Login/></Route>
            <Route exact path="/settings/profile/update" component={UpdateProfile}><UpdateProfile/></Route>
            <Route exact path="/settings/profile/update/background" component={Background}><Background/></Route>
          </Switch>
        </PostProvider>
      </LoaderProvider>
      </FriendsSuggestionProvider>
    </div>
  );
}

export default App;
