import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as creators from '../../redux/games/games';
import { GameDTO } from '../../models/GameDTO';
import { RouteComponentProps } from 'react-router-dom';

class GamePage extends React.Component<IGamePageProps & IGamePageDispatchProps> {
  public constructor(props: IGamePageProps & IGamePageDispatchProps) {
    super(props);
  }

  public async componentDidMount(): Promise<void> {
    await this.props.fetchGame(this.props.match.params.id);
  }

  public render(): JSX.Element {
    return (
      this.props.game.team ?
        <div>
          <p>{this.props.game.team.name}</p>
          <p>{this.props.game.title}</p>
          <p>{this.props.game.date}</p>
        </div> :
        <div></div>
    );
  }
}

export default connect(
  (state: any) => ({
    game: state.game.game,
  }),
  dispatch => bindActionCreators(creators, dispatch)
)(GamePage);

interface IGamePageRouterProps {
  id: string;
}

type IGamePageProps = RouteComponentProps<IGamePageRouterProps>

interface IGamePageDispatchProps {
  game: GameDTO;
  fetchGame: any;
}
