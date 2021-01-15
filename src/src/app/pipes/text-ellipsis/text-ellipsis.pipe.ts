import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elps'
})
export class TextEllipsisPipe implements PipeTransform {

  /**
   * Shorten a too long string adding trailing ellipsis
   * @param text the string to shorten
   * @param maxLen max allowed string length (should be greater than 3)
   */
  transform(text: string, maxLen: number): string {
    console.log(text, maxLen);
    if (text.length <= maxLen) {
      return text;
    }

    let result = text.valueOf().trim();

    if (result.length < maxLen)
    {
      return result;
    }

    if (result.length < 4) {
      return result;
    }

    return result
      .substring(0, maxLen)
      .substring(0, result.length - 3).concat('...');
  }

}
