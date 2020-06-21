import React from 'react'
import CalendarContainer from './calendarcontainer'
import CalendarItem from './calendaritem'
import { store } from '../store'
import './dashboard.css'

let date = new Date();
let dateNum = date.getDay();
let datSeq = []
let monthSeq = []

function returnDay(num) {
    switch(num) {
        case 0:
            return "SUN"
        case 1: 
            return "MON"
        case 2:
            return "TUE"
        case 3: 
            return "WED"
        case 4:
            return "THU"
        case 5: 
            return "FRI"
        case 6: 
            return "SAT"
        case 7:
            return "SUN"
        case 8: 
            return "MON"
        case 9:
            return "TUE"
        case 10: 
            return "WED"
        case 11:
            return "THU"
        case 12: 
            return "FRI"
        case 13: 
            return "SAT"
        case 14: 
            return "SUN"
    }
}

console.log(returnDay(dateNum))
let monthDate = date.getDate()
for (let i = 0; i < 7; i++) {
    datSeq.push(returnDay(dateNum + i))
    monthSeq.push(date.getDate(date.setDate(date.getDate() + i)))
    date = new Date()
    monthDate = date.getDate()
}

console.log(monthSeq)
const unsubscribe = store.subscribe(handleChange)
function handleChange() {

}

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }  

    componentDidMount() {
        const unsubscribe = store.subscribe(() => {
            console.log("store updated")
            this.forceUpdate()
        })        
    }

    storeGen = (val) => {
        let arr = []
        if (typeof store.getState() == 'undefined') {
            return arr;
        }
        store.getState().forEach(inlet => {
            console.log(val)
            if (inlet.day.substring(0, 3).toUpperCase() == val) {
                inlet.list.forEach(obj => {
                    arr.push(<CalendarItem name={obj.title} author="Bob Ross" />)
                })
            }
        })
        return arr;
    }

    render() {
        return (
            <div className= "main-dashboard-div">
                <h1 className= "main-dashboard-title">Dashboard</h1>
                <div className= "separator-line"></div>
                <div className= "calendar-container-div">
                
                <CalendarContainer day= {datSeq[0]} dayNum= {monthSeq[0]}>
                    {
                        this.storeGen(datSeq[0])
                    }
                </CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day= {datSeq[1]} dayNum={monthSeq[1]}>
                    {
                        this.storeGen(datSeq[1])
                    }
                </CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day= {datSeq[2]} dayNum={monthSeq[2]}>
                    {
                        this.storeGen(datSeq[2])
                    }
                </CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day= {datSeq[3]} dayNum={monthSeq[3]}>
                    {
                        this.storeGen(datSeq[3])
                    }
                </CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day= {datSeq[4]} dayNum={monthSeq[4]}>
                    {
                        this.storeGen(datSeq[4])
                    }
                </CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day={datSeq[5]} dayNum={monthSeq[5]}>
                    {
                        this.storeGen(datSeq[5])
                    }
                </CalendarContainer>
                <div className= "separator-line"></div>
                <CalendarContainer day={datSeq[6]} dayNum={monthSeq[6]}>
                    {
                        this.storeGen(datSeq[6])
                    }
                </CalendarContainer>
                <div className= "shopping-cart-container">
                    <p className= "material-icons" style= {{margin: "0px", fontSize: "35px", marginLeft: "2px", marginTop: "2px"}}>shopping_cart</p>
                </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
