import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalize"
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, all: boolean = true): string {
    //Converting the whole string to lowercase
    value = value.toLowerCase();

    //Separating the words of the string
    let stringArr = value.split(" ");

    //Converting the whole words orthe first character of each word in uppercase
    if (all) {
      for (let i in stringArr) {
        stringArr[i] = stringArr[i].toUpperCase();
      }
    } else {
      for (let i in stringArr) {
        stringArr[i] =
          stringArr[i][0].toUpperCase() + stringArr[i].substring(1);
      }
    }

    return stringArr.join(" ");
  }
}
