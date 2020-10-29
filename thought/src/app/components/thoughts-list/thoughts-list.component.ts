import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ThoughtService } from 'src/app/services/thought.service';

@Component({
    selector: 'app-thoughts-list',
    templateUrl: './thoughts-list.component.html',
    styleUrls: ['./thoughts-list.component.css'],
})
export class ThoughtsListComponent implements OnInit {

    // thoughts: any;
    thoughts = [];
    currentThought = null;
    currentIndex = -1;
    title = '';

    loadCount = 0;

    constructor(private thoughtService: ThoughtService, private spinner: NgxSpinnerService) {}

    ngOnInit(): void {
        this.retrieveThoughts();
    }

    retrieveThoughts(): void {
        this.spinner.show();
        this.thoughtService.getLimit(this.loadCount)
            .subscribe(
                data => {
                    for(let i in data){
                        i.toString();
                        this.thoughts.push(data[i]);
                    }
                    this.loadCount += 20;
                    console.log(this.thoughts);
                    this.spinner.hide();
                },
                error => {
                    console.log(error);
                });
    }

    refreshList(): void {
        this.retrieveThoughts();
        this.currentThought = null;
        this.currentIndex = -1;
    }

    OnScroll(): void{
        this.spinner.show();
        this.LoadNextPost();
    }

    LoadNextPost(): void {
        this.thoughtService.getLimit(this.loadCount)
            .subscribe(
                data => {
                    for(let i in data){
                        i.toString();
                        this.thoughts.push(data[i]);
                    }
                    this.loadCount += 20;
                    this.spinner.hide();
                    console.log(this.thoughts);
                },
                error => {
                    console.log(error);
                });   
    }
}