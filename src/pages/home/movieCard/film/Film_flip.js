import React from 'react'
import { history } from '../../../../util/settings/config';
import styles from './Film_flip.module.scss'



export default function film_flip({ item }) {

console.log(item)
    return (       
        <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
                <div className={styles.flip_card_front}>
                    <img src={item.hinhAnh} alt={item.name} style={{ width: 300, height: 300 }} />
                </div>
                <div className={styles.flip_card_back}>
                    <h1 className='h3'>{item.tenPhim}</h1>
                    <p className='text-justify px-2'>{item.moTa}</p>
                   
                </div>
            </div>
            <div onClick={() => {
                history.push(`/detail/${item.maPhim}`);
             }} className="bg-orange-300 text-center cursor-pointer py-2 bg-indigo-300 my-2 text-success-50 font-bold" >ĐẶT VÉ</div>
        </div>


    )
}
