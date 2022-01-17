import styled from 'styled-components';

export const Dashboard = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
`;

export const DashStats = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
`;

export const DashGrid = styled.div`
    width: 100%;
    display: flex;  
    flex-direction: column;
    padding:20px;
`;

export const CoinTiles = styled.div`
    width: 100%;
    padding: 25px 20px;
    background:#36393f;
    box-shadow: 0px 0px 2px rgb(0 0 0 / 25%);
    border-radius: 4px;
    margin: 10px 0px;
`;

export const InfoCoins = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #eee;
    font-weight: 600;
    padding: 0px 10px;
    align-items: center;

    > .nome{
        flex:0.3;
        text-align: center;
    }

    > .quantity{
        flex:2;
        text-align: center;
    }

    > .valuation{
        flex:0.13;
        text-align: center;
        padding: 5px 10px;
        border-radius: 5px;
    }

    > .price{
        flex:0.5;
        text-align: center;
    }

    > .logo{
        width: 40px;
        height: 40px;
        border-radius 50%;
        background-color: #ccc;
    }

    > .up{
        background-color: #700;
    }

    > .down{
        background-color: #070;
    }

    > .upValue{
        color: #f00;
    }

    > .downValue{
        color: #0f0;
    }

`