import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'home-comp',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    profilePic: string = '';
    status = 'Available';
    favExpanded: boolean = false;
    onlineExpanded: boolean = true;
    offlineExpanded: boolean = true;
    banners: string[] = [
        'assets/electronjs.png',
        'assets/angular.jpeg',
    ];
    banner: string = 'assets/electronjs.png';
    counter = 1;
    contacts = [
        { "name": "富田鈴花", "status": "available" },
        { "name": "濱岸ひより", "status": "busy" },
        { "name": "高瀬愛奈", "status": "available" },
        { "name": "高本彩花", "status": "away" },
        { "name": "丹生明里", "status": "available" },
        { "name": "東村芽依", "status": "available" },
        { "name": "山口陽世", "status": "away" },
        { "name": "森本茉莉", "status": "busy" },
        { "name": "髙橋未来虹", "status": "offline" },
        { "name": "佐々木久美", "status": "offline" },
        { "name": "上村ひなの", "status": "available" },
        { "name": "河田陽菜", "status": "busy" },
        { "name": "松田好花", "status": "offline" },
        { "name": "影山優佳", "status": "offline" },
        { "name": "潮紗理菜", "status": "available" },
        { "name": "加藤史帆", "status": "busy" },
        { "name": "小坂菜緒", "status": "busy" },
        { "name": "齊藤京子", "status": "available" },
        { "name": "金村美玖", "status": "busy" },
        { "name": "佐々木美玲", "status": "available" }
    ]
    constructor() {

    }
    ngOnInit(): void {
        this.profilePic = 'url(\'assets/profile_default.png\')';
        setInterval(() => {
            this.banner = this.banners[this.counter];
            console.log(this.counter)
            this.counter = this.counter < this.banners.length-1  ? this.counter+ 1 : 0;
        }, 8000)
    }
    openChat(contact:any) {
        window.open('#/chat', contact.name, "width=800,height-600");
        // window.dispatchEvent(new Event('openChat'));
    }
}