import React, {useState, useEffect} from 'react'
import {Paper} from '@material-ui/core'
import shopimg from './images/shopimg.png'
import p0 from './images/0.png'
import p1 from './images/1.png'
import p2 from './images/2.png'
import p3 from './images/3.png'
import p4 from './images/4.png'
import p5 from './images/5.png'
import p6 from './images/6.png'
import p7 from './images/7.png'
import p8 from './images/8.png'
import p9 from './images/9.png'
import p10 from './images/10.png'
import p11 from './images/11.png'
import p12 from './images/12.png'
import p13 from './images/13.png'
import p14 from './images/14.png'
import p15 from './images/15.png'
import p16 from './images/16.png'
import p17 from './images/17.png'
import p18 from './images/18.png'
import p19 from './images/19.png'
import success from './images/success.png'

import failimg from './images/fail.png'
import itemprotect1 from './images/itemprotect1.png'
import itemprotect2 from './images/itemprotect2.png'
import sell from './images/sell.png'
import shopout from './images/shopout.png'
import warp9 from './images/warp9.png'
import warp13 from './images/warp13.png'
import warp14 from './images/warp14.png'


function Game() {

    const styleHeader = {
        position: 'relative',
        width: '1000px',
        margin: '0 auto',
        padding: '20px 0 0px 0',
    }

    const styleGameBox = {
        marginTop: '-5px',
        paddingLeft: '30px',
        paddingBottom: '15px',
        backgroundColor: '#eeeeee',
        height: '800px',
        borderRadius: '10px',
        userSelect: 'none',
    }

    const styleGameBack = {
        position: 'absolute',
        border: '1px solid #cdd2d2',
        marginTop: '20px',
        marginLeft: '0px',
        display: 'block',
        width: '940px',
        height: '750px',
        boxShadow: '0px 0px',
    }

    const Title = {
        position: 'absolute',
        marginTop: '30px',
        marginLeft: '300px',
        fontSize: '50px',
        fontWeight: 'bold',
        color: '#00baa4',
        pointerEvents: 'none',
    }

    const Start = {
        position: 'absolute',
        marginTop: '325px',
        marginLeft: '210px',
        fontSize: '60px',
        fontWeight: 'bold',
        // backgroundColor: 'eeeeee',
        // outline: '1px #eeeeee'
        border: '0px',
        backgroundColor: '#ffffff',
    }

    const ColorChange = {
        color : '#ff3d3d',
    }

    const logo = {
        position: 'absolute',
        marginTop: '20px',
        marginLeft: '20px',
        display: 'block',
        height: '50px',         //나중에 height, width 바꾸기
        width: '130px',
    }

    const shop = {
        position: 'absolute',
        marginTop: '45px',
        marginLeft: '720px',
        display: 'block',
        height: '50px',         //나중에 height, width 바꾸기
        width: '130px',
        backgroundColor: '#ffffff',
        outline: '0px',
        border: '0px',
        boxShadow: '0px 0px',
    }

    const shopImg = {
        position: 'absolute',
        marginTop: '-8px',
        marginLeft: '-5px',
        display: 'block',
        height: '50px',
        width: '50px',
    }


    const shopIn = {
        positon: 'absolute',
        marginTop: '1px',
        marginLeft: '40px',
        fontSize: '20px',
    }

    const price = {
        position: 'absolute',
        marginTop: '100px',
        marginLeft: '35px',
        display: 'block',
        height: '130px',
        width: '80%',
        // backgroundColor: '#eeeeee',
    }

    const priceReinforce = {
        position: 'absolute',
        marginTop: '20px',
        marginLeft: '10px',
        fontSize: '25px',
        fontWeight: 'bold',
        pointerEvents: 'none',
    }

    const priceSell = {
        position: 'absolute',
        marginTop: '70px',
        marginLeft: '10px',
        fontSize: '25px',
        fontWeight: 'bold',
        pointerEvents: 'none',
    }

    const Main = {
        position: 'absolute',
        marginTop: '200px',
        marginLeft: '220px',
        display: 'block',
        height: '510px',
        width: '500px',
        pointerEvents: 'none',
        // backgroundColor: '#eeeeee',
    }

    const MainImg = {
        position: 'absolute',
        marginTop: '0px',
        marginLeft: '50px',
        display: 'block',
        height: '400px',
        width: '400px',
    }

    const MainName = {
        position: 'absolute',
        marginTop: '400px',
        marginLeft: '-150px',
        fontSize: '32px',
        fontWeight: 'bold',
        width: '800px',
        // backgroundColor: '#ff9494',
        textAlign: 'center',
    }

    const MainPercent = {
        position: 'absolute',
        marginTop: '450px',
        marginLeft: '-150px',
        fontSize: '22px',
        color: '#666666',
        width: '800px',
        textAlign: 'center',
    }

    const money ={
        position: 'absolute',
        marginTop: '690px',
        marginLeft: '0px',
        fontSize: '25px',
        fontWeight: 'bold',
        // backgroundColor: '#eeeeee',
        textAlign: 'right',
        width: '98%',
        pointerEvents: 'none',
    }

    const reinforceBtn = {
        position: 'absolute',
        marginTop: '320px',
        marginLeft: '730px',
        backgroundColor: '#474747',
        width: '150px',
        height: '150px',
        borderRadius: '80px',
        outline: '0px',
        border: '1px solid',
    }

    const reinforceBtn2 = {
        marginTop: '0px',
        marginLeft: '32px',
        width: '70px',
        height: '70px',
        borderRadius: '40px',
        border: '0px',
        backgroundColor: '#737373',
    }

    const protect = {
        position: 'absolute',
        marginTop: '690px',
        marginLeft: '20px',
        fontSize: '25px',
        fontWeight: 'bold',
        pointerEvents: 'none',
    }

    /////////////////////

    
    const shopImg2 = {
        position: 'absolute',
        marginTop: '-11px',
        marginLeft: '-5px',
        display: 'block',
        height: '50px',
        width: '50px',
    }

    const shopOut = {
        positon: 'absolute',
        marginTop: '1px',
        marginLeft: '52px',
        fontSize: '17px',
    }

    const shopProtect ={
        position: 'absolute',
        marginTop: '115px',
        marginLeft: '40px',
        fontSize: '18px',
        color: '#8f8f8f',
        pointerEvents: 'none',
    }

    const shopMoney ={
        position: 'absolute',
        marginTop: '88px',
        marginLeft: '40px',
        fontSize: '18px',
        color: '#8f8f8f',
        pointerEvents: 'none',
    }

    const shopUp = {
        position: 'absolute',
        marginTop: '105px',
        marginLeft: '355px',
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#9c9c9c',
        pointerEvents: 'none',
    }

    const shopThing = {
        position: 'absolute',
        marginTop: '140px',
        marginLeft: '10px',
        // backgroundColor: '#eeeeee',
        width: '920px',
        height: '600px',
    }

    const shop1 = {
        position: 'absolute',
        marginTop: '10px',
        marginLeft: '20px',
        // backgroundColor: '#ffffff',
        width: '880px',
        height: '100px',
    }

    const shop1Img ={
        position: 'absolute',
        marginTop: '5px',
        marginLeft: '10px',
        display: 'block',
        width: '90px',
        height: '90px',
    }

    const shop1Info = {
        position: 'absolute',
        marginTop: '30px',
        marginLeft: '120px',
        fontSize: '25px',
        fontWeight: 'bold',
        pointerEvents: 'none',
    }

    const shop1Price = {
        position: 'absolute',
        marginTop: '30px',
        marginLeft: '560px',
        fontSize: '25px',
        fontWeight: 'bold',
        pointerEvents: 'none',
    }
    
    const shop1Buy = {
        position: 'absolute',
        marginTop: '30px',
        marginLeft: '770px',
        outline: '1px',
        border: '0px',
        width: '60px',
        height: '40px',
        fontWeight: 'bold',
        backgroundColor: '#7a7a7a',
        color: '#ffffff',
        borderRadius: '10px',
        fontSize: '17px',
    }
    
    const shop2 = {
        position: 'absolute',
        marginTop: '130px',
        marginLeft: '20px',
        // backgroundColor: '#ffffff',
        width: '880px',
        height: '100px',
    }

    const shop3 = {
        position: 'absolute',
        marginTop: '250px',
        marginLeft: '20px',
        // backgroundColor: '#ffffff',
        width: '880px',
        height: '100px',
    }

    const shop4 = {
        position: 'absolute',
        marginTop: '370px',
        marginLeft: '20px',
        // backgroundColor: '#ffffff',
        width: '880px',
        height: '100px',
    }

    const shop5 = {
        position: 'absolute',
        marginTop: '490px',
        marginLeft: '20px',
        // backgroundColor: '#ffffff',
        width: '880px',
        height: '100px',
    }
    

    //////////////////

    const stylefail = {
        position: 'absolute',
        marginTop: '600px',
        marginLeft: '30px',
        fontSize: '29px',
        fontWeight: 'bold',
        color: '#fc2d2d',
        pointerEvents: 'none',
    }

    const stylefailImg ={
        position: 'absolute',
        marginTop: '200px',
        marginLeft: '285px',
        height: '350px',
        width: '350px',
        display: 'block',
        outline: '0px',
        border: '0px',
        // border: '1px',
        backgroundColor: '#ffffff'
    }

    const relive = {
        position: 'absolute',
        marginTop: '125px',
        marginLeft: '215px',
        fontSize: '20px',
        color: '#ababab',
        pointerEvents: 'none',
    }

    const relivelast = {
        position: 'absolute',
        marginTop: '125px',
        marginLeft: '257px',
        fontSize: '20px',
        color: '#ababab',
        pointerEvents: 'none',
    }
    
    const relive2 = {
        position: 'absolute',
        marginTop: '175px',
        marginLeft: '707px',
        fontSize: '15px',
        color: '#ababab',

        pointerEvents: 'none',
    }

    const relive3 = {
        // backgroundColor: '#eeeeee',
        position: 'absolute',
        marginTop: '88px',
        marginLeft: '640px',
        fontSize: '15px',
        color: '#ababab',
        width: '200px',
        textAlign: 'center',
        pointerEvents: 'none',
    }

    const reliveBtn1 = {
        position: 'absolute',
        marginTop: '113px',
        marginLeft: '710px',
        backgroundColor: '#474747',
        width: '60px',
        height: '60px',
        borderRadius: '80px',
        outline: '0px',
        border: '1px solid',
    }

    const reliveBtn2 = {
        marginTop: '0px',
        marginLeft: '8px',
        width: '30px',
        height: '30px',
        borderRadius: '40px',
        border: '0px',
        backgroundColor: '#737373',
    }

    const lastWord = {
        position: 'absolute',
        marginTop: '580px',
        marginLeft: '177px',
        fontWeight: 'bold',
        fontSize: '25px',
        pointerEvents: 'none',

    }

    const lastImg ={
        position: "absolute",
        marginTop: '130px',
        marginLeft: '100px',
        display: 'block',
        height: '420px',
        width: '740px',
    }

    const stylefailimg2 = {
        height: '100%',
        width: '100%',
        border: '1px solid #000000'
    }



    /////////////////

    useEffect(() => {
        setstartPage(true);
        setMoneys(1000000);
        setcount(0)
        setshopPage(true);
        setfail(false);
        setprotectCount(0);
    }, []);

    const [startPage, setstartPage] = useState(true);
    const [shopPage, setshopPage] = useState(true);
    const [Moneys, setMoneys] = useState(1000000);
    const [count, setcount] = useState(0);
    const [fail, setfail] = useState(false);
    const [protectCount, setprotectCount] = useState(0)

    const shopHandler = (event) => {
        event.preventDefault();
        setshopPage(!shopPage);
    }

    const sellHandler = (event) => {
        event.preventDefault();
        setMoneys(Moneys + arr1[count][3]);
        setcount(0);
    }

    const startHandler = (event) => {
        event.preventDefault();
        setstartPage(!startPage);
    }

    const moneyHandler = (event) => {
        event.preventDefault();
        if (Moneys >= arr1[count][2]){
            if(Math.random()<arr1[count][1]){
                setMoneys(Moneys- arr1[count][2])
                setcount(count + 1)
            } else{
                setfail(!fail)
            }
        }
    }

    const failHandler = (event) => {
        event.preventDefault();
        setfail(!fail);
        setcount(0);
    }

    const reliveHandler = (event) => {
        event.preventDefault();
        if(protectCount >= arr1[count][4]){
            setprotectCount(protectCount - arr1[count][4])
            setfail(!fail);
        }
    }

    const Buy1Handler = (event) => {
        event.preventDefault();
        if(Moneys >= 1000000){
            setMoneys(Moneys - 1000000);
            setprotectCount(protectCount + 1);
        }
    }

    const Buy2Handler = (event) => {
        event.preventDefault();
        if(Moneys >= 3000000){
            setMoneys(Moneys - 3000000);
            setprotectCount(protectCount + 3);
        }
    }

    const Buy3Handler = (event) => {
        event.preventDefault();
        if(Moneys >= 1000000){
            setMoneys(Moneys - 1000000);
            setcount(9);
            setshopPage(!shopPage);
        }
    }

    const Buy4Handler = (event) => {
        event.preventDefault();
        if(Moneys >= 7000000){
            setMoneys(Moneys - 7000000);
            setcount(13);
            setshopPage(!shopPage);
        }
    }

    const Buy5Handler = (event) => {
        event.preventDefault();
        if(Moneys >= 10000000){
            setMoneys(Moneys - 10000000);
            setcount(14);
            setshopPage(!shopPage);
        }
    }

    const arr1 = [
            ['+0 라면 먹는 유미', 1, 300, 0, 1, p0],
            ['+1 RPG 리신', 1, 300, 150, 1, p1],
            ['+2 많고 많은 이즈리얼', 1, 500, 400, 1, p2],
            ['+3 qqq 리븐', 0.95, 500, 600, 1, p3],
            ['+4 데스 그랩 블리츠크랭크', 0.95, 1000, 800, 1, p4],
            ['+5 복귀 R 트위스티드 페이트', 0.95, 1500, 1600, 1, p5],
            ['+6 백포지션 레오나', 0.90, 2000, 3500, 1, p6],
            ['+7 탑 베인', 0.90, 2000, 6100, 1, p7],
            ['+8 탑 드레이븐', 0.90, 3000, 10000, 1, p8],
            ['+9 과학자 야스오', 0.90, 5000, 20000, 1, p9],
            ['+10 수학자 요네', 0.90, 10900, 35100, 1, p10],
            ['+11 부활 텔포 람머스', 0.85, 20000, 160000, 1, p11],
            ['+12 NO DIE ME CARRY 마스터이', 0.85, 35000, 350000, 1, p12],
            ['+13 픽창부터 입 터는 이렐리아', 0.80, 55000, 1000000, 2, p13],
            ['+14 창 적중률 8% 니달리', 0.75, 100000, 3000000, 3, p14],
            ['+15 0/3/0 탑 루시안', 0.70, 180000, 7500000, 4, p15],
            ['+16 쿵..쾅 아 죄송 알리스타', 0.65, 300000, 14200000, 7, p16],
            ['+17 정화 유체화 누누', 0.60, 300000, 20000000, 9, p17],
            ['+18 블루 먹는 ad 티모', 0.54, 500000, 30000000, 10, p18],
            ['+19 심신미약 예민 롤 유저', 0.50, 800000, 47500000, 1000000, p19],
    ];

    //////

    return (
        <div style={styleHeader}>
            <div style={styleGameBox}>
                <Paper style={styleGameBack}>
                    <div style= {Title}>팀운 강화하기</div> {/* 나중에 그림으로 넣기 */}

                    {startPage &&
                    <button className={Start} style={Start} onMouseOver={ColorChange} onClick={startHandler}>
                        팀운 강화 시작하기
                    </button>
                    }
                    <img style={logo}/>
                    
                    {!fail &&
                    <div>
                    {!startPage &&
                    <div>
                        {shopPage && 
                        <div>
                            {(count !== 20) &&
                            <div>
                            {(count<1) &&
                            <button style={shop} onClick={shopHandler}>
                                <img style={shopImg} src={shopimg} />
                                <div style={shopIn}>상점</div>
                            </button>
                            }
                            {(count>=1) && 
                            <button style={shop} onClick={sellHandler}>
                                <img style={shopImg} src={sell} />
                                <div style={shopIn}>판매</div>
                            </button>
                            }
                            <div style={Main}>
                                <img style={MainImg} src={arr1[count][5]}/>
                                <div style={MainName}>{arr1[count][0]}</div>
                                <div style={MainPercent}>성공률 {arr1[count][1] * 100}%</div>
                            </div>
                            <div style={price}>
                                <div style={priceReinforce}>
                                    강화 비용: <span>{arr1[count][2]}</span>원
                                </div>
                                <div style={priceSell}>
                                    판매 비용: <span>{arr1[count][3]}</span>원
                                </div>
                            </div>
                            <div style={money}><span>{Moneys} </span>원</div>
                            <button style={reinforceBtn} onClick={moneyHandler}>
                                <div style={reinforceBtn2}/>
                            </button>
                            <div style={protect}>방지권: {protectCount}</div>
                            </div>
                            }
                        </div>
                        }

                        {!shopPage &&
                            <div>
                                <button style={shop} onClick={shopHandler}>
                                    <img style={shopImg2} src={shopout} />
                                    <div style={shopOut}>나가기</div>
                                </button>
                                <div style={shopProtect}>소유 방지권: {protectCount}개</div>
                                <div style={shopMoney}>돈: {Moneys}원</div>
                                <div style={shopUp}>WELCOME TO SHOP</div>
                                <div style={shopThing}>
                                    <div style={shop1}>
                                        <img style={shop1Img} src={itemprotect1}/>
                                        <div style={shop1Info}>깨짐 방지권 X 1</div>
                                        <div style={shop1Price}>1,000,000 원</div>
                                        <button style={shop1Buy} onClick={Buy1Handler}>구매</button>
                                    </div>
                                    <div style={shop2}>
                                        <img style={shop1Img} src={itemprotect2}/>
                                        <div style={shop1Info}>깨짐 방지권 X 3</div>
                                        <div style={shop1Price}>2,500,000 원</div>
                                        <button style={shop1Buy} onClick={Buy2Handler}>구매</button>
                                    </div>
                                    <div style={shop3}>
                                        <img style={shop1Img} src={warp9}/>
                                        <div style={shop1Info}>+9강 워프권</div>
                                        <div style={shop1Price}>1,000,000 원</div>
                                        <button style={shop1Buy} onClick={Buy3Handler}>구매</button>
                                    </div>
                                    <div style={shop4}>
                                        <img style={shop1Img} src={warp13}/>
                                        <div style={shop1Info}>+13강 워프권</div>
                                        <div style={shop1Price}>7,000,000 원</div>
                                        <button style={shop1Buy} onClick={Buy4Handler}>구매</button>
                                    </div>
                                    <div style={shop5}>
                                        <img style={shop1Img} src={warp14}/>
                                        <div style={shop1Info}>+14강 워프권</div>
                                        <div style={shop1Price}>10,000,000 원</div>
                                        <button style={shop1Buy} onClick={Buy5Handler}>구매</button>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                    }
                    </div>
                    }
                    
                    {fail &&
                    <div>
                        {(count !== 19) && 
                        <div>
                            <div style={relive}>
                                방지권이 있다면 오른쪽 버튼을 눌러 살릴 수 있습니다.
                            </div>
                            <div style={relive2}>
                                ({arr1[count][4]}개 소모)
                            </div>
                            <div style={relive3}>
                                (소유 방지권: {protectCount})
                            </div>
                            <button style={reliveBtn1} onClick={reliveHandler}>
                                <div style={reliveBtn2}/>
                            </button>
                        </div>
                        }
                        {(count === 19) &&
                            <div style={relivelast}>
                                마지막 단계는 방지권을 사용하실 수 없습니다.
                            </div>
                        }
                        <button style={stylefailImg} onClick={failHandler}>
                            <img style={stylefailimg2} src={failimg}/>
                        </button>
                        <div style={stylefail}>
                            강화가 실패하여 미쳐 고의 트롤 유저 손아귀를 벗어나지 못했습니다.
                        </div>
                        
                    </div>
                    }

                    {(count === 20) &&
                    <div>
                        <img style={lastImg} src={success}/>
                        <div style ={lastWord}>
                            당신은 고의 트롤 유저들의 손아귀를 벗어났습니다! <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이로써 팀운이 비약적으로 상승합니다! <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;건승하세요!
                        </div>
                    </div>
                    }
                </Paper>
            </div>
        </div>
    )
}

export default Game