// Notes aboutthe conversion files:

// Q: Why are there duplicate objects for different aliases (ex. kilogram, kg)
// A: Creating a single object and assigning it to each alias increases filesize, having repeated objects doesn't matter when you're using compression

export {data} from './data';
export {length} from './length';
export {mass} from './mass';
export {temperature} from './temperature';
export {time} from './time';
