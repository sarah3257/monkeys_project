import React from 'react'

export default function LessJsx() {
 const button1=<button>sarah</button>
    const addButn=(_txt)=>{
        return(
            <button>{_txt}</button>
           
        )
    }
 
 return (
    <div>
        <h1>LessJsx</h1>
        <p>
        אני מהנדסת תוכנה מנוסה עם יכולות מעולות בפיתוח.
אוהבת ללמוד ולהתפתח, ותמיד מתעדכנת בטכנולוגיות החדשות ביותר בתחום. 
רכשתי ידע נרחב בתחום השבבים ו-Full Stack בנוסף, צברתי ניסיון מעשי בפרויקטים שונים, הן במסגרת קורסים והן באופן עצמאי.

        </p>
        <h3>add jsx by vars</h3>
        {button1}
        <h3>add jsx by fun</h3>
        {addButn("sarah rom")}
    </div>
  )
}
