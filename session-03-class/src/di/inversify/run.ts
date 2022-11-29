import "reflect-metadata";
import { Driver, Lawyer } from "../interfaces";
import { container } from "./provide";
import types from './types'

export function run (){
    const lawyer = container.get<Lawyer>(types.lawyer);
    lawyer.goToCourt('Court 1');
}