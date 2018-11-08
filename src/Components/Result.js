import React, { Component } from 'react';
import styles from './Result.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Result extends Component {
    handleResult=()=>{
        const { onResult } = this.props;
        onResult();
    }
    render() {
        const {handleResult} = this;
        const { max1, max2, result } = this.props;
        
        // alert(typeof(result[0].desc))
        // const list = result[max1].desc[0];
        return (
            <div>
                {
                    max1===undefined ?
                            (
                                <div>
                                    <h3>기질분석이 끝났어요!</h3>
                                    <button onClick={handleResult}>결과보기</button>
                                </div>
                            ) : (
                                <div>
                                    <h3>내 주기질은 {result[max1].ttl}</h3>
                                    <ul>
                                        {
                                            result[max1].desc.map(
                                                n => <li>{n}</li>
                                            )
                                        }
                                    </ul>
                                    
                                    <h3>내 부기질은 {result[max2].ttl}</h3>
                                    <ul>
                                        {
                                            result[max2].desc.map(
                                                n => <li>{n}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                            )
                }
            </div>
        );
    }
}

export default Result;