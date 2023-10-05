import NavBar from "../navBar";

function ActivityRemaining({image}) {
  return (
    <main className=" w-full min-h-screen" data-theme="light">
        <NavBar />
      <div>
            {/* ใส่นาฬิกา remainning ตรงนี้ */}
          <section className="relative">
            <img src={image} alt="image" className="w-full"/>
            <div className=" absolute top-0 left-0 w-full h-full flex">

              <button className="btn">Click</button>
        
            <from>
              <label>ชื่อรายการ</label>
              <input type="text" className="input input-bordered input-sm w-full max-w-xs"/>

              <label>คำอธิบาย</label>
              <input type="text" className="input input-bordered input-sm w-full max-w-xs"/>

              <label>ประเภทกิจกรรม</label>
              <input type="text" className="input input-bordered input-sm w-full max-w-xs"/>

              <label>เวลาที่เหลือ</label>
              <input type="text" className="input input-bordered input-sm w-full max-w-xs"/>

              <button className="btn btn-accent">Back</button>
            </from>
            </div>
          </section>
      </div>
    </main>
  )
}

export default ActivityRemaining