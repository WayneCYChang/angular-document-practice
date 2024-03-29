import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'fetchJson',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {

  private cachedData: any = null;
  private cachedUrl = '';

  constructor(private http: HttpClient) { }
  transform(url: string): any {
    if (url !== this.cachedUrl) {
      console.log('1:' + this.cachedData);
      console.log('2:' + this.cachedUrl);
      this.cachedData = null;
      this.cachedUrl = url;
      console.log('3:' + this.cachedData);
      console.log('4:' + this.cachedUrl);
      this.http.get(url).subscribe(result => this.cachedData = result);
    }

    return this.cachedData;
  }

}
