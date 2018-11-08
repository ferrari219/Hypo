import React, { Component } from "react";
import styles from './Qinfo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Qbox extends Component {
  handleClick = e => {
    const { i, onCounter, onNext } = this.props;
    //alert(i);
    onCounter(e);
    onNext(i);
  };
  render() {
    const { id, a1, a2, a3, a4 } = this.props.info;
    const { handleClick } = this;
    return (
      <div className={cx('q-info')}>
        <div className={cx('top')}>
          <h2>
              <span>각 열 4단어 중</span>
              본인에게 가장 잘 맞는
              <em>단어 하나를 선택해주세요.</em>
          </h2>
          <p>(만약, 자신에게 맞는 단어가 없다면 가장 유사한 단어를 고르세요.)</p>
        </div>
        <div className={cx("q-box")}>
          {/* <h2>{`Q${id})`}</h2> */}
          <ul>
            <li>
              <input
                type="radio"
                name={id}
                id={`${id}-1`}
                onClick={handleClick}
                value="dahyul"
              />
              <label for={`${id}-1`}>{a1}</label>
            </li>
            <li>
              <input
                type="radio"
                name={id}
                id={`${id}-2`}
                onClick={handleClick}
                value="damjp"
              />
              <label for={`${id}-2`}>{a2}</label>
            </li>
            <li>
              <input
                type="radio"
                name={id}
                id={`${id}-3`}
                onClick={handleClick}
                value="ooul"
              />
              <label for={`${id}-3`}>{a3}</label>
            </li>
            <li>
              <input
                type="radio"
                name={id}
                id={`${id}-4`}
                onClick={handleClick}
                value="jumak"
              />
              <label for={`${id}-4`}>{a4}</label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Qbox;
