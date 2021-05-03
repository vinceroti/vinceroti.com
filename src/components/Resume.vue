<template>
  <section class="resume">
    <h2>
      Resume
      <a
        href="/VinceRoti.pdf"
        target="_blank"
        class="download"
        title="Download Vince Roti's Resume"
        ><download />
      </a>
    </h2>
    <div>
      <h3>Work Experience</h3>
      <ul>
        <li>
          <ResumeEntry
            date="May 2017 to Current"
            title="K2 SPORTS"
            position="Frontend Web Developer"
          >
            <p>
              During my tenure at K2, I've built sites on to Demandware,
              maintained legacy software on Ruby on Rails, rebuilt and
              overhauled our Rails and Demandware sites to our team developed
              tech stack (Nuxt.js / ContentStack / Bigcommerce / Amplience) with
              scalability and best practices in mind All while helping onboard
              contractors to meet critical deadlines and helping our DevOps team
              to ensure successful releases and site stability.
            </p>
            <ul>
              <li>
                - Migration of marketing/e-commerce sites from Demandware to
                Single Page Applications
              </li>
              with SSR (ex: k2snow.com)
              <li>
                - Implementation of Vue/Vue-cli/Nuxt for Server Side Rendering
                of all marketing and ecommerce sites
              </li>
              <li>
                - Implemented Vuex for State Management of Vue Applications
              </li>
              <li>- Integration of 3rd party Rest API into new architecture</li>
              <li>- Performance and Accessibility audits of all new sites</li>
              <li>
                - Managed communication and deployments with backend development
                team for successful release
              </li>
            </ul>
          </ResumeEntry>
        </li>
        <li>
          <ResumeEntry
            date="Aug. 2016 to Dec. 2016"
            title="DEV BOOTCAMP"
            position="Web Development Graduate"
          >
            <p>
              I graduated from Dev Bootcamp which is a 19-week intensive
              training program for aspiring web developers, specializing in
              Ruby, Rails, HTML5, CSS, Test Driven Development, Object-Oriented
              Javascript (AJAX, JQuery), Git and Source control, Heroku and
              Agile Development.
            </p>
            <ul>
              <li>
                - Gained skills to learn new languages, frameworks, libraries,
                and conventions quickly.
              </li>
              <li>
                - Programmed in various dynamics such as pair programming, solp
                programming, and group collaboration.
              </li>
            </ul>
          </ResumeEntry>
        </li>
      </ul>
      <h3>Education</h3>
      <ul>
        <li>
          <ResumeEntry
            title="Dev Bootcamp"
            position="Full-Stack Web Development 2016"
          />
        </li>
        <li>
          <ResumeEntry
            title="College Of DuPage"
            position="Associate of Arts 2015"
          />
        </li>
      </ul>
      <h3>Projects</h3>
      <ul>
        <li>
          <ResumeEntry title="GOOGLE SKI PLOTTER">
            <p>
              Google ski plotter is an Express/Vue web app that takes your
              google location data and determines if you're skiing or
              snowboarding based on location data and activity data provided by
              Google. This web app is for android users only who allow location
              data tracking by google.
            </p>
            <p>
              Tech - Node, Express, Vue, Websockets, Axios, JSONstream, pm2,
              SCSS
            </p>
          </ResumeEntry>
          <ResumeEntry title="REMIND">
            <p>
              Remind is an iOS app that allows users to create a list of items
              that they want to buy at a store. It will nd locations that have
              that item and notify you when you are near the location that has
              that item.
            </p>
            <p>
              Tech – Ruby on Rails, Google Maps API, Heroku, Swift and xCode
            </p>
            <p>
              Roles – Back-end rails RESTful API which talked to Google Maps and
              the iOS app
            </p>
          </ResumeEntry>
          <ResumeEntry title="WIKIPEDIA CLONE">
            <p>
              As a client project at Dev Bootcamp, we were asked to create a
              Wikipedia clone. Users can create pages, revisions, and see
              previous revisions side by side. The majority of the features are
              replicated and functioning. We focused extensively on testing
              during this project and agile development.
            </p>
            <p>Tech – Ruby on Rails, Ajax, jQuery, and Circle CI</p>
            <p>Roles – Front-end and Backend</p>
          </ResumeEntry>
        </li>
      </ul>
      <div>
        <ul class="skills-container">
          <li class="knowledge">
            <h4>Industry Knowledge</h4>
            <ul>
              <li>Software Development</li>
              <li>Web Development</li>
              <li>Agile Methodologies</li>
              <li>Object-Oriented Programming Front-end</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>ADA Compliance</li>
            </ul>
          </li>
          <li class="tools-tech">
            <h4>Tools & Technologies</h4>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Nuxt.js</li>
              <li>Vue</li>
              <li>Vuex</li>
              <li>Node.js</li>
              <li>CSS/SCSS</li>
              <li>Express</li>
              <li>Git</li>
              <li>Rspec/Jasmine</li>
              <li>React.js</li>
              <li>Ruby on Rails</li>
              <li>jQuery</li>
              <li>Google Analytics</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Heroku</li>
              <li>Demandware</li>
              <li>Google Tag Manager</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import ResumeEntry from "@/components/ResumeEntry.vue";
import download from "@/assets/download.svg";
export default {
  name: "resume",
  components: {
    ResumeEntry,
    download,
  },
};
</script>
<style lang="scss" scoped>
h2 {
  width: 100%;
  text-align: center;
  margin-bottom: spacing(base);
}
h3 {
  display: inline-block;
  text-align: center;
  font-size: font-size(h4);
  background-color: color(black);
  padding: rem(10) rem(10);
  color: color(white);
  margin: 0;
  @include respond-to(medium) {
    position: sticky;
    top: 0;
    width: rem(200);
    text-align: left;
    font-size: font-size(h6);
    background-color: color(black);
    color: color(white);
  }
}
ul {
  padding: 0;
  margin-bottom: spacing(section);
  @include respond-to(medium) {
    padding-left: spacing(base);
  }
}
li {
  list-style: none;
}
.download {
  &:hover {
    svg {
      fill: color(light-gray);
    }
  }
  svg {
    width: rem(25);
    height: rem(25);
    transition: fill 0.2s ease-in-out;
  }
}
.resume {
  @include respond-to(medium) {
    width: 95%;
  }
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
}
.tools-tech,
.knowledge {
  margin: 0 spacing(base);
  margin-bottom: spacing(base);
  ul {
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    max-width: rem(250);
  }
}
.tools-tech {
  li {
    width: 50%;
  }
}
</style>
