import { error } from '@sveltejs/kit';
import output from './work'

export function load() {
    if( output ) return output;
    error(404, 'Not found');
}