import * as React from 'react';
import { Games } from '../Games/Games';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as creators from '../../redux/games/games';
import { GameDTO } from '../../models/GameDTO';

class Upcoming extends React.Component<IUpcomingProps> {
  public async componentDidMount(): Promise<void> {
    await this.props.fetchUpcomingGames();
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>Upcoming games</h1>
        <Games games={this.props.games || []} />
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    games: state.upcoming.items,
  }),
  dispatch => bindActionCreators(creators, dispatch)
)(Upcoming);

export interface IUpcomingProps {
  games: GameDTO[];
  fetchUpcomingGames: any;
}
