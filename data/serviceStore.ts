import { IStep } from '../interfaces/IStep';
import { TripAdvisor } from '../classes/TripAdvisor';
import { BlaBlaCar } from '../classes/BlaBlaCar';
export const serviceStore: {[key: string]: IStep } = {
    'tripadvisor': new TripAdvisor(),
    'blablaCar': new BlaBlaCar()
};