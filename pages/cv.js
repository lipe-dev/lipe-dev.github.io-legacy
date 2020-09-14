import Link from "next/link";

import Layout from "../components/layout/layout";
import Heading from "../components/heading";

export default function CV() {
  return (
    <Layout>
      <div className="min-w-full bg-gray-200 py-8">
        <div className="container mx-auto flex py-16 justify-around bg-white shadow-diagonal">
          <div className="w-1/4 prose">
            <img
              src="/images/profile.jpg"
              alt="Felipe Pereira"
              className="shadow-diagonal"
            />

            <h2> Contact </h2>
            <ul>
              <li>
                <a href="mailto:fe@lipe.dev">fe@lipe.dev</a>
              </li>
              <li>
                <a href="tel:+55(48)99112-5743">+55 (48) 99112 - LIPE</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/felipeicp/">
                  /in/felipeicp
                </a>
              </li>
              <li>
                <a href="https://github.com/lipe-dev">github/lipe-dev</a>
              </li>
            </ul>

            <h2>Communication</h2>
            <ul>
              <li>Native Brazilian Portuguese</li>
              <li>Academic Level US English</li>
              <li>Barely Understands Spanish</li>
            </ul>

            <h2>Personal Traits </h2>
            <ul>
              <li>
                Lover of all technology. Respect and preserve the old, create
                the new.
              </li>
              <li>Always eager to learn more</li>
              <li>Perseverant and adaptable</li>
              <li>Self teaching</li>
              <li>Quick learner</li>
              <li>Problem solver</li>
              <li>Available for traveling and moving</li>
            </ul>

            <h2>Hobbies</h2>
            <ul>
              <li>
                <strong>MAKER</strong> From Arduino to Woodworking
              </li>
              <li>
                <strong>HOMEBREW ENTHUSIAST</strong> Indie/Homemade Games Lover
              </li>
              <li>
                <strong>MUSIC</strong> Bass Player and Amateur Luthier
              </li>
            </ul>
          </div>
          <div className="w-3/4 prose ">
            <Heading subtitle="Software Engineer">
              Felipe "lipe-dev" Pereira
            </Heading>

            <h2>Notable Skills</h2>
            <ul>
              <li>Front-End Development</li>
              <li>Mobile Development</li>
              <li>Agile Methodologies</li>
              <li>Server Side Development</li>
              <li>Database Design, Development, and Management</li>
              <li>Project Management</li>
              <li>UI/UX Design</li>
            </ul>
            <h2>
              Experience With{" "}
              <small>
                (See more in{" "}
                <Link href="/posts/list/tech">
                  <a>Tech</a>
                </Link>
                )
              </small>
            </h2>
            <ul>
              <li>
                <strong>Javascript</strong> (React, Next.js, React Native,
                Redux, JQuery, NodeJS, p5.js, Electron)
              </li>
              <li>
                <strong>Python</strong> (Django, Django Rest Framework)
              </li>
              <li>
                <strong>PHP</strong> (CakePHP, CodeIgniter)
              </li>
              <li>
                <strong>HTML5/CSS3</strong> (TailwindCSS, CSS in JS, SASS,
                Bootstrap, ...)
              </li>
              <li>
                <strong>Java</strong> (Mainly Android)
              </li>
              <li>
                <strong>Design</strong> (Photoshop, Material Design,
                Illustrator, InVision, Figma)
              </li>
            </ul>
            <h3>Education</h3>
            <li>
              <strong className="uppercase">
                Information Systems @{" "}
                <u>Federal University of Itajubá - Brazil</u>
              </strong>{" "}
              <br />
              <i className="pl-8 text-gray-500">
                From 2010 to 2013 & from 2015 to 2016
              </i>{" "}
              <br />
              <span className="pl-8">
                Bachelor’s Degree <br />
              </span>
            </li>
            <li>
              <strong className="uppercase">
                Computer Science @ <u>University of Maryland - USA</u>
              </strong>
              <br />
              <i className="pl-8 text-gray-500">2013 - 2014</i> <br />
              <span className="pl-8">
                Non-Degree Foreign Exchange Program <br />
              </span>
            </li>
            <h3>Work Experience</h3>
            <li>
              <strong className="uppercase">
                Android Dev Internship @{" "}
                <a href="https://www.agrotransparencia.com.br/homeenglish">
                  Safe Trace Café
                </a>
              </strong>
              <br />
              <i className="pl-8 text-gray-500">From 01/2015 to 09/2015</i>{" "}
              <br />
              <span className="pl-8">
                Mostly working with the company’s Android app for food products
                tracking.
              </span>
            </li>
            <li>
              <strong className="uppercase">
                Android Dev & Full Stack Dev & Dev Ops @{" "}
                <u>Utyl Business Platforms</u>
              </strong>
              <br />
              <i className="pl-8 text-gray-500">From 09/2015 to 11/2016</i>{" "}
              <br />
              <span className="pl-8">
                Mostly working with PHP, CodeIgniter, Android, HTML5 and CSS3
                (and frameworks), and Databases while developing internal
                systems and apps.
              </span>{" "}
              <span className="pl-8 mt-2">
                Developing many websites for clients, including static websites,
                wordpress themes, custom wordpress plugins, custom systems and
                mobile apps.
              </span>
            </li>
            <li>
              <strong className="uppercase">
                Full Stack Developer & Dev Ops @ <u>Empreguei</u>
              </strong>
              <br />
              <i className="pl-8 text-gray-500">From 11/2016 to 11/2018</i>
              <br />
              <span className="pl-8">
                Mostly working with Python/Django, Android, and Javascript/React
                alongside HTML5/CSS3.{" "}
              </span>
            </li>
            <li>
              <strong className="uppercase">
                Software Analyst @{" "}
                <a href="https://www.eldorado.org.br/?lang=en">
                  Instituto Eldorado
                </a>
              </strong>
              <br />
              <i className="pl-8 text-gray-500">From 11/2018 to 05/2019</i>{" "}
              <br />
              <span className="pl-8">
                Working with many R&D projects, mostly related to Android
                devices for Motorola
              </span>
            </li>
            <li>
              <strong className="uppercase">
                Sr. Front-End Engineer @{" "}
                <a href="https://loadsmart.com">Loadsmart.com</a>{" "}
              </strong>
              <br />
              <i className="pl-8 text-gray-500">From 05/2019 to Present Day</i>
              <br />
              <span className="pl-8">
                Mainly focused on React, in a variety of front-end projects.
                Some Django here and there.
              </span>
            </li>
          </div>
        </div>
      </div>
    </Layout>
  );
}
