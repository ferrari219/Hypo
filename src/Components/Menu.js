import React, { Component } from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class menu extends Component {
    render() {
        return (
            <div className={cx('menu')}>
                <ul>
                    <li><a href="">홈으로</a></li>
                    <li><a href="">결과만보기</a></li>
                </ul>
            </div>
        );
    }
}

export default menu;