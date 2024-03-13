import React,{useRef,useState,useEffect} from 'react'
import "./App.css"
import {FaHome} from "react-icons/fa"
import {IoStatsChartSharp} from "react-icons/io5"
import {IoCard} from "react-icons/io5"
import {IoBuild} from "react-icons/io5"
import {IoPerson} from "react-icons/io5"
import {IoMdSettings} from "react-icons/io"
import {IoIosNotifications} from "react-icons/io"
import {IoWallet} from "react-icons/io5"
import {BsGlobe2} from "react-icons/bs"
import {IoDocumentText} from "react-icons/io5"
import {IoCart} from "react-icons/io5"
import {FaArrowRightLong} from "react-icons/fa6"
import Data from "./img/Data.svg"
import 'react-circular-progressbar/dist/styles.css'
import Graph from "./img/Graph.png"
import {IoIosRocket} from "react-icons/io"
import {FaCheck} from "react-icons/fa6"
import Iconss383838 from "./img/iconss383838.svg"
import Layer from './img/Layer.svg'
import Getname from "./img/getname.svg"
import Getname2 from "./img/getname2.svg"
import Getname3 from "./img/getname3.svg"
import Getname4 from "./img/getname4.svg"
import Avatar from './img/Avatar 5.svg'
import Avatar1 from "./img/Avatar1.svg"
import Avatar2 from "./img/Avatar3.svg"
import Avatar3 from "./img/Avatar4.svg"
import Avatar4 from "./img/Avatar10.svg"
import {IoMdNotifications} from "react-icons/io"
import {FaHtml5} from "react-icons/fa"
import {FaDropbox} from "react-icons/fa6"
import CanvasJSReact from '@canvasjs/react-charts'
import {useNavigate} from 'react-router-dom'
import logo from "./img/Logo.png"
import {MdDelete} from "react-icons/md";
import {IoIosAddCircleOutline} from "react-icons/io";
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS=CanvasJSReact.CanvasJS
var CanvasJSChart=CanvasJSReact.CanvasJSChart
const App=() => {
  const options={

    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title: {
      text: "Trip Expenses"
    },
    data: [{
      type: "pie",
      indexLabel: "{label}: {y}%",
      startAngle: -90,
      dataPoints: [
        {y: 20,label: "Airfare"},
        {y: 24,label: "Food & Drinks"},
        {y: 20,label: "Accomodation"},
        {y: 14,label: "Transportation"},
        {y: 12,label: "Activities"},
        {y: 10,label: "Misc"}
      ]
    }]
  }
  const secondElementRef1=useRef(null)
  const secondElementRef2=useRef(null)
  const secondElementRef3=useRef(null)
  const secondElementRef4=useRef(null)
  const secondElementRef5=useRef(null)
  const percentage=66
  const data=new Date
  const hafta=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  const [selectedDiv,setSelectedDiv]=useState(null)
  const handleDivClick=(divIndex) => {
    setSelectedDiv(divIndex)
  }
  const scrollToFirstElement1=() => {
    if(secondElementRef1.current) {
      secondElementRef1.current.scrollIntoView({behavior: 'smooth'})
    }
  }
  const scrollToFirstElement2=() => {
    if(secondElementRef2.current) {
      secondElementRef2.current.scrollIntoView({behavior: 'smooth'})
    }
  }
  const scrollToFirstElement3=() => {
    if(secondElementRef3.current) {
      secondElementRef3.current.scrollIntoView({behavior: 'smooth'})
    }
  }
  const scrollToFirstElement4=() => {
    if(secondElementRef4.current) {
      secondElementRef4.current.scrollIntoView({behavior: 'smooth'})
    }
  }
  const scrollToFirstElement5=() => {
    if(secondElementRef5.current) {
      secondElementRef5.current.scrollIntoView({behavior: 'smooth'})
    }
  }
  let navigate=useNavigate()
  // const [divlar,setDivlar]=useState(Array.from({length: 29},(_,index) => index))

  // const deleteDiv=(item2) => {
  //   let updatedDivlar=divlar.filter((item,i) => item != item2 )
  //   setDivlar(updatedDivlar)
  //   console.log(updatedDivlar);
  // }
  const [showInputs,setShowInputs]=useState(false)
  const [input1,setInput1]=useState('')
  const [input2,setInput2]=useState('')
  const [savedData,setSavedData]=useState(JSON.parse(localStorage.getItem('savedData'))||[])

  const handleAdd=() => {
    setShowInputs(true)
  }

  const handleSave=() => {
    setSavedData([...savedData,{input1,input2}])
    setInput1('')
    setInput2('')
    setShowInputs(false)

  }

  const handleDelete=(index) => {
    const newData=[...savedData]
    newData.splice(index,1)
    setSavedData(newData)
  }

  useEffect(() => {
    localStorage.setItem('savedData',JSON.stringify(savedData))
  },[savedData])


  // const divs=Array.from({length:49},(_,index) => (
  //   <div onClick={() => {
  //     navigate("/Category/"+index)
  //   }} key={index} className="box" id={index} >Tovar+</div>
  // ));
  return (
    <>
      <div className='App'>
        <div className='App2' ref={secondElementRef1} >
          <div className='set'>
            <img src={logo} className='logo' alt="" />
            {/* <IoMdSettings className='settin' /> */}
            {/* <IoIosNotifications className='settin' /> */}
          </div>
          <div className="chaild1" id='chaild12'
            onClick={() => {
              return (
                handleDivClick(1),
                scrollToFirstElement1()
              )
            }}
            style={{
              borderRadius: selectedDiv===1? "25px":"0px",
              boxShadow: selectedDiv===1? "0px 0px 5px rgb(203, 202, 202)":"0px 0px 0px rgb(203, 202, 202)",


            }}
          >
            <div className="home_div"
              style={{
                boxShadow: selectedDiv===1? "0px 0px 0px rgb(203, 202, 202) ":"0px 0px 5px rgb(203, 202, 202)",
                backgroundColor: selectedDiv===1? "#4FD1C5":"white"
              }}
            >
              < FaHome style={
                {
                  color: selectedDiv===1? "white":"#4FD1C5"
                }
              }

                className='Home' />
            </div>
            <p className='boshqaruv_text'>Boshqaruv usuli</p>
          </div>

          <div className="chaild2" id='j1'
            onClick={() => {
              return (
                handleDivClick(2),
                scrollToFirstElement2()
              )
            }}
            style={{
              borderRadius: selectedDiv===2? "25px":"0px",
              boxShadow: selectedDiv===2? "0px 0px 5px rgb(203, 202, 202)":"0px 0px 0px rgb(203, 202, 202)",
            }}>
            <div className='chart1'
              style={{
                boxShadow: selectedDiv===2? "0px 0px 0px rgb(203, 202, 202) ":"0px 0px 5px rgb(203, 202, 202)",
                backgroundColor: selectedDiv===2? "#4FD1C5":"white"
              }}
            >
              <IoStatsChartSharp
                style={{
                  color: selectedDiv===2? "white":"#4FD1C5"
                }}
                className='chart' />
            </div>
            <p className='boshqaruv_textt'>Do'konlar</p>
          </div>
          <div className="chaild2"
            onClick={() => {
              return (
                handleDivClick(3),
                scrollToFirstElement3()
              )
            }}
            style={{
              borderRadius: selectedDiv===3? "25px":"0px",
              boxShadow: selectedDiv===3? "0px 0px 5px rgb(203, 202, 202)":"0px 0px 0px rgb(203, 202, 202)",
            }}
          >
            <div className='chart1'
              style={{
                boxShadow: selectedDiv===3? "0px 0px 0px rgb(203, 202, 202) ":"0px 0px 5px rgb(203, 202, 202)",
                backgroundColor: selectedDiv===3? "#4FD1C5":"white"
              }}
            >
              <IoCard
                style={{
                  color: selectedDiv===3? "white":"#4FD1C5"
                }}
                className='chart' />
            </div>
            <p className='boshqaruv_textt'>Tovarlar</p>
          </div>
          <div className="chaild2"
            onClick={() => {
              return (
                handleDivClick(4),
                scrollToFirstElement4()
              )
            }}
            style={{
              borderRadius: selectedDiv===4? "25px":"0px",
              boxShadow: selectedDiv===4? "0px 0px 5px rgb(203, 202, 202)":"0px 0px 0px rgb(203, 202, 202)",
            }}>
            <div className='chart1'
              style={{
                boxShadow: selectedDiv===4? "0px 0px 0px rgb(203, 202, 202) ":"0px 0px 5px rgb(203, 202, 202)",
                backgroundColor: selectedDiv===4? "#4FD1C5":"white"
              }}
            >
              <IoBuild
                style={{
                  color: selectedDiv===4? "white":"#4FD1C5"
                }}
                className='chart' />
            </div>
            <p className='boshqaruv_textt'>Sozlamalar</p>
          </div>
          <div className="chaild2"
            onClick={() => {
              return (
                handleDivClick(5),
                scrollToFirstElement5()
              )
            }}
            style={{
              borderRadius: selectedDiv===5? "25px":"0px",
              boxShadow: selectedDiv===5? "0px 0px 5px rgb(203, 202, 202)":"0px 0px 0px rgb(203, 202, 202)",
            }}
          >
            <div className='chart1'
              style={{
                boxShadow: selectedDiv===5? "0px 0px 0px rgb(203, 202, 202) ":"0px 0px 5px rgb(203, 202, 202)",
                backgroundColor: selectedDiv===5? "#4FD1C5":"white"
              }}
            >
              <IoPerson
                style={{
                  color: selectedDiv===5? "white":"#4FD1C5"
                }}
                className='chart' />
            </div>
            <p className='boshqaruv_textt'>Yangilik</p>
          </div>


        </div>
        <div className="App4" ref={secondElementRef5}>
          <div className="div1">
            <div>
              <p className='ptext_55'>Bugungi daromat</p>
              <span className='foyda'>$53,00</span>
              <span id='foyda_i'>+55%</span>
            </div>
            <div className='wallaet78787'>
              <IoWallet className='wallet' />
            </div>
          </div>
          <div className="div1">
            <div>
              <p className='ptext_55' id='textid45'>Bugungi foydalanuvchilar</p>
              <span className='foyda'>$2,300</span>
              <span id='foyda_i'>+5%</span>
            </div>
            <div className='wallaet787877'>
              <BsGlobe2 className='wallet' />
            </div>
          </div>
          <div className="div1">
            <div>
              <p className='ptext_55'>Yangi do'konlar</p>
              <span className='foyda'>$3,052</span>
              <span id='foyda_ii'>-14%</span>
            </div>
            <div className='wallaet78787'>
              <IoDocumentText className='wallet' />
            </div>
          </div>
          <div className="div1">
            <div>
              <p className='ptext_55'>Umumiy savdo</p>
              <span className='foyda'>$50,00</span>
              <span id='foyda_i'>+55</span>
            </div>
            <div className='wallaet78787'>
              <IoCart className='wallet' />
            </div>
          </div>

        </div>
        <div className='App3'>
          <div className='App3_id'>
            <p className='mobile'>Mobil ilovaga yangilik joylash</p>
            <h1 className='mobilee'>Stroymarket.uz</h1>
            <p className='mobile'>Yangiliklarni joylash orqali foydalanuvchilarni<br /> doimo xabardor qiling</p>
            <div id='rigth'>
              <p className='rigth'>Joylash</p>
              <FaArrowRightLong />
            </div>
          </div>
          <div className='App5'>
          </div>
          <div className='App6'>
            <p className='joylash'>Joylash</p>
          </div>
        </div>
        <div className="App7" ref={secondElementRef4}>
          <div className='chart_id'>
            <div className='chart_img34'>
              <p className='sotuv'>Sotuvlar statistikasi</p>
              <div>
                <span className='yillar'>2023 yilga nisbatan</span><span className='yillar2'>(+45)ko'proq</span>
              </div>
            </div>
            <div className='CanvasJSChart1'>
              <CanvasJSChart options={options} className="jschart" />
            </div>
          </div>
          <div className='Graph'>
            <p className='Statistika'>Statistika</p>
            <span className='nisbatan'>Oxirgi haftaga nisbatan</span><span className='dokon23'>(+23) ta do'kon</span>
            <div className='card_iconst'>
              <div className='img_cartd_id'>
                <div className="svg_icons">
                  <div className='wallet11'>
                    <div className='wallet111'><IoWallet className='wallet1' /></div><span className='dokon456'>Do'kon</span>
                  </div>
                  <p className='p252'>252ta</p>
                  <progress id="bar" value="50" max="100"></progress>
                </div>
                <div className="svg_icons">
                  <div className='wallet11'>
                    <div className='wallet111'><IoIosRocket className='wallet1' /></div><span className='dokon456'>To'lovlar</span>
                  </div>
                  <p className='p252'>28xil</p>
                  <progress id="bar" value="70" max="100"></progress>
                </div>
              </div>
              <div className='img_cartd_id'>
                <div className="svg_icons">
                  <div className='wallet11'>
                    <div className='wallet111'><IoCart className='wallet1' /></div><span className='dokon456'>Tovarlar</span>
                  </div>
                  <p className='p252'>140ta</p>
                  <progress id="bar" value="30" max="100"></progress>
                </div>
                <div className="svg_icons">
                  <div className='wallet11'>
                    <div className='wallet111'><IoBuild className='wallet1' /></div><span className='dokon456'>Items</span>
                  </div>
                  <p className='p252'>300</p>
                  <progress id="bar" value="50" max="100"></progress>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="App8">
          <div className='table_id'>
            <div className='app88'>
              <p className='dokonlar543' ref={secondElementRef2} >Do'konlar</p>
              <div className='FaCheck4366' >
                <div className='FaCheck43'><FaCheck className='FaCheck' /></div>
                <p className='hisobot'>Shu oy 30ta yangi do'kon </p>
              </div>
            </div>
            <table style={{borderCollapse: 'collapse'}}>
              <thead>
                <tr>
                  <th id='table_id_id_name' className='dokonlar'>Do'konlar</th>
                  <th id='table_id_id_name' className='td12' >Adminlar</th>
                  <th id='table_id_id_name' className='SAVDO345'>SAVDO AYLANMASI(UZS)</th>
                  <th id='table_id_id_name' style={{textAlign: "center"}} >OYLIK TO’LOV (UZS)</th>
                  <th id='table_id_id_name' style={{textAlign: "center"}}>TO’LOV SANASI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='td' id='table_id_id_name'>
                    <div className='Layer'>
                      <img src={Layer} alt="" />
                      <p>Layer</p>
                    </div>
                  </td>

                  <td id='table_id_id_name'>
                    <div className='avatar'>
                      <img className='rasm3' src={Avatar} alt="" />
                      <img className='rasm2' src={Avatar1} alt="" />
                      <img className='rasm1' src={Avatar2} alt="" />
                      <img className='rasm4' src={Avatar3} alt="" />
                      <img className='rasm5' src={Avatar4} alt="" />
                    </div>
                  </td>
                  <td id='table_id_id_name' className='name_id_cla' >57 000 000</td>
                  <td id='table_id_id_name' className='name_id_cla' >500 000</td>
                  <td id='table_id_id_name' className='name_id_cla' >21.03.2024</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className='td' id='table_id_id_name'>
                    <div className='Layer'>
                      <img src={Iconss383838} alt="" />
                      <p>Story qurilish</p>
                    </div>
                  </td>

                  <td id='table_id_id_name'>
                    <div className='avatar'>
                      <img className='rasm1' src={Avatar} alt="" />
                      <img className='rasm2' src={Avatar2} alt="" />
                      {/* <img className='rasm3' src={Avatar3} alt="" /> */}
                      {/* <img className='rasm4' src={Avatar4} alt="" /> */}
                      {/* <img className='rasm5' src={Avatar1} alt="" /> */}
                    </div>
                  </td>
                  <td id='table_id_id_name' className='name_id_cla' >57 000 000</td>
                  <td id='table_id_id_name' className='name_id_cla' >500 000</td>
                  <td id='table_id_id_name' className='name_id_cla' >21.03.2024</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className='td' id='table_id_id_name'>
                    <div className='Layer'>
                      <img src={Getname} alt="" />
                      <p>Xo’jalik mollari market</p>
                    </div>
                  </td>

                  <td id='table_id_id_name'>
                    <div className='avatar'>
                      <img className='rasm1' src={Avatar} alt="" />
                      <img className='rasm2' src={Avatar} alt="" />
                      {/* <img className='rasm3' src={Avatar} alt="" /> */}
                      {/* <img className='rasm4' src={Avatar} alt="" /> */}
                    </div>
                  </td>
                  <td id='table_id_id_name' className='name_id_cla' >57 000 000</td>
                  <td id='table_id_id_name' className='name_id_cla' >500 000</td>
                  <td id='table_id_id_name' className='name_id_cla' >21.03.2024</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className='td' id='table_id_id_name'>
                    <div className='Layer'>
                      <img src={Getname2} alt="" />
                      <p>Stroymarket Chig'atoy</p>
                    </div>
                  </td>

                  <td id='table_id_id_name'>
                    <div className='avatar'>
                      <img className='rasm1' src={Avatar} alt="" />
                      <img className='rasm2' src={Avatar2} alt="" />
                      <img className='rasm3' src={Avatar3} alt="" />
                      <img className='rasm4' src={Avatar4} alt="" />
                    </div>
                  </td>
                  <td id='table_id_id_name' className='name_id_cla' >57 000 000</td>
                  <td id='table_id_id_name' className='name_id_cla' >500 000</td>
                  <td id='table_id_id_name' className='name_id_cla' >21.03.2024</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className='td' id='table_id_id_name'>
                    <div className='Layer'>
                      <img src={Getname3} alt="" />
                      <p>Stroymart Chilonzor</p>
                    </div>
                  </td>

                  <td id='table_id_id_name'>
                    <div className='avatar'>
                      <img className='rasm1' src={Avatar} alt="" />
                      <img className='rasm2' src={Avatar1} alt="" />
                      <img className='rasm3' src={Avatar2} alt="" />
                      <img className='rasm4' src={Avatar3} alt="" />
                      <img className='rasm5' src={Avatar4} alt="" />
                    </div>
                  </td>
                  <td id='table_id_id_name' className='name_id_cla' >57 000 000</td>
                  <td id='table_id_id_name' className='name_id_cla' >500 000</td>
                  <td id='table_id_id_name' className='name_id_cla' >21.03.2024</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className='td' >
                    <div className='Layer'>
                      <img src={Getname4} alt="" />
                      <p>Stroymart Nurafshon</p>
                    </div>
                  </td>

                  <td >
                    <div className='avatar'>
                      <img className='rasm1' src={Avatar} alt="" />
                      <img className='rasm2' src={Avatar} alt="" />
                      {/* <img className='rasm3' src={Avatar} alt="" /> */}
                      {/* <img className='rasm4' src={Avatar} alt="" /> */}
                    </div>
                  </td>
                  <td className='name_id_cla' >57 000 000</td>
                  <td className='name_id_cla' >500 000</td>
                  <td className='name_id_cla' >21.03.2024</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="App888" >
            <div className="online12">
              <p className='online'>Online buyurmat qabul qilgan do’konlar</p>
              <span className='shuoy'>Shu oy</span>
              <span className='shuoy1' > +30%</span>
            </div>
            <div className="html">
              <div className="appbar4546">
                <div className='notification1'>
                  <IoMdNotifications className='IoMdNotifications' />
                  <div className='chiziq12345678'>

                  </div>
                </div>
                <div className='notification2'>
                  <p className='p_stroymarket'>Stroymart</p>
                  <p className='vaqt'>{data.getDate()} {hafta[data.getDay()].slice(0,3)} {`${data.getHours()}:${data.getMinutes()}`} PM</p>
                </div>
              </div>
              <div className="appbar4546">
                <div className='notification1'>
                  <FaHtml5 className='IoMdNotificationss' />
                  <div className='chiziq12345678'>

                  </div>
                </div>
                <div className='notification2'>
                  <p className='p_stroymarket'>Story qurilish</p>
                  <p className='vaqt'>{data.getDate()} {hafta[data.getDay()].slice(0,3)} {`${data.getHours()}:${data.getMinutes()}`} PM</p>
                </div>
              </div>
              <div className="appbar4546">
                <div className='notification1'>
                  <IoCart className='IoMdNotificationss1' />
                  <div className='chiziq12345678'>

                  </div>
                </div>
                <div className='notification2'>
                  <p className='p_stroymarket'>Story qurilish</p>
                  <p className='vaqt'>{data.getDate()} {hafta[data.getDay()].slice(0,3)} {`${data.getHours()}:${data.getMinutes()}`} PM</p>
                </div>
              </div>
              <div className="appbar4546">
                <div className='notification1'>
                  <IoCard className='IoMdNotificationss2' />
                  <div className='chiziq12345678'>

                  </div>
                </div>
                <div className='notification2'>
                  <p className='p_stroymarket'>Story qurilish</p>
                  <p className='vaqt'>{data.getDate()} {hafta[data.getDay()].slice(0,3)} {`${data.getHours()}:${data.getMinutes()}`} PM</p>
                </div>
              </div>
              <div className="appbar4546">
                <div className='notification1'>
                  <FaDropbox className='IoMdNotificationss44' />
                  <div className='chiziq12345678'>

                  </div>
                </div>
                <div className='notification2'>
                  <p className='p_stroymarket'>Story qurilish</p>
                  <p className='vaqt'>{data.getDate()} {hafta[data.getDay()].slice(0,3)} {`${data.getHours()}:${data.getMinutes()}`} PM</p>
                </div>
              </div>
              <div className="appbar4546">
                <div className='notification1'>
                  <img className='IoMdNotificationss55' src={Layer} alt="" />
                  <div className='chiziq12345678'>
                  </div>
                </div>
                <div className='notification2'>
                  <p className='p_stroymarket'>Story qurilish</p>
                  <p className='vaqt'>{data.getDate()} {hafta[data.getDay()].slice(0,3)} {`${data.getHours()}:${data.getMinutes()}`} PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Tovarlar' ref={secondElementRef3}>
            {showInputs&&(
              <div className='blur'>
              <input type="Imput1" className='Mahsulot' placeholder="Mahsulot" value={input1} onChange={(e) => setInput1(e.target.value)} required />
              <input type="Number" className='Mahsulot' placeholder="Summa" value={input2} onChange={(e) => setInput2(e.target.value)} required />
              <button className='handleSave' onClick={handleSave}>save</button>
              </div>
            )}
          <div className='tovarlar2' style={{
            filter: showInputs==true? "blur(8px)":"blur(0px)"
            
          }}>
            <div className='a1'>
              <div className='app88'>
                <p className='dokonlar543' ref={secondElementRef2} >Do'konlar</p>
                <div className='FaCheck4366' >
                  <div className='FaCheck43'><FaCheck className='FaCheck' /></div>
                  <p className='hisobot'>Shu oy {}ta yangi do'kon </p>
                </div>
              </div>
             
            </div>
            <div className="container">
              <div key="add" className='boox '>
                <p>Tovar</p>
                <div className='buty'>
                  <IoIosAddCircleOutline className='navigator_buttonid43' onClick={handleAdd} />
                </div>
              </div>
              {savedData.map((data,index,) => (
                <div key={index} className='box'>
                  <MdDelete className='data_name43' onClick={() => handleDelete(index)} />
                  <p className='p_text_id' >{`${data.input1}`}{index}</p>
                  <p className='p_text_id' >{`${data.input2}`}{index}</p>
                  {/* <div className="box_id"> */}
                    <button className='Category' onClick={() => {navigate("/Category/"+(index+1))}}>Keyingisi</button>
                  {/* </div> */}
                </div>
              ))}
            </div>
          </div>
        
        </div>

{}
        <div className="App9">
          <div className='app98'>           
          </div>
        </div>
      </div>
    </>
  )
}
export default App
