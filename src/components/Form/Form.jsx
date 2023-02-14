import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    const {tg} = useTelegram()

    useEffect(() => {
        tg?.MainButton?.setParams({
            text: 'Отправить данные'
        })
    }, []);

    useEffect(() => {
        if (!street || !country) {
            tg?.MainButton?.hide()
        } else {
            tg?.MainButton?.show()

        }
    }, [country, street]);

    const onSendData = () => {
        const data = {
            country,
            city,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data))
    }
    useEffect(() => {
        tg.WebApp.onEvent('mainButtonClicked',onSendData)

        return () => {
            tg.WebApp.offEvent('mainButtonClicked',onSendData)
        }

    }, []);


    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input className={'input'} type={"text"} placeholder={'Страна'} value={country} onChange={onChangeCountry}/>
            <input className={'input'} type={"text"} placeholder={'Город'} value={city} onChange={onChangeCity}/>
            <input className={'input'} type={"text"} placeholder={'Улица'} value={street} onChange={onChangeStreet}/>
            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={'legal'}>Юр.лицо</option>
                <option value={'physical'}>Физ.лицо</option>
            </select>
        </div>
    );
};

export default Form;
