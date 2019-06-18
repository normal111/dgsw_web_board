import {observable, action} from 'mobx';
import axios from 'axios';

import TimeStore from './TimeStore';

class PostStore {
    static __instance = null;
    static getInstance() {
        if(PostStore.__instance === null)
            PostStore.__instance = new PostStore();
        return PostStore.__instance;
    }
    constructor() {
        PostStore.__instance = this;
    }
    @observable post_time = null;
    @action getTime = async () => this.post_time = await new Date().getTime();
    getSomething = () => TimeStore.getTime();

    @observable items = null;
    @action fetchItems = async () => {
        try {
            let response = await axios({
                url: 'http://localhost:8080/api/board',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'get',
                timeout: 3000
            });
            // console.log(response);
            if(response.status === 200) {
                this.items = response.data;
            }
        } catch(ex) {
            alert(ex.toString());
        }
    };


    @observable viewItem = null;
    @action fetchItem = async (postid) => {
        try {
            this.viewItem = null;
            let response = await axios({
                url: `http://localhost:8080/api/board/${postid}`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'get',
                timeout: 3000
            });
            console.log(response);
            if(response.status === 200) {
                setTimeout(
                    () => this.viewItem = response.data,
                    100
                );
            }
        } catch(ex) {
            alert(ex.toString());
        }
    };

    @action addNewPost = async (newPost) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/board`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'post',
                timeout: 3000,
                data: JSON.stringify(newPost)
            });
            return (response.status === 200)
        } catch(ex) {
            alert(ex.toString());
            return false;
        }
    };

    @action editPost = async (post) => {
        console.log(post);
        try {
            let response = await axios({
                url: `http://localhost:8080/api/board`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'put',
                timeout: 3000,
                data: JSON.stringify(post)
            });
            return (response.status === 200)
        } catch(ex) {
            alert(ex.toString());
            return false;
        }
    };

    @action deletePost = async (postId) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/board/${postId}`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'delete',
                timeout: 3000,
            });
            return (response.status === 200)
        } catch(ex) {
            alert(ex.toString());
            return false;
        }
    }
}

export default PostStore.getInstance();