import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import aboutPic from '../images/headshot.jpg'
import minty1 from '../images/minty1.jpg'
import minty2 from '../images/minty2.jpg'
import minty3 from '../images/minty3.jpg'
import minty4 from '../images/minty4.png'
import peep1 from '../images/peep1.png'
import peep2 from '../images/peep2.png'
import peep3 from '../images/peep3.png'
import peep4 from '../images/peep4.png'
import peep5 from '../images/peep5.png'
import reactSVG from '../images/reactSVG.svg'
import chartJS from '../images/icons/chartJS.svg'
import CSS from '../images/icons/CSS.svg'
import cypress from '../images/icons/cypress.svg'
import ES6 from '../images/icons/ES6.svg'
import Express from '../images/icons/Express.svg'
import Git from '../images/icons/Git.svg'
import HTML from '../images/icons/HTML.svg'
import jest from '../images/icons/jest.svg'
import Node from '../images/icons/Node.svg'
import NPM from '../images/icons/NPM.svg'
import Postgres from '../images/icons/Postgres.svg'
import Redux from '../images/icons/Redux.svg'
import sass from '../images/icons/sass.png'
import SocketIO from '../images/icons/Socket.svg'
import styledImg from '../images/icons/styled.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { FaGithub, FaGlobe } from 'react-icons/fa'
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills and Tech</h2>
          <SkillsWrapper>
            <SkillsCont>
              <ImgCont src={reactSVG}></ImgCont>
              <a href="https://reactjs.org/">React</a>
            </SkillsCont>
            <SkillsCont>
              <ImgCont src={HTML}></ImgCont>
              <a href="https://www.w3.org/standards/webdesign/htmlcss">HTML5</a>
            </SkillsCont>
            <SkillsCont>
              <ImgCont src={CSS}></ImgCont>
              <a href="https://www.w3.org/standards/webdesign/htmlcss">CSS3</a>
            </SkillsCont>
            <SkillsCont>
              <ImgCont src={ES6}></ImgCont>
              <a href="http://es6-features.org/#Constants">ES6</a>
            </SkillsCont>
            <SkillsCont>
              <ImgCont src={Redux}></ImgCont>
              <a href="https://redux.js.org/">Redux</a>
            </SkillsCont>
            <SkillsCont>
              <ImgCont src={Node}></ImgCont>
              <a href="https://nodejs.org/en/">Node.js</a>
            </SkillsCont>
            <SkillsCont>
              <ImgCont src={Express}></ImgCont>
              <a href="https://expressjs.com/">Express</a>
            </SkillsCont>
            <SkillsCont>
              <ImgCont src={Postgres}></ImgCont>
              <a href="https://www.postgresql.org/">SQL</a>
            </SkillsCont>
            <SkillsCont>
              <ImgCont src={Git}></ImgCont>
              <a href="https://git-scm.com/">Git/Github</a>
            </SkillsCont>
            <SkillsCont>
              <ImgCont src={sass}></ImgCont>
              <a href="https://sass-lang.com/">Sass</a>
            </SkillsCont>
            <SkillsCont>
              <ImgCont src={chartJS}></ImgCont>
              <a href="https://www.chartjs.org/">Chart.js</a>
            </SkillsCont>

            {/* <SkillsCont>
              <ImgCont src={SocketIO}></ImgCont>
              <a href="https://socket.io/">Socket.io</a>
            </SkillsCont> */}

            <SkillsCont>
              <ImgCont src={styledImg}></ImgCont>
              <a href="https://www.styled-components.com/">SC</a>
            </SkillsCont>
          </SkillsWrapper>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h3> Peep</h3>
          <p>
            Peep - a full stack chat application Team-developed and completed
            within 2 weeks.
            <p>
              Users can add friends, direct message friends, or create Groups to
              chat with multiple users. All users and groups can be searched.
              Chat has video/image uploads and gifs. Groups feature admin
              privileges. All chat history is stored in a PostgreSQL database.
            </p>
            <ul>
              <li>
                Built with only functional components via React Hooks. Full list
                of tech: Redux, Styled Components, Express, Node, PostgreSQL,
                bcrypt, Socket.io, Firebase, and GIPHY API.
              </li>
              <li>Created Wireframe design using Balsamiq Mockups</li>
              <li>
                Group Project with 2 fellow developers, participated in daily
                stand up meetings
              </li>
              <li>
                Employed proper version control and branch management via Git
              </li>
              <li>Self taught and integrated styling with Styled Components</li>
              <li>
                Features socket.io for web-communication and online statuses
              </li>
            </ul>
          </p>
          <span className="image main">
            <LinkCont>
              <HoverIcon
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/peepchat/peep"
              >
                <FaGithub />
              </HoverIcon>
              <HoverIcon
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.peep.chat/#/"
              >
                View Site
              </HoverIcon>
            </LinkCont>
            <Carousel dynamicHeight dynamicWidth>
              <div>
                <img src={peep1} alt="Peep1" />
              </div>
              <div>
                <img src={peep2} alt="Peep2" />
              </div>
              <div>
                <img src={peep3} alt="Peep3" />
              </div>
              <div>
                <img src={peep4} alt="Peep4" />
              </div>
              <div>
                <img src={peep5} alt="Peep5" />
              </div>
            </Carousel>
          </span>

          <br />

          <h3> Minty</h3>
          <p>A personal budgeting dashboard inspired by Mint</p>
          <ul>
            <li>
              Built primarily with the SERN Stack. Full list of Technologies
              used : React, Redux, Sass, Node, Express, bcrypt, PostgreSQL,
              Chart.js.
            </li>
            <li>Won BEST UX/UI design at DevMountain</li>
            <li>Individual project completed in two weeks</li>
            <li>
              Self taught Sass and Chart.js to display data in a stylish and
              meaningful way.
            </li>
          </ul>
          <span className="image second">
            <LinkCont className='mintyCont'>
              <HoverIcon
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ahmadiavin/Budgeting-Dashboard"
              >
                <FaGithub />
              </HoverIcon>
              <HoverIcon
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.minty.cash/"
              >
                View Site
              </HoverIcon>
            </LinkCont>
            <Carousel className='caro2'>
              <div>
                <img src={minty1} alt="Minty1" />
              </div>
              <div>
                <img src={minty2} alt="Minty2" />
              </div>
              <div>
                <img src={minty3} alt="minty3" />
              </div>
              <div>
                <img src={minty4} alt="minty4" />
              </div>
            </Carousel>
          </span>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>

          <span className="image main">
            <img
              src={aboutPic}
              alt=""
              style={{
                width: 200,
                height: 200,
              }}
            />
          </span>
          <p>
            I started my career in the automotive industry in sales and advanced
            into management roles, I am now changing gears to pursue my passion
            for problem solving by entering the world of technology,
            specifically software development.
            <br />
            <br />
            I enjoy building projects from the ground up and working with a team
            to find innovative and creative solutions to technical problems. I
            hold an AA in Business Management from St. Petersburg College and I
            recently finished an immersive 13 week bootcamp at DevMountain
            focusing on the SERN stack.
            <br />
            <br />
            I'm originally from Tampa, FL but I'm currently based in the
            Dallas/Fort Worth area. When i'm not coding you can find me watching
            football, cooking up new pasta recipes, playing MMO's, or weight
            lifting.
          </p>
          <ul className="icons">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ali-avin-resume.s3.us-east-2.amazonaws.com/Ali-Avin-Resume.pdf"
                className="icon fa-file-pdf-o"
              >
                <span className="label">Resume</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ali-avin/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ahmadiavin"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="#"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
           
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ali-avin-resume.s3.us-east-2.amazonaws.com/Ali-Avin-Resume.pdf"
                className="icon fa-file-pdf-o"
              >
                <span className="label">Resume</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ali-avin/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ahmadiavin"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

const LinkCont = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  outline: none;
`
const SkillsCont = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  outline: none;
  color: white;
  text-decoration: none;
  width: 120px;
  height: 120px;
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    outline: none;
    text-decoration: none;
    border: none;
  }
  &:hover {
    transition: 300ms;
    text-decoration: underline;
    transform: scale(0.97);
  }
`
const ImgCont = styled.img`
  height: 90px;
  width: 90px;
  outline: none;
`
const HoverIcon = styled.a`
  font-size: 1.5rem;
  color: white;
  outline: none;
  text-decoration: none;
  border: none;
  &:hover {
    border-radius: 10px;
    transition: 300ms;
    transform: scale(0.97);
  }
`
