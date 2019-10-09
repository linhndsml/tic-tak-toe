import React, { Component } from "react";
import { AppContext } from "../AppProvider";
import { GAME_TYPES } from "../common";

import "./Header.css";

const GameType = props => {
  const { value, name } = props;

  return (
    <AppContext.Consumer>
      {context => (
        <li
          onClick={() => context.changeType(value)}
          className={value === context.gameType ? "active" : ""}
        >
          {name}
        </li>
      )}
    </AppContext.Consumer>
  );
};

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Tic Tac Toe</h1>
        <ul>
          <GameType value={GAME_TYPES.TWO_PLAYERS} name="2 Người chơi" />
          <GameType value={GAME_TYPES.VERSUS_COMPUTER} name="Đấu với máy" />
        </ul>
        <div>
          <button onClick={() => this.context.newGame()}>Làm mới</button>
        </div>
      </header>
    );
  }
}

Header.contextType = AppContext;

export default Header;
