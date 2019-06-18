import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('stores')
@observer
class Page1 extends Component {
    render() {
        let t = this.props.stores.TimeStore;
        let p = this.props.stores.PostStore;
        return (
            <div className='home'>

                <div>{t.current_time && t.current_time.toString()}</div>

                <div>{t.ms}</div>

                <div>
                    <button onClick={t.getTime}>getTime</button>
                </div>

                <div>{p.current_time && p.current_time.toString()}</div>

                <div>
                    <button onClick={p.getTime}>getTime from PS</button>
                </div>

                <div>
                    <button onClick={p.fetchItems}>Get Post</button>
                </div>

                <div>
                    {p.items && p.items.map(item => {
                        let created = new Date(item.created);
                        return (
                            <div key={item.id}>
                                <div>{item.title}</div>
                                <div>{item.content}</div>
                                <div>
                                    {created.getFullYear()}/
                                    {created.getMonth() + 1}/
                                    {created.getDate()}
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Page1;