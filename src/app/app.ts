import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from './Services/api.service';

interface shortUrl {
  longUrl : string;
  shortUrl : string;
  isPrivate? : boolean;
  clickCount?: number;
  code:string;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

  protected readonly title = signal('TinyUrl-UI');
  longUrl: string = ''; 
  shortUrl: string = '';
  isPrivate : boolean = false;
  isNotValidUrl : boolean = false;
  copiedIndex: number = -1;
  searchText : string = '';
  urlList : shortUrl[] = [];

  constructor(private apiservice : ApiService){

    }

    ngOnInit(){
      this.FetchAllRecords();
    }

    shortenUrl() {

    if (!this.longUrl.startsWith('http://') && !this.longUrl.startsWith('https://')) {
      this.isNotValidUrl = true;
      return;
    }

    const data = {
      originalUrl: this.longUrl,
      isPrivate: this.isPrivate
    };

    this.apiservice.insertData(data).subscribe({
      next: (res) => {
        this.FetchAllRecords();
        this.longUrl = '';
        this.isPrivate = false;
        this.isNotValidUrl = false;
        console.log('Response:', res);
      },
      error: (err) => {
        this.isNotValidUrl = true;
        console.error(err);
      }
    });

    
  }

  copyToClipboard(url: string, index: number) {
  navigator.clipboard.writeText(url)
    .then(() => {
      this.copiedIndex = index;
    })
  }

  filteredUrls() : shortUrl[] {
    const text = this.searchText.trim().toLowerCase();
    if (!text) return this.urlList;
    return this.urlList.filter(url =>
      url.longUrl.toLowerCase().includes(text)
    );
  }

  FetchAllRecords(){
     this.apiservice.FetchAllRecords().subscribe({
      next: (res) => {
        //this.shortUrl = res.shortUrl;
        this.urlList = res;
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  UpdateData(code : string, event? : MouseEvent){
    this.apiservice.UpdateData(code).subscribe({
      next: (res) => {
        this.FetchAllRecords();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  DeleteData(code : string){
    this.apiservice.DeleteData(code).subscribe({
      next: (res) => {
        this.FetchAllRecords();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
