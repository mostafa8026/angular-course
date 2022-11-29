import { Container } from "inversify";
import { BaladNavigator, MarriageLawyer, NeshanNavigator, SnappDriver, TapsiDriver } from "../classes";
import types from './types'

const container = new Container();

container.bind(types.driver).to(TapsiDriver);
container.bind(types.lawyer).to(MarriageLawyer);
container.bind(types.navigator).to(BaladNavigator);

export { container };