import {Container} from 'inversify';
import "reflect-metadata"
import {ThrowableWeapon, Warrior, Weapon} from "./interfaces";
import {Types} from "./types";
import {Commando, Katana, Ninja, Shuriken} from "./entities";

const mycontainer = new Container();
mycontainer.bind<Warrior>(Types.Warrior).to(Ninja);
mycontainer.bind<Weapon>(Types.Weapon).to(Katana);
mycontainer.bind<ThrowableWeapon>(Types.ThrowableWeapon).to(Shuriken);

export {mycontainer};