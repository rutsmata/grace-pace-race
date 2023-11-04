import styles from "./TestDriveRegistrationForm.module.css"

export default function TestDriveForm () {
    return (
     
        <div>
            <div Name="col-lg-6">
                <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                    <h1 className="text-white mb-4">Book For A Service</h1>
                    <form>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <input type="text" className="form-control border-0" placeholder="Your Name" style="height: 55px;"/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="email" className="form-control border-0" placeholder="Your Email" style="height: 55px;"/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <select className="form-select border-0" style="height: 55px;">
                                    <option selected>Select A Service</option>
                                    <option value="1">Service 1</option>
                                    <option value="2">Service 2</option>
                                    <option value="3">Service 3</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="date" id="date1" data-target-input="nearest">
                                    <input type="text"
                                        className="form-control border-0 datetimepicker-input"
                                        placeholder="Service Date" data-target="#date1" data-toggle="datetimepicker" style="height: 55px;"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <textarea class="form-control border-0" placeholder="Special Request"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn" type="submit">Book Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

