import { heroes } from '../data/heroes';

const getHeroById = (id) => heroes.find(hero => hero.id === id)
    
const heroesByOwner = owner => heroes.filter(hero => hero.owner === owner)

console.log(getHeroById(1))
console.log(heroesByOwner('Marvel'))

export {getHeroById }