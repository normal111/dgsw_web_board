import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom';

@inject('stores')
@observer
class PostNew extends Component {
    state = {
        title: '',
        content: '',
        userId: 1,
        goToMain: false
    };

    async componentDidMount() {
        if (this.props.postid && this.props.stores.PostStore.viewItem !== null) {
            console.log(this.props.postid);
            this.setState({
                ...this.state,
                id: this.props.stores.PostStore.viewItem.id,
                title: this.props.stores.PostStore.viewItem.title,
                content: this.props.stores.PostStore.viewItem.content,
            })
        }
    }

    render() {
        if (this.state.goToMain)
            return <Redirect to='/'/>;
        return (
            <div className='board board-add-item'>
                <div className='board-add-item-header'>
                    <div>제목</div>
                    <div><input value={this.state.title} onChange={this.updateTitle}/></div>
                </div>
                <div>
                    내용
                    <div>
                        <textarea value={this.state.content} onChange={this.updateContent}/>
                    </div>
                </div>
                <div>
                    <button onClick={this.addNewPost}>확인</button>
                </div>
            </div>
        );
    }

    addNewPost = async () => {
        if (this.props.postid && await this.props.stores.PostStore.editPost(this.state)) {
            await this.props.stores.PostStore.fetchItems();
            this.setState({
                ...this.state,
                goToMain: true
            });
        } else if (await this.props.stores.PostStore.addNewPost(this.state)) {
            await this.props.stores.PostStore.fetchItems();
            this.setState({
                ...this.state,
                goToMain: true
            });
        }
    };

    updateTitle = event => {
        this.setState({
            ...this.state,
            title: event.target.value
        });
    };

    updateContent = event => {
        this.setState({
            ...this.state,
            content: event.target.value
        });
    };
}

export default PostNew;