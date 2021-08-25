import ReactDOM from 'react-dom';
import GuestList from './state-practice/GuestList';
import UserSearch from './state-practice/UserSearch';
import EventComponent from './events-practice/EventComponent';
import OtherUserSearch from './refs-practice/OtherUserSearch';
import './index.css';

const App = () => {
  return (
    <div>
      <h1>Hi there...</h1>
      <div>
        <GuestList />
      </div>
      <div>
        <UserSearch />
      </div>
      <div>
        <EventComponent></EventComponent>
      </div>
      <div>
        <OtherUserSearch></OtherUserSearch>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
