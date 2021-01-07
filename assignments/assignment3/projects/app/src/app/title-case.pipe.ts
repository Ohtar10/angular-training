import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return null;
    
    let words = value.split(' ');
    for (var i=0; i<words.length; i++){
        let word = words[i].toLowerCase();
        if (i >0 && this.isPreposition(word))
          words[i] = word;
        else
          words[i] = this.toTitleCase(word);
    }
    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositions = ['a', 'the', 'of'];
    return prepositions.includes(word);
  }

  private toTitleCase(word: string): string {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

}
