<template>
  <section class="resume">
    <h2>Resume</h2>
    <div>
      <h3>Education</h3>
      <ul>
        <li>
          <ResumeEntry
            date="2014-2015"
            title="Diploma in Computer"
            position="Diploma in Computer"
            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have."
          />
        </li>
        <li>
          <ResumeEntry
            date="2014-2015"
            title="Diploma in Computer"
            position="Diploma in Computer"
            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have."
          />
        </li>
        <li>
          <ResumeEntry
            date="2014-2015"
            title="Diploma in Computer"
            position="Diploma in Computer"
            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have."
          />
        </li>
      </ul>
      <h3>Work Experience</h3>
      <ul>
        <li>
          <ResumeEntry
            date="2014-2015"
            title="Diploma in Computer"
            position="Diploma in Computer"
            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have."
          />
        </li>
        <li>
          <ResumeEntry
            date="2014-2015"
            title="Diploma in Computer"
            position="Diploma in Computer"
            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have."
          />
        </li>
        <li>
          <ResumeEntry
            date="2014-2015"
            title="Diploma in Computer"
            position="Diploma in Computer"
            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have."
          />
        </li>
      </ul>
      <h3>Skills</h3>
      <ul>
        <li>
          <ResumeEntry
            date="2014-2015"
            title="Diploma in Computer"
            position="Diploma in Computer"
            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have."
          />
        </li>
        <li>
          <ResumeEntry
            date="2014-2015"
            title="Diploma in Computer"
            position="Diploma in Computer"
            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have."
          />
        </li>
        <li>
          <ResumeEntry
            date="2014-2015"
            title="Diploma in Computer"
            position="Diploma in Computer"
            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have."
          />
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
export default {
  name: "resume",
  components: {
    ResumeEntry,
  },
};
</script>
<style lang="scss" scoped>
h2 {
  width: 100%;
  text-align: center;
}
h3 {
  position: sticky;
  top: 0;
  background: color(white);
  display: block;
  padding: rem(10) 0;
}
li {
  list-style: none;
}
.resume {
  width: 95%;
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
