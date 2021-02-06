import { Paper, Box, colors } from '@material-ui/core'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';


function RecentInfo() {

  const data = {
    datasets: [
      {
        data: [50, 50],
        backgroundColor: [
          colors.red[500],
          colors.indigo[500],
        ],
        borderWidth: 1,
        // borderColor: colors.common.white,
        // hoverBorderColor: colors.common.white
      }
    ],
  };

  const options = {
    // animation: false,
    cutoutPercentage: 60,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
  };
    

    const styleInfoRate = {
        boxShadow: '0px 0px',
        position: 'absolute',
        border: '1px solid #e8eded',
        display: 'block',
        width: '270px',
        height: '148px',
        borderRadius: '0px',
        backgroundColor: '#f7f7f7',
    }

    const styleInfoP = {
        boxShadow: '0px 0px',
        position: 'absolute',
        border: '1px solid #e8eded',
        display: 'block',
        marginLeft: '270px',
        width: '240px',
        height: '148px',
        borderRadius: '0px',
        backgroundColor: '#f7f7f7',
    }

    const styleInfoChamp = {
        boxShadow: '0px 0px',
        position: 'absolute',
        border: '1px solid #e8eded',
        display: 'block',
        marginLeft: '510px',
        width: '270px',
        height: '148px',
        borderRadius: '0px',
        backgroundColor: '#f7f7f7',
    }

    const styleInfoThrowing = {
        boxShadow: '0px 0px',
        position: 'absolute',
        border: '1px solid #e8eded',
        display: 'block',
        marginLeft: '780px',
        width: '188px',
        height: '148px',
        borderRadius: '0px',
        backgroundColor: '#f7f7f7',
    }

    const styleInfoBox = {
        position: 'relative',
    }

    const styleInfoRateWin ={
        position: 'absolute',
        marginTop: '15px',
        marginLeft: '20px',
        fontSize: '13px',
        color: '#6b6b6b',
        fontWeight: 'lighter',
    }

    const styleInfoRateGraph = {
        position: 'absolute',
        marginLeft: '-90px',
        paddingTop: '40px',
    }

    const block = {
        position: 'absolute',
        // border: '1px solid #cdd2d2',
        marginLeft: '0px',
        marginTop: '35px',
        height: '110px',
        width: '148px',
    }

    const styleInfoRateWinText = {
        position: 'absolute',
        marginLeft: '-123px',
        paddingTop: '69px',
        color: '#6b6b6b',
        top: '100%',
        left: '50%',
        width: '100px',
        lineHeight: '30px',
        textAlign: 'center',
    }

    const styleInfoRateKda ={
        position: 'absolute',
        marginLeft: '0px',
        paddingTop: '56px',
        fontSize: '26px',
        fontWeight: '400',
        top: '100%',
        left: '50%',
        width: '100px',
        lineHeight: '30px',
        textAlign: 'center',
    }

    const styleInfoRateKdaUnder = {
        position: 'absolute',
        marginLeft: '2px',
        color: '#6b6b6b',
        paddingTop: '85px',
        top: '100%',
        left: '50%',
        width: '100px',
        lineHeight: '30px',
        textAlign: 'center',
        wordSpacing: '-2px',
    }
    
    const PositionPick = {
        position: 'absolute',
        marginLeft: '-110px',
        paddingTop: '10px',
        color: '#6b6b6b',
        top: '100%',
        left: '50%',
        width: '100px',
        lineHeight: '30px',
        textAlign: 'center',
    }

    const styleFirstPosition = {
        position: 'absolute',
        marginTop: '43px',
        marginLeft: '20px',
        display: 'block',
        width: '40px',
        height: '40px',
    }
    
    const styleSecondPosition = {
        position: 'absolute',
        marginTop: '93px',
        marginLeft: '20px',
        display: 'block',
        width: '40px',
        height: '40px',
    }

    const styleFPName = {
        position: 'absolute',
        marginLeft: '70px',
        paddingTop: '52px',
        fontSize: '15px',
    }

    const styleSPName = {
        position: 'absolute',
        marginLeft: '70px',
        paddingTop: '102px',
        fontSize: '15px',
    }

    const styleSpanFP = {
        position: 'absolute',
        marginLeft: '110px',
        paddingTop: '52px',
        color: '#6b6b6b',
    }

    const styleSpanSP = {
        color: '#6b6b6b',
        position: 'absolute',
        marginLeft: '110px',
        paddingTop: '102px',
    }

    const styleSpanFPW = {
        position: 'absolute',
        marginLeft: '153px',
        paddingTop: '52px',
        color: '#4a9fff',
    }

    const styleSpanSPW = {
        color: '#4a9fff',
        position: 'absolute',
        marginLeft: '153px',
        paddingTop: '102px',
    }
    //

    const styleFChampion = {
        borderRadius: "6px !important",
        position: 'absolute',
        marginTop: '8px',
        marginLeft: '20px',
        display: 'block',
        width: '40px',
        height: '40px',
    }

    const styleFChampionName = {
        position: 'absolute',
        marginTop: '9px',
        marginLeft: '70px',
        fontSize: '13px',
        fontWeight: '400',
        color: '#2e2e2e',
    }

    const styleFChampionWin = {
        position: 'absolute',
        marginTop: '28px',
        marginLeft: '70px',
        fontSize: '10px',
        fontWeight: '700',
    }

    const styleFChampionKda = {
        position: 'absolute',
        marginTop: '28px',
        marginLeft: '180px',
        fontSize: '10px',
        fontWeight: '800',
    }

    const styleSChampion = {
        borderRadius: "6px !important",
        position: 'absolute',
        marginTop: '54px',
        marginLeft: '20px',
        display: 'block',
        width: '40px',
        height: '40px',
    }

    const styleSChampionName = {
        position: 'absolute',
        marginTop: '55px',
        marginLeft: '70px',
        fontSize: '13px',
        fontWeight: '400',
        color: '#2e2e2e',
    }

    const styleSChampionWin = {
        position: 'absolute',
        marginTop: '74px',
        marginLeft: '70px',
        fontSize: '10px',
        fontWeight: '700',
    }

    const styleSChampionKda = {
        position: 'absolute',
        marginTop: '74px',
        marginLeft: '180px',
        fontSize: '10px',
        fontWeight: '800',
    }

    const styleTChampion = {
        borderRadius: "6px !important",
        position: 'absolute',
        marginTop: '100px',
        marginLeft: '20px',
        display: 'block',
        width: '40px',
        height: '40px',
    }

    const styleTChampionName = {
        position: 'absolute',
        marginTop: '101px',
        marginLeft: '70px',
        fontSize: '13px',
        fontWeight: '400',
        color: '#2e2e2e',
    }

    const styleTChampionWin = {
        position: 'absolute',
        marginTop: '120px',
        marginLeft: '70px',
        fontSize: '10px',
        fontWeight: '700',
    }

    const styleTChampionKda = {
        position: 'absolute',
        marginTop: '120px',
        marginLeft: '180px',
        fontSize: '10px',
        fontWeight: '800',
    }
    //

    const styleRecentTroll = {
        borderRadius: "6px !important",
        position: 'absolute',
        marginTop: '11px',
        marginLeft: '40px',
        display: 'block',
        width: '100px',
        height: '100px',
    }

    const styleRecentTrollCount = {
        position: 'absolute',
        marginLeft: '-10px',
        marginTop: '118px',
        width: '200px',
        lineHeight: '17px',
        textAlign: 'center',
    }


    return (
    <form>
        <Paper style={styleInfoRate}>
            <div className="InfoBox" style={styleInfoBox}>
                <div className="InfoRateWin" style={styleInfoRateWin}>20전 9승 10패</div>
                <Box
                    height={130}
                    position="relative"
                    style={styleInfoRateGraph}
                >
                <Doughnut
                    data={data}
                    options={options}
                />
                </Box>
                <div style={block}/>
                <div className='InfoRateWinText' style={styleInfoRateWinText}>50%</div>
                {/* kda 좋으면 색깔 바뀌게 */}
                <div className='InfoRateKda' style={styleInfoRateKda}>3.96</div>
                <div className='InfoRateKdaUnder' style={styleInfoRateKdaUnder}>
                    <span>5.4 / </span>
                    <span style={{color: '#ff5e5e'}}>4.4 / </span>
                    <span>11.9</span>
                </div>
            </div>
        </Paper>
        <Paper style={styleInfoP}>
            <div className="InfoBox" style={styleInfoBox}>
                <div style={PositionPick}>포지션 픽률</div>
                <img className='FirstPosition' style={styleFirstPosition} />
                <img className='SecondPosition' style={styleSecondPosition} />
                <div className='FPName' style={styleFPName}>미드</div>
                <span style={styleSpanFP}>68%</span>
                <span style={styleSpanFPW}>(승률: <span style={{fontWeight: '600'}}>50%</span>)</span>
                <div className='SPName' style={styleSPName}>서폿</div>
                <span style={styleSpanSP}>26%</span>
                <span style={styleSpanSPW}>(승률: <span style={{fontWeight: '600'}}>50%</span>)</span>
            </div>
        </Paper>
        <Paper style={styleInfoChamp}>
            <div className="InfoBox" style={styleInfoBox}>
                <img className='FChampion' style={styleFChampion} />
                <div className='FChampionName' style={styleFChampionName}>트위스티트 페이트</div>
                {/* 승률높으면 색깔 바뀌게 */}
                <div className='FChampionWin' style={styleFChampionWin}>67% <span style={{fontWeight: '500', color: '#3b3b3b'}}>(2000승 1000패)</span></div>
                {/* kda 높으면 색깔 바뀌게 */}
                <div className='FChampionKda' style={styleFChampionKda}>10.00 <span>평점</span></div>

                <img className='SChampion' style={styleSChampion} />
                <div className='FChampionName' style={styleSChampionName}>트위스티트 페이트</div>
                <div className='FChampionWin' style={styleSChampionWin}>67% <span style={{fontWeight: '500', color: '#3b3b3b'}}>(2000승 1000패)</span></div>
                <div className='FChampionKda' style={styleSChampionKda}>10.00 <span>평점</span></div>

                <img className='TChampion' style={styleTChampion} />
                <div className='FChampionName' style={styleTChampionName}>트위스티트 페이트</div>
                <div className='FChampionWin' style={styleTChampionWin}>67% <span style={{fontWeight: '500', color: '#3b3b3b'}}>(2000승 1000패)</span></div>
                <div className='FChampionKda' style={styleTChampionKda}>10.00 <span>평점</span></div>
            </div>
        </Paper>
        <Paper style={styleInfoThrowing}>
            <div className="InfoBox" style={styleInfoBox}>
                <img className='RecentTroll' style={styleRecentTroll}></img>
                {/* 고의 트롤 횟수 1회 이상시 글자 빨간색으로 변경 */}
                <div className='RecentTrollCount' style={styleRecentTrollCount}>고의 트롤 <span>10</span> 회 적발</div>
            </div>
        </Paper>
    </form>
    )
}

export default RecentInfo