import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected player1: Fighter, protected player2: Fighter) {
    super(player1);
  }

  fight(): number {
    do {
      this.player1.attack(this.player2);
      if (this.player2.lifePoints > 0) {
        this.player2.attack(this.player1);
      }
    }
    while (this.player1.lifePoints > 0 && this.player2.lifePoints > 0);
    if (this.player2.lifePoints === -1) {
      return 1;
    } 
    return -1;
  }
}