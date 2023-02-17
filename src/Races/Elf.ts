import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.elfInstances += 1;
  }

  static createdRacesInstances() {
    return Elf.elfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}