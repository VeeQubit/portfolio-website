import { motion } from "framer-motion";
import Container from "../../components/layout/Container";
import contactData from "../../data/contactData";

function Contact() {

return(

<section

id="contact"

className="py-28 relative overflow-hidden"

>

<Container>

<motion.div

initial={{

opacity:0,

y:40

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

duration:.8

}}

viewport={{

once:true

}}

className="text-center"

>

<p className="text-[var(--primary)] text-lg">

Contact

</p>

<h2

className="
text-5xl
font-bold
mt-3
"

>

Let's Work Together

</h2>

<p

className="
max-w-2xl
mx-auto
mt-6
leading-8
text-[var(--text)]
"

>

Feel free to reach out for collaborations,
internships, freelance opportunities
or simply to say hello.

</p>

</motion.div>

<div

className="
grid
lg:grid-cols-2
gap-12
mt-20
"

>

<motion.div

initial={{

opacity:0,

x:-50

}}

whileInView={{

opacity:1,

x:0

}}

transition={{

duration:.8

}}

viewport={{

once:true

}}

className="
glass
hover-card
rounded-[35px]
p-10
"

>

<h3

className="
text-3xl
font-bold
"

>

Get In Touch

</h3>

<div

className="
space-y-8
mt-10
"

>

{contactData.map((item)=>{

const Icon = item.icon;

return(

<div

key={item.id}

className="flex gap-5"

>

<Icon

className="
text-2xl
text-[var(--primary)]
"

/>

<div>

<h4 className="font-semibold">

{item.title}

</h4>

<p className="text-[var(--text)]">

{item.value}

</p>

</div>

</div>

)

})}

</div>

</motion.div>

<motion.form

initial={{

opacity:0,

x:50

}}

whileInView={{

opacity:1,

x:0

}}

transition={{

duration:.8

}}

viewport={{

once:true

}}

className="
glass
hover-card
rounded-[35px]
p-10
space-y-6
"

>
<input

type="text"

placeholder="Your Name"

className="
w-full
p-4
rounded-xl
border
outline-none
"

/>

<input

type="email"

placeholder="Email"

className="
w-full
p-4
rounded-xl
border
outline-none
"

/>

<textarea

rows="5"

placeholder="Your Message"

className="
w-full
p-4
rounded-xl
border
outline-none
resize-none
"

></textarea>

<button

className="
px-8
py-4
rounded-full
bg-[var(--primary)]
text-white
font-medium
"

>

Send Message

</button>

</motion.form>

</div>

</Container>

</section>

)

}

export default Contact;