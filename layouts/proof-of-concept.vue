<template>
  <section>
    <div class="daily-news">
      <div class="daily-news__content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          obcaecati vo quo dolor. Nihil, unde tempore iusto ratione mollitia
          fugit. Saepe, laborum!
        </p>
      </div>
    </div>
    <div class="layout__wrapper sticky">
      <nav class="navigation">
        <ul class="navigation__list">
          <li><a class="navigation__link" href="#">Home</a></li>
          <li>
            <a class="navigation__link" href="#">About</a>
          </li>
          <li>
            <a class="navigation__link" href="#">News</a>
          </li>
          <li><a class="navigation__link" href="#">Join Us</a></li>
        </ul>
      </nav>
    </div>
    <Nuxt />
    <div class="layout__wrapper">
      <footer class="footer">
        <div>
          <h3>Column header</h3>
          <ul class="footer__column">
            <li><a href="">Visit page a</a></li>
            <li><a href="">Visit page b</a></li>
            <li><a href="">Visit page c</a></li>
            <li><a href="">Visit page d</a></li>
          </ul>
        </div>

        <div>
          <h3>Column header</h3>
          <ul class="footer__column">
            <li><a href="">Visit page a</a></li>
            <li><a href="">Visit page b</a></li>
            <li><a href="">Visit page b</a></li>
            <li><a href="">Visit page b</a></li>
            <li><a href="">Visit page b</a></li>
            <li><a href="">Visit page b</a></li>
            <li><a href="">Visit page c</a></li>
            <li><a href="">Visit page d</a></li>
          </ul>
        </div>
        <div>
          <h3>Column header</h3>
          <ul class="footer__column">
            <li><a href="">Visit page a</a></li>
            <li><a href="">Visit page b</a></li>
            <li><a href="">Visit page b</a></li>
            <li><a href="">Visit page b</a></li>
            <li><a href="">Visit page c</a></li>
            <li><a href="">Visit page d</a></li>
          </ul>
        </div>
        <div>
          <h3>Column header</h3>
          <ul class="footer__column">
            <li><a href="">Visit page a</a></li>
            <li><a href="">Visit page b</a></li>
            <li><a href="">Visit page c</a></li>
            <li><a href="">Visit page b</a></li>
            <li><a href="">Visit page c</a></li>
            <li><a href="">Visit page c</a></li>
            <li><a href="">Visit page d</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
.layout {
  &__wrapper {
    background: #f2f2f2;
  }
}
.daily-news {
  background: rgb(11, 155, 35);

  &__content {
    font-weight: bold;
    text-align: center;
    max-width: 850px;
    margin: 0 auto;
    padding: 2rem 0;
    color: white;
  }
}
.sticky {
  position: sticky;
  top: 0;
  scroll-behavior: smooth;
}
.navigation {
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  &__list {
    padding: 1.5rem 0;
    display: flex;
    > li {
      margin-right: 3rem;
      list-style: none;
    }
  }
  &__link {
    color: rgb(11, 155, 35);
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.1rem;
    margin: 0;
    position: relative;
  }
}
.footer {
  padding: 6rem 0;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  &__column {
    padding: 0;
    margin-right: 1.5rem;
    > li {
      list-style: none;
    }
  }
}
</style>
