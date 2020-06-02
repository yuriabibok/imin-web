import * as React from 'react';
import { GameDTO } from '../../models/GameDTO';
import { Game } from '../Game/Game';

export class Games extends React.Component<IGamesProps> {
  public render(): JSX.Element {
    return (
      <div>
        {this.props.games.map(game => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    );
  }
}

export interface IGamesProps {
  games: GameDTO[];
}
