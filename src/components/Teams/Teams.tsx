// import { connect } from 'react-redux';
import * as React from 'react';
// import { bindActionCreators } from 'redux';
// import * as creators from '../../redux/teams/teams'
import { ITeamsProps } from './ITeamsProps';

export default class Teams extends React.Component<ITeamsProps> {
  public async componentDidMount(): Promise<any> {
    // await this.props.fetchTeams();
  }

  public render(): JSX.Element {
    return (
      <div>
        {/* {this.props.teams.map(x =>
          <div key={x.id}>{x.name}</div>
        )} */}
        Teams!!!
      </div>
    );
  }
}

// export default connect(
//   (state: any) => ({
//     teams: state.teams.items,
//   }),
//   dispatch => bindActionCreators(creators, dispatch)
// )(Teams);
