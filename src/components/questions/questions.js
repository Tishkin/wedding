import React, {useEffect, useRef, useState} from "react";
import {question} from "./question";
import QuestionItem from "../question-item";
import {useStylesQuestions} from "./questions-style";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css'
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {Controller} from "swiper";
import useSound from "use-sound";
import fail from "../../sound/fail.mp3";
import success from '../../sound/success.mp3'


const Questions = () => {
    const classes = useStylesQuestions();
    const [swiper, setSwiper] = useState();
    const [questCount, setQuestCount] = useState(0);
    const [disabledButton, setDisabledButton] = useState(false);

    const [failPlay, { failStop, isPlayingFail }] = useSound(
        fail,
        { volume: 0.5 }
    );

    const [successPlay, { successStop, isPlayingSuccess }] = useSound(
        success,
        { volume: 0.5 }
    );


    const handlerClickNext = () => {
        debugger;
        if(isPlayingFail){
            failStop();
        }else if(isPlayingSuccess){
            successStop()
        }

        if (questCount === question.length - 1) {
            setDisabledButton(true)
        }
        swiper.slideNext();
        setQuestCount(questCount + 1);
    }
    const handleSwiper = (swiper) => {
        debugger;
        swiper.allowTouchMove = false;
        swiper.allowClick = false;
        setSwiper(swiper)
    }

    return (
        // <div className={classes.questionsContainer}>

        <Swiper
            onSlideChange={() => console.log('slide change')}
            onSwiper={handleSwiper}>
            {question.map((item) => <SwiperSlide
                key={item.id}>
                <QuestionItem failPlay={failPlay} successPlay={successPlay} question={item}/>
                <div className={classes.buttonWrap}>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        disabled={disabledButton}
                        onClick={handlerClickNext}
                    >
                        Следующий вопрос
                    </Button>
                </div>
            </SwiperSlide>)}
        </Swiper>




        // <Swiper
        //     spaceBetween={50}>
        //     <SwiperSlide>Slide 1</SwiperSlide>
        //     <SwiperSlide>Slide 2</SwiperSlide>
        //     <SwiperSlide>Slide 3</SwiperSlide>
        //     <SwiperSlide>Slide 4</SwiperSlide>
        // </Swiper>
    )
}

export default Questions;