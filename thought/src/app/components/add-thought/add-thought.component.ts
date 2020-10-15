import { Component, OnInit } from '@angular/core';
import { ThoughtService } from 'src/app/services/thought.service';

@Component({
    selector: 'app-add-thought',
    templateUrl: './add-thought.component.html',
    styleUrls: ['./add-thought.component.css']
})

export class AddThoughtComponent{
    thought = {
        user: '',
        title: '',
        description: ''
    };
    submitted = false;

    constructor(private thoughtService: ThoughtService) { }

    saveThought(): void {
        const data = {
            user: this.thought.user,
            title: this.thought.title,
            description: this.thought.description
        };

        this.thoughtService.create(data)
            .subscribe(
                response => {
                    console.log(response);
                    this.submitted = true;
                },
                error => {
                    console.log(error);
                });
    }

    newThought(): void {
        console.log("DEBUG");
        this.submitted = false;
        this.thought = {
            user: '',
            title: '',
            description: ''
        };
    }
}
