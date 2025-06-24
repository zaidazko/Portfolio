import {useState} from 'react'
import ScrollReveal from '../src/blocks/TextAnimations/ScrollReveal/ScrollReveal'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const services = [
    {name: "Linkedin", image: "src/assets/icons/linkedin.png", link: "https://www.linkedin.com/in/zazkoul"},
    {name: "Github", image: "src/assets/icons/github.png", link: "https://www.github.com/zaidazko"}
  ]


  const submitEmail = (e) => {
    e.preventDefault();
    console.log("Email submitted");


    const serviceID = 'service_airjaaw';
    const templateID = 'template_dcsks4s';
    const publicKey = 'juG5SduQ1EPwLX1Y7';


    const templateParams = {
      from_name: name,
      from_email: email,
      msg: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS", response.status, response.text)
      },
      (error) => {
        console.log("FAILED...", error)
      }
    )

    setName("");
    setEmail("");
    setMessage("");


  }

  return (
    <div className="flex flex-col place-items-center gap-5">
        <ScrollReveal baseOpacity={0.1} enableBlur={true} baseRotation={10} blurStrength={10} textClassName="text-4xl font-bold text-white mt-5 tracking-tight">
            Get in Touch 
        </ScrollReveal>
        <div className="flex justify-center place-items-center gap-3 w-[50%] h-full">
            {services.map((service, index) => (
              <a key={index} href={service.link} target="_blank" className="flex gap-2 text-lg justify-center items-center bg-white/20 p-2 rounded-md font-bold text-white text-md"><img className="h-8" src={service.image}></img>{service.name}</a>
            ))}
        </div>
        <p className="text-center text-lg text-slate-400 tracking-tight font-medium w-250">Feel free to reach out for collaboration opportunities, freelance projects, or if you're hiring for software development roles. I'm always open to connecting with others in tech or discussing interesting problems and ideas.</p>
        <div className="p-5 flex gap-5  rounded-xl w-310 h-200 justify-center ">
          <form onSubmit={submitEmail} className="flex flex-col w-[50%] h-full items-center gap-10 bg-white/10 rounded-2xl px-4 py-8">
            <h1 className="text-5xl font-bold text-white">Send a Message</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="bg-white/60 text-black font-medium backdrop-blur-xl p-3 rounded-lg w-[90%]"/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="bg-white/60 text-black font-medium backdrop-blur-xl p-3 rounded-lg w-[90%]"/>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Message" className="bg-white/60 text-black font-medium backdrop-blur-xl p-3 rounded-lg h-[80%] w-[90%]"/>
            <button type="submit" className="flex gap-3 bg-white/60 rounded-lg p-3 text-md font-medium cursor-pointer">Send Message
            <img className="h-5" src="src/assets/icons/send-icon.png"></img></button>
          </form>
        </div>
    </div>
  )
}

export default Contact
