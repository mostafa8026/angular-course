import {inject, injectable} from 'inversify'
import {ThrowableWeapon, Warrior, Weapon} from "./interfaces";
import {Types} from "./types";

@injectable()
class Katana implements Weapon {
    hit(): string {
        return "hit!";
    }

}

@injectable()
class Shuriken implements ThrowableWeapon {
    throw(): string {
        return "ThrowableWeapon!";
    }

}

@injectable()
class Ninja implements Warrior {
    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    constructor(@inject(Types.Weapon) katana: Weapon, @inject(Types.ThrowableWeapon) shuriken: ThrowableWeapon) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    fight(): string {
        return "I'm a Ninja and fight with " + this._katana.hit();
    }

    sneak(): string {
        return this._shuriken.throw();
    }

}

@injectable()
class Commando implements Warrior{
    private _katana: Weapon;
    private _throwableWeapon: ThrowableWeapon;
    constructor(@inject(Types.Weapon) katana: Weapon, @inject(Types.ThrowableWeapon) throwableWeapon: ThrowableWeapon) {
        this._katana = katana;
        this._throwableWeapon = throwableWeapon;
    }

    fight(): string {
        return "I'm a commando and fight with "+ this._katana.hit();
    }

    sneak(): string {
        return "I'm a commando and sneak with "+ this._throwableWeapon.throw();
    }

}

export{Ninja, Commando, Katana, Shuriken };