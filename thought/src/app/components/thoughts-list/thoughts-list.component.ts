import { Component, OnInit } from '@angular/core';
import { ThoughtService } from 'src/app/services/thought.service';
import { InfiniteScrollComponent } from '../infinite-scroll/infinite-scroll.component';
@Component({
    selector: 'app-thoughts-list',
    templateUrl: './thoughts-list.component.html',
    styleUrls: ['./thoughts-list.component.css'],
})
export class ThoughtsListComponent implements OnInit {

    thoughts: any;
    currentThought = null;
    currentIndex = -1;
    title = '';

    constructor(private thoughtService: ThoughtService) {}

    ngOnInit(): void {
        this.retrieveThoughts();
    }

    retrieveThoughts(): void {
        this.thoughtService.getAll()
            .subscribe(
                data => {
                    this.thoughts = data;
                    console.log(data);
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

    // setActiveThought(thought, index): void {
    //     this.currentThought = thought;
    //     this.currentIndex = index;
    // }

    searchTitle(): void {
        this.thoughtService.findByTitle(this.title)
            .subscribe(
                data => {
                    this.thoughts = data;
                    console.log(data);
                },
                error => {
                    console.log(error);
                });
    }
}