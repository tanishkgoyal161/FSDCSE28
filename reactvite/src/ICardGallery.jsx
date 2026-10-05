import react from 'react'
import ICard from './Icard.jsx'
import studentimage from "./images/studentimage.jpg";

function ICardGallery() {

    const student = {
        rollNo: "1161",
        name: "Tanishk",
        branch: "Computer Science and Engineering",
        section: "CSE;28",
        collegeName: "ABES Engineering College"
    }
    return (
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
            {/* <ICard pic={studentimage} collegeName="ABES Engineering College" rollNo="1094" name="Yadav" branch="Computer Science and Engineering" section="CSE;28"/>
            <ICard collegeName="ABES Engineering College" rollNo="1095" name="Kasia" branch="Computer Science and Engineering" section="CSE;28"/>
            <ICard collegeName="ABES Engineering College" rollNo="1161" name="Tanishk" branch="Computer Science and Engineering" section="CSE;28"/> */}
        <ICard data={student}/>
        </div>
    )
}

export default ICardGallery