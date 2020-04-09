import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes: any[]): unknown {
    return allHeroes.filter(hero => hero.canFly);
  }

}
