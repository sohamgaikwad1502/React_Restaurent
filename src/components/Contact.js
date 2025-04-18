const Contact = ()=>
(
    <div>
        <h1 className="font-bold text-3xl p-3 m-3">Contact Us</h1>
        <form className="p-2 m-2">
            <div className="m-2">
                <span className="text-lg">Name:</span>
                <input type="text" placeholder="Name"  className="border border-black p-2 m-2"/>
            </div>

            <div className="m-2">
                <span className="text-lg">Email:</span>
                <input type="email" placeholder="Email Id" className="border border-black p-2 m-2"/>
            </div>

            <button type="submit" className="border text-md rounded-md border-black p-2 m-2 bg-orange-400 font-roboto text-white ">Submit</button>
        </form>
    </div>
)

export default Contact;