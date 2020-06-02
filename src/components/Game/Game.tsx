import * as React from 'react';
import { GameDTO } from '../../models/GameDTO';

export class Game extends React.Component<IGameProps> {
  public render(): JSX.Element {
    return (
      <div>
        <p>{this.props.game.teamName}</p>
        <p>{this.props.game.date}</p>
        <p>{this.props.game.title}</p>
      </div>
    );
  }
}

export interface IGameProps {
  game: GameDTO;
}
