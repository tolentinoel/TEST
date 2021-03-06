import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAt} from '@fortawesome/free-solid-svg-icons';

import {Card, Icon} from 'semantic-ui-react';
import FeedExampleBasic from './Feed';

function App() {
  return (
    <div className="App">
      <div className="topNav">Yay! you checked out my practice page! Whatchu think? - ellaine.dev</div>
      <header className="App-header">
        <div className="ui container comments" id="mainContainer">
          <img id="mainAvatar" src="https://semantic-ui.com/images/avatar2/large/elyse.png" className="ui medium circular image" alt="avatar"/>
        <div className="bannerDiv">banner</div>
          <Card>
            <Card.Content>
              <Card.Header>Elyse</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>Elyse is a musician living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="/">
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>

          <FeedExampleBasic />
        </div>
      </header>
    </div>
  );
}

export default App;
