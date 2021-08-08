import Frog from './frog.model';

export default class FrogState {
  frogs: Array<Frog>;
  frogError: Error;
}

export const initializeState = (): FrogState => {
  return { frogs: Array<Frog>(), frogError: null };
};
