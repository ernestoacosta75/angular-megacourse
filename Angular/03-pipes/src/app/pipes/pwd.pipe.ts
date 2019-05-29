import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pwd"
})
export class PwdPipe implements PipeTransform {
  transform(value: string, toDisplay: boolean): string {
    let encryptedValue = "";

    if (toDisplay) {
      for (let index = 0; index < value.length; index++) {
        encryptedValue += "*";
      }

      return encryptedValue;
    } else {
      return value;
    }
  }
}
