import styled from 'styled-components';

export const Dashcard = styled.div`
    width: 33.333%;

> .boxCompany{
    border-radius: 4px;
    padding: 10px;
    margin: 15px 15px 50px;
    font-size: 20px;
    color: #eee;
    font-family: 'Bayon', sans-serif;
    height: 150px;
}
>.boxCompany > h3{
    font-weight: 100;
    font-size: 40px;
    color: #f99;
}

.green{
    background:#0f0;
    box-shadow: 0px 0px 2px rgb(0 255 0 / 25%);
}

.blue{
    background:#00f;
    box-shadow: 0px 0px 2px rgb(0 0 255 / 25%);
}

.red{
    background:#f00;
    box-shadow: 0px 0px 2px rgb(255 0 0 / 25%);
}

.none{
    background:#000;
    box-shadow: 0px 0px 2px rgb(0 0 0 / 25%);
}

`