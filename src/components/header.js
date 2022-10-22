import { useEffect, useState } from "react";
import airbnblogo from '../images/airbnb-logo.png'
import {ImEarth} from "react-icons/im"
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillPersonFill} from 'react-icons/bs'

const Header = () => {

    let [showDiv, setshowDiv] = useState("none");
    let [showMainDiv, setshowMainDiv] = useState("flex")
    let [showStayDiv, setshowStayDiv] = useState("none")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setshowStayDiv("none")
            setshowDiv("none")
            setshowMainDiv("flex");
            animation()
        })
    }, [])


    function animation() {
        let animated = document.getElementsByClassName("animated-div")[0];
        animated.classList.add("animate")
        setTimeout(function () {
            animated.classList.remove("animate");
        }, 500);
    }


    function handleClickOnAnywhere() {
        setshowDiv("flex")
        document.getElementsByClassName("destination-input")[0].focus()
        document.getElementById("destination").style.backgroundColor = "#dbdbdb"
        document.getElementById("check-in-id").style.backgroundColor = "#fff"
        document.getElementById("check-out-id").style.backgroundColor = "#fff"
        document.getElementById('guest').style.backgroundColor = "#fff"
        setshowMainDiv("none")
        setshowStayDiv("block")
        animation()
    }



    function handleClickOnAnyWeek() {
        setshowDiv("flex")
        document.getElementsByClassName("name-div")[0].focus()
        document.getElementById("destination").style.backgroundColor = "#fff"
        document.getElementById("check-in-id").style.backgroundColor = "#dbdbdb"
        document.getElementById("check-out-id").style.backgroundColor = "#fff"
        document.getElementById('guest').style.backgroundColor = "#fff"
        setshowMainDiv("none")
        setshowStayDiv("block")
        animation()
    }

    function handleClickOnAddGuest() {
        setshowDiv("flex")
        document.getElementsByClassName("guest-div")[0].focus()
        document.getElementById("destination").style.backgroundColor = "#fff"
        document.getElementById("check-in-id").style.backgroundColor = "#fff"
        document.getElementById("check-out-id").style.backgroundColor = "#fff"
        document.getElementById('guest').style.backgroundColor = "#dbdbdb"
        setshowMainDiv("none")
        setshowStayDiv("block")
        animation()
    }

    function handleIndividualClick() {
        document.getElementById('destination').addEventListener("click", function () {
            document.getElementById("destination").style.backgroundColor = "#dbdbdb"
            document.getElementById("check-in-id").style.backgroundColor = "#fff"
            document.getElementById("check-out-id").style.backgroundColor = "#fff"
            document.getElementById('guest').style.backgroundColor = "#fff"
        })

        document.getElementById('check-in-id').addEventListener("click", function () {
            document.getElementById("destination").style.backgroundColor = "#fff"
            document.getElementById("check-in-id").style.backgroundColor = "#dbdbdb"
            document.getElementById("check-out-id").style.backgroundColor = "#fff"
            document.getElementById('guest').style.backgroundColor = "#fff"
        })

        document.getElementById('check-out-id').addEventListener("click", function () {
            document.getElementById("destination").style.backgroundColor = "#fff"
            document.getElementById("check-in-id").style.backgroundColor = "#fff"
            document.getElementById("check-out-id").style.backgroundColor = "#dbdbdb"
            document.getElementById('guest').style.backgroundColor = "#fff"
        })

        document.getElementById('guest').addEventListener("click", function () {
            document.getElementById('guest').style.backgroundColor = "#dbdbdb"
            document.getElementById("destination").style.backgroundColor = "#fff"
            document.getElementById("check-in-id").style.backgroundColor = "#fff"
            document.getElementById("check-out-id").style.backgroundColor = "#fff"
        })

    }



    return (
        <>
            <div className="header-div">
                <div className="first-row">
                    <div className="logo-div">
                        <img src = {airbnblogo} width="80%" height='80%'></img>
                    </div>
                    <div className="main-btn-div" style={{ display: showMainDiv }}>
                        <div className="search-main-btns" onClick={handleClickOnAnywhere}>Anywhere</div>
                        <div className="search-main-btns dash-div">|</div>
                        <div className="search-main-btns" onClick={handleClickOnAnyWeek}>Any week</div>
                        <div className="search-main-btns dash-div">|</div>
                        <div className="search-main-btns" onClick={handleClickOnAddGuest}>Add guests</div>

                    </div>
                    <div className="main-btn-div appear-after-click" id="appear-after-click" style={{ display: showStayDiv }}>
                        Stays
                    </div>

                    <div className="last-div-frist-row">
                        <div className="become-div">Become a Host</div>
                        <div className="search-icon">
                            <ImEarth/>
                        </div>
                        <div className="button-div">
                            <span>
                                <GiHamburgerMenu/>
                            </span>
                            <span>
                                <BsFillPersonFill/>
                            </span>
                        </div>
                    </div>
                </div>



                <div className="animated-div" style={{ display: showDiv }}>
                    <div className="destination-div name-div give-border" id="destination" onClick={handleIndividualClick}>
                        <div>Where</div>
                        <input className="destination-input" placeholder="Search Destination" type="text" />
                    </div>
                    <div className="name-div give-border" id="check-in-id" onClick={handleIndividualClick}>
                        <div >Check-in</div>
                        <input className="check-in" type="date" />
                    </div>
                    <div className="name-div give-border" id="check-out-id" onClick={handleIndividualClick}>
                        <div>Check-out</div>
                        <input className="check-out" type="date" />
                    </div>
                    <div className="guest-div give-border" id="guest" onClick={handleIndividualClick}>
                        <div>Who</div>
                        <div>Add guest</div>
                    </div>
                </div>
            </div>

            <div className="section-div">
                ABC
            </div>



        </>
    )
}

export default Header;