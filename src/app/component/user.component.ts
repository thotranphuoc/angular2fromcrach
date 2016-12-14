import { Component } from '@angular/core';
import { PostsService } from '../service/posts.service';

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html'
})
export class UserComponent {
    title: string;
    name: string;
    email: string;
    address: IAddress;
    hobby: string;
    hobbies: string[];
    showHobbies: boolean;
    posts: IPost[];

    constructor(private postsService: PostsService) {
        this.title = 'app works!';
        this.name = 'Jade Tran';
        this.email = 'thotranphuoc@outlook.com';
        this.address = {
            street: '62 Trung An, Cu Chi',
            city: 'Saigon',
            state: 'South of VietNam'
        }
        this.hobbies = [ 'Music', 'Sport', 'Movie'];
        this.showHobbies = false;

        this.postsService.getPosts().subscribe(
            // posts => console.log(posts)
            posts => this.posts = posts
        )
    }

    onToggleHobbies(){
        this.showHobbies = !this.showHobbies
    }

    addHobby(){
        this.hobbies.push(this.hobby);
        this.hobby = '';
    }

    deleteHobby(i){
        this.hobbies.splice(i,1);
    }
}

interface IAddress {
    street: string;
    city: string;
    state: string;
}

interface IPost {
    id: number;
    title: string;
    body: string;
}