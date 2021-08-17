import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './find_id.module.css';

const FindId = () => {
    return (
        <section className={styles.wrap}>
            <Header />
            <section>
                <div className={styles.div1}>아이디 찾기</div>
                <ul className={styles.list}>
                    <li>
                        <div>이메일</div>
                        <input type="text" placeholder="이메일을 입력하세요."/>
                    </li>
                    <li>
                        <div>전화번호</div>
                        <input type="text" placeholder="전화번호를 입력하세요."/>
                    </li>
                    <li>
                        <button>아이디 찾기</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
}
            
    

export default FindId;