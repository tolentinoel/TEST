import React from 'react'
import { Feed, Icon } from 'semantic-ui-react';
import faker from 'faker';
import './styles/Feed.css';

const FeedExampleBasic = () => (
  <Feed id="mainFeedDiv">
    <Feed.Event>
      <Feed.Label>
        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' alt='avatar'/>
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary id="userFeed">
          <Feed.User >Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      {/* <Feed.Label image='https://semantic-ui.com/images/avatar/small/ade.jpg' /> */}
      <Feed.Label image={faker.image.avatar()} />
      <Feed.Content>
        <Feed.Summary
          date='2 Days Ago'
          user='Ade Hess'
          content='add you as a friend'
        />
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://semantic-ui.com/images/avatar/small/joe.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a href='/'>Joe Henderson</a> posted on his page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Ours is a life of constant reruns. We're always circling back to where
          we'd we started, then starting all over again. Even if we don't run
          extra laps that day, we surely will come back for more of the same
          another day soon.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://semantic-ui.com/images/avatar/small/justen.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a href="/">Justen Kitsune</a> added <a href='/'>2 new photos</a> of you
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a href='/'>
          <img src={faker.image.image()} alt="avatar" />
            {/* <img src='https://react.semantic-ui.com/images/wireframe/image.png' alt="avatar" /> */}
          </a>
          <a href ='/'>
          <img src={faker.image.image()} alt="avatar" />
            {/* <img src='https://react.semantic-ui.com/images/wireframe/image.png' alt="avatar"/> */}
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            41 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleBasic