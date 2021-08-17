import React from 'react';
import styles from './find_pw.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';

const FindPw = () => {
    return (
        <section className={styles.wrap}>
            <Header />
            <section>
                <div className={styles.div1}>비밀번호 변경</div>
                <ul className={styles.list}>
                    <li>
                        <div>아이디</div>
                        <input type="text" placeholder="아이디를 입력하세요."/>
                    </li>
                    <li>
                        <div>비밀번호 변경</div>
                        <input type="text" placeholder="아이디를 입력하세요."/>
                    </li>
                    <li>
                        <button>비밀번호 변경</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
}

export default FindPw;