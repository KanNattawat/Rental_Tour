import * as React from "react";
import './home.css';
import cartoonicon from './Image/cartoon_icon.png';
import icon1 from './Image/icon1.png';
import icon2 from './Image/icon2.png';
import icon3 from './Image/icon3.png';
import suv1 from './Image/mgzs.png';
import suv2 from './Image/crv.png';
import suv3 from './Image/cx5.png';
import van1 from './Image/xpander.png';
import van2 from './Image/alphard.png';
import van3 from './Image/commuter.png';
import bus1 from './Image/toyota coaster 1.png';
import bus2 from './Image/scania_1.png';


function Home() {
    return (
        <>
        <head>
    <title>Rental Tour</title>
    <link rel="stylesheet" type="text/css" href="style.css"></link>
</head>
<body>
    <div class="rectangle">
    <div name="header">
        <button type="button" class="button1">
             <h4 class="btn_text1">Rental Tour</h4>
            <img class="btn_icon1" src={icon1}></img>
        </button>
        <button type="button" class="button2">
            <h4 class="btn_text2">ประวัติการจอง</h4>
            <img class="btn_icon2" src={icon2}></img>
        </button>
        <button type="button" class="button3">
            <h4 class="btn_text3">ประวัติการจอง</h4>
            <img class="btn_icon3" src={icon3}></img>
        </button>
    </div>
    <div name="main_label">
        <h class="label1">ร่วมเดินทางไปกับพวกเรา!</h>
        <h class="label2">ปัญหาความเหน็ดเหนื่อยจากการเดินทางด้วยตนเอง<br />
            จะหมดไป แค่คุณใช้บริการของเรา คุณก็จะได้เดินทาง<br />
            ไปยังสถานที่ที่คุณต้องการได้ด้วยความปลอดภัยโดย<br />
            พนักงานขับรถที่มีคุณภาพของทางเรา</h>
        <img class="cartoon" src={cartoonicon}></img>
    </div>
    <div name="SUV_field">
        <h class="label_suv">รถ SUV</h>
        <img class="suv1_img" src={suv1}></img>
        <button type="button" class="suv1_btn">ดูรายละเอียดเพิ่มเติม</button>
        <img class="suv2_img" src={suv2}></img>
        <button type="button" class="suv2_btn">ดูรายละเอียดเพิ่มเติม</button>
        <img class="suv3_img" src={suv3}></img>
        <button type="button" class="suv3_btn">ดูรายละเอียดเพิ่มเติม</button>
    </div>
    <div name="VAN_field">
        <h class="label_van">รถตู้/รถครอบครัว</h>
        <img class="van1_img" src={van1}></img>
        <button type="button" class="van1_btn">ดูรายละเอียดเพิ่มเติม</button>
        <img class="van2_img" src={van2}></img>
        <button type="button" class="van2_btn">ดูรายละเอียดเพิ่มเติม</button>
        <img class="van3_img" src={van3}></img>
        <button type="button" class="van3_btn">ดูรายละเอียดเพิ่มเติม</button>
    </div>
    <div name="BUS_field">
        <h class="label_bus">รถบัส/มินิบัส</h>
        <img class="bus1_img" src={bus1}></img>
        <button type="button" class="bus1_btn">ดูรายละเอียดเพิ่มเติม</button>
        <img class="bus2_img" src={bus2}></img>
        <button type="button" class="bus2_btn">ดูรายละเอียดเพิ่มเติม</button>
    </div>
    <div name="INFO_field" class="info_field">
        <h class="info_text1">About Us</h>
    </div>
</div>
</body>
        </>
    );
}

export default Home;