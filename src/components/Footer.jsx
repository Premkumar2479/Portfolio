import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (

<footer className="bg-gray-900 text-white py-10">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-3xl font-bold">
Prem Kumar
</h2>

<p className="mt-3">
Full Stack Developer
</p>

<div className="flex justify-center gap-8 text-3xl mt-8">

<a href="#">
<FaGithub/>
</a>

<a href="#">
<FaLinkedin/>
</a>

<a href="#">
<FaEnvelope/>
</a>

</div>

<p className="mt-8 text-gray-400">
© 2026 Prem Kumar. All Rights Reserved.
</p>

</div>

</footer>

  );
}

export default Footer;