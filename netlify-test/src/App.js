// import logo from './logo.svg';
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAt} from '@fortawesome/free-solid-svg-icons';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

import {Card, Icon, Image} from 'semantic-ui-react';
import FeedExampleBasic from './Feed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="ui container comments" >
        {/* <ApprovalCard>
            <CommentDetail
            author={faker.name.firstName()}
            timeAgo="Today at 3:30pm"
            image={faker.image.avatar()}
            content="Awesome!"
          />
        </ApprovalCard> */}
        
        <img src="https://semantic-ui.com/images/avatar2/large/elyse.png" className="ui medium circular image" alt="avatar"/>
        <Card>
          {/* <Image className="ui medium circular image" src='https://semantic-ui.com/images/avatar2/large/elyse.png' circular ui={false} /> */}
            <Card.Content>
              <Card.Header>Elyse</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Elyse is a musician living in Nashville.
              </Card.Description>
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
