import React, {useEffect, useState} from "react";
import style from './index.module.scss';
import api from "../../../api";
import {Carousel} from "antd";
//推荐
export default function Discover() {
    const [banner, setBanner] = useState([]);
    const [index, setIndex] = useState(0);

    async function getBannerData() {
        let res = await api.getBanner();
        console.log(res.data.banners, '轮播图')
        setBanner(res.data.banners)
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        getBannerData()
    }, [])
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div>
            <Carousel autoplay>

                    {
                        banner.map((item,index)=>{
                            return    <div key={index}><img src={item.imageUrl} /> </div>
                        })
                    }



            </Carousel>


        </div>
    )

}