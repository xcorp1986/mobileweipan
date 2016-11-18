import React from 'react';
import  style from './css/MiddleButton.css';
import {
  Icon
} from 'amazeui-touch';

export default class MiddleButton extends React.Component {
    render() {
        return (
            <div className={'margin-v'} >
                <div className={style.one + " "+"text-center"}>当前价格</div>
                <div className={style.two + " "+"text-center"}>40012<Icon name={'up'}/></div>
            </div>
        );
    }
}