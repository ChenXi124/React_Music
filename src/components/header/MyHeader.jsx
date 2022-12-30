import React,{useState,useEffect} from "react";
import style from './index.module.scss';
import {Input} from "antd";
import {NavLink} from "react-router-dom";
import {Row,Col} from "antd";
export default function MyHeader() {
    return (
        <div>
            <Row gutter={30} >
                <Col  span={4}>
                    <NavLink to='/' >
                        <div >音乐logo  &nbsp;   </div>
                    </NavLink>
                </Col>
                <Col span={10}>
                    <Row  >
                        <Col span={4}>
                            <NavLink to={'/'}  >发现音乐</NavLink>
                        </Col>
                        <Col span={4}>
                            <NavLink   to='/my'>私人MV</NavLink>
                        </Col>
                        <Col span={4}>
                            <NavLink   to='/focus'>视频</NavLink>
                        </Col>
                        <Col span={4}>
                            <NavLink   to={'/store/product'}>商城</NavLink>
                        </Col>
                        <Col span={4}>
                            <a href='https://music.163.com/nmusician/web/index#/' target='_blank'  rel="noopener noreferrer">音乐人</a>
                        </Col>

                    </Row>
                </Col>
                <Col span={10}>
                    <Row gutter={20}>
                        <Col span={10}style={{ textAlign:"right" }} >
                            <Input
                                placeholder='音乐/视频/电台/用户'
                                style={{
                                    width:"158px",
                                    height:"32px",
                                    borderRadius:"50px"
                                }}
                                // onSearch={ (value,event)=> value ? this.props.history.replace(`/search?s=${value}&type=1`) :null }
                            />
                        </Col>
                        <Col span={6}>
                            <div className='creatorCenter'>创作者中心</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/*头部：推荐，排行榜，歌单，主播电台，歌手，新碟上架*/}
            <Row gutter={30} className={style.musicTop}>
                <Col  span={2}>
                </Col>
                <Col span={10}>
                    <Row  className={style.music_top}>
                        <Col span={3}className={style.musicTitle}>
                            <NavLink to={'/'} className={style.em}>推荐</NavLink>
                        </Col>
                        <Col span={3}className={style.musicTitle}>
                            <NavLink to={'/Charts'} className={style.em}>排行榜</NavLink>
                        </Col>
                        <Col span={3}className={style.musicTitle}>
                            <NavLink to={'/Playlists'} className={style.em}>歌单</NavLink>
                        </Col>
                        <Col span={4}className={style.musicTitle}>
                            <NavLink to={'/MusicRadio'} className={style.em}>主播电台</NavLink>
                        </Col>
                        <Col span={3}className={style.musicTitle}>
                            <NavLink to={'/Artists'} className={style.em}>歌手</NavLink>
                        </Col>
                        <Col span={4}className={style.musicTitle}>
                            <NavLink to={'/NewAlbums'} className={style.em}>新碟上架</NavLink>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </div>
    )
}
