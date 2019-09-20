import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    //Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API.
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts') // refer github.com/axios/axios
        .then(response=> {
            console.group(response); // now we can see the data in console
        });
    }
    //get request happens asynchronously, it needs some time to go to the server and get the data
    //Javascript executes in a synchronous manner,so the next line is executed immediately, it won't pause until this is finished,
    // so it won't store the posts and the posts constant here. ex: const post = axios.get('https://jsonplaceholder.typicode.com/posts') 
    //This is the wanted behavior because we don't want to block the execution of our application just because we're waiting for this request to finish.
    //Axios therefore uses promises, a default javascript object introduced with ES6.

    //    So axios uses promises and GET returns a promise, so we can chain then on it,
    // '.then()' is simply a method which takes a function as the input and this function will get executed once the promise resolves.

    //The function then receives a response object as an input,this will be passed into the function automatically by axios
    // .then(response => {});

    render() {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;