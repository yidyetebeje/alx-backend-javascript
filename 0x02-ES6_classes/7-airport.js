export default class AirPort {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
  get name() {
    return this._name;
  }
  get code() {
    return this._code;
  }
  set name(newName) {
    this._name = newName;
  }
  set code(newCode) {
    this._code = newCode;
  }
  display() {
    return `${this._name} (${this._code})`;
  }
}
