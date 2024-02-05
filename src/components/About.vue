<template>
  <section class="about">
    <h2>About</h2>
    <div class="scrim">
      <p>
        Hello, I'm Vince Roti, a dedicated software engineer based in Seattle,
        passionate about crafting unique, fast-loading, and engaging user
        experiences. Currently serving as a frontend developer at WB Games New
        York, I actively contribute to the development and maintenance of the
        account site, OAuth SDK, and internal dashboard. Leveraging technologies
        such as Typescript, Vue 3, and Vite, I enable users to seamlessly manage
        accounts, engage in email sign-ups, experience cross-play, and utilize
        cloud-saving features for our AAA WB titles.
      </p>
      <p>
        My journey in web development began at Dev Bootcamp, where I honed my
        full-stack skills in Ruby, Rails, HTML5, CSS, Test Driven Development,
        and Object-Oriented Javascript. Prior to my current role, I
        significantly contributed to K2 Sports as a frontend web developer,
        leading the migration of marketing and e-commerce sites to single-page
        applications with server-side rendering using Nuxt.js, Contentstack,
        Bigcommerce, and Amplience. My commitment to excellence extends beyond
        code, as I collaborate closely with product managers and producers,
        ensuring features align with user journeys and delivering tools that
        empower other game teams.
      </p>
      <p>
        In addition to my technical prowess, I bring a strong focus on best
        practices, including GDPR compliance, accessibility, and SEO. Thriving
        in leading projects, I guide teams of contractors, developers, and
        designers to bring visions to life. Eager to learn and always ready for
        collaboration, I am dedicated to creating amazing products that
        prioritize user satisfaction and adhere to the highest standards in the
        industry.
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "about",
};
</script>
<style lang="scss" scoped>
p {
  margin: 1rem 0;
  font-size: font-size(h6);
  &:last-child {
    margin: 1rem 0;
  }
}
h2 {
  width: 100%;
  margin-bottom: spacing(double);
  text-align: center;
}
.about {
  max-width: 1000px;
  margin: 0 auto;
}
.scrim {
  background: color(white);
  padding: spacing(base);
  transition: background-color 0.2s ease-in-out;
  border: 1px solid color(light-gray);
}
</style>
