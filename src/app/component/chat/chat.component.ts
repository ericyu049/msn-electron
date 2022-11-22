import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'chat-comp',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
    profilePic: string = '';
    status = 'Available'
    ngOnInit() {
        this.profilePic = 'url(\'assets/profile_default.png\')';

    }
}