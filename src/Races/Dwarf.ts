import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.dwarfInstances += 1;
  }

  static createdRacesInstances() {
    return Dwarf.dwarfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}