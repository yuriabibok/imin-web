import * as React from 'react';
import { GameDTO } from '../../models/GameDTO';
import { Card, Avatar, CardHeader, Typography, CardActionArea } from '@material-ui/core';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

interface IGameProps {
  game: GameDTO;
}

export class Game extends React.Component<IGameProps> {
  public render(): JSX.Element {
    return (
      <NavLink to={`/game/${this.props.game.id}`}>
        <Card>
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {this.props.game.team.name[0].toUpperCase()}
                </Avatar>
              }
              action={
                <Typography variant="body2" color="textPrimary" component="p">
                  {this.props.game.players.length} / {this.props.game.team.capacity}
                </Typography>
              }
              title={this.props.game.title}
              subheader={moment(this.props.game.date).format('d MMMM (dddd), HH:mm')}
            />
          </CardActionArea>
        </Card>
      </NavLink>
    );
  }
}
