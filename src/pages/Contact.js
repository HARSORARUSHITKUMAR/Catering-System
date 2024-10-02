import React from "react";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-h1">Contact</h1><br />
                <p className="con-f-ptag">We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
                <p className="first-con-ptag"><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
                <p id="con-sec-ptag">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
                <form action="/action_page.php" target="_blank">
                    <p><input className="con-in-f" type="text" placeholder="Name" required="" name="Name" /></p>
                    <p><input className="con-in-f" type="number" placeholder="How many people" required="" name="People" /></p>
                    <p><input className="con-in-f" type="datetime-local" placeholder="Date and time" required="" name="date" value="2020-11-16T20:00" /></p>
                    <p><input className="con-in-f" type="text" placeholder="Message \ Special requirements" required="" name="Message" /></p>
                    <p><button class="btn-con" type="submit">SEND MESSAGE</button></p>
                </form>
        </div>
    )
};
export default Contact;