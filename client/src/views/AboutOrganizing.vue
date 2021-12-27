<template>
  <div class="about__mainContainer">
    <div class="about__upperContainer">
      <div
        class="about__aboutOrganizing"
        data-test="aboutOrganizingUpperSection"
      >
        In the Organizer, you create your activities, prioritize and describe
        them, then create routines by setteling your activities in week time.
        After preparing first routine it's time to test it in practice, track
        activities time, and adjust everyting so you can get most out of your
        lifetime.
      </div>
      <div class="about__aboutApp" data-test="aboutOrganizingLowerSection">
        Why ?
        <br />The importance of structurizing time and balancing it with chaos
        is something most of us are aware, however we also know the first part
        is harder to maintain. There are a great many reasons why you should
        probably organize your time better. Some of them are obvious, like
        putting your potential on the right track, the satisfaction that comes
        from growing, having value that you bring to the lives of others, or
        having more enjoyable and effective leisure time. However, I encourage
        you to deepen you knowledge in these areas and be inspired by them.
        <br />
        <br />
        <br />
        <br />Below are sources that, like this app, will help in the process of
        self-organization. <br />Good luck.
      </div>
    </div>
    <div class="about__info">
      <div class="movies" data-test="movies">
        <div class="title"><i class="bi bi-camera-video"></i>Videos</div>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=1NFq_FbmcDk"
              >Why you should organize your life by Dr Jordan Peterson
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=fbAYK4KQrso"
              >Timeboxing: Elon Musk's Time Management Method
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=WXBA4eWskrc"
              >The Philosophy of Time Management | Brad Aeon | TEDxConcordia
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=PZ7lDrwYdZc"
              >How to become 37.78 times better at anything | Atomic Habits
              summary by James Clear
            </a>
          </li>
        </ul>
      </div>
      <div class="articles">
        <div class="title"><i class="bi bi-newspaper"></i>Articles</div>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://hbr.org/2020/01/time-management-is-about-more-than-life-hacks"
              >Time Management Is About More Than Life Hacks by Erich C.
              Dierdorff
            </a>
          </li>
          <li>
            <a target="_blank" href="https://zhuanlan.zhihu.com/p/344578596"
              >Stop wasting the time by Dr Jordan Peterson
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.jacr.org/article/S1546-1440(08)00581-4/fulltext"
              >Time Management: A Realistic Approach by Valerie P. Jackson
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.managementstudyguide.com/time-management.htm"
              >Time Management - Meaning and its Importance
            </a>
          </li>
        </ul>
      </div>
      <div class="books">
        <div class="title"><i class="bi bi-book"></i>Books</div>
        <ul>
          <li>Attomic Habits by James Clear</li>
          <li>
            The 7 Habits of Highly Effective People: Powerful Lessons in
            Personal Change by Stephen R. Covey
          </li>
          <li>Essentialism: The Disciplined Pursuit of Less by Greg McKeown</li>
          <li>Eat That Frog! by Brian Tracy</li>
          <li>Getting Things Done by David Allen</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AboutOrganizing",
  components: {},
};
</script>

<style scoped>
.about__mainContainer {
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.11) 0px,
      rgba(0, 0, 0, 0.11) 12px,
      rgba(1, 1, 1, 0.16) 12px,
      rgba(1, 1, 1, 0.16) 24px,
      rgba(0, 0, 0, 0.14) 24px,
      rgba(0, 0, 0, 0.14) 36px,
      rgba(0, 0, 0, 0.23) 36px,
      rgba(0, 0, 0, 0.23) 48px,
      rgba(0, 0, 0, 0.12) 48px,
      rgba(0, 0, 0, 0.12) 60px,
      rgba(1, 1, 1, 0.07) 60px,
      rgba(1, 1, 1, 0.07) 72px,
      rgba(0, 0, 0, 0.21) 72px,
      rgba(0, 0, 0, 0.21) 84px,
      rgba(0, 0, 0, 0.24) 84px,
      rgba(0, 0, 0, 0.24) 96px,
      rgba(1, 1, 1, 0.23) 96px,
      rgba(1, 1, 1, 0.23) 108px,
      rgba(1, 1, 1, 0.07) 108px,
      rgba(1, 1, 1, 0.07) 120px,
      rgba(0, 0, 0, 0.01) 120px,
      rgba(0, 0, 0, 0.01) 132px,
      rgba(1, 1, 1, 0.22) 132px,
      rgba(1, 1, 1, 0.22) 144px,
      rgba(1, 1, 1, 0.24) 144px,
      rgba(1, 1, 1, 0.24) 156px,
      rgba(0, 0, 0, 0) 156px,
      rgba(0, 0, 0, 0) 168px,
      rgba(0, 0, 0, 0.12) 168px,
      rgba(0, 0, 0, 0.12) 180px
    ),
    repeating-linear-gradient(
      180deg,
      rgba(1, 1, 1, 0.01) 0px,
      rgba(1, 1, 1, 0.01) 12px,
      rgba(1, 1, 1, 0.15) 12px,
      rgba(1, 1, 1, 0.15) 24px,
      rgba(0, 0, 0, 0.09) 24px,
      rgba(0, 0, 0, 0.09) 36px,
      rgba(0, 0, 0, 0.02) 36px,
      rgba(0, 0, 0, 0.02) 48px,
      rgba(0, 0, 0, 0.1) 48px,
      rgba(0, 0, 0, 0.1) 60px,
      rgba(1, 1, 1, 0.07) 60px,
      rgba(1, 1, 1, 0.07) 72px,
      rgba(1, 1, 1, 0.15) 72px,
      rgba(1, 1, 1, 0.15) 84px,
      rgba(0, 0, 0, 0.18) 84px,
      rgba(0, 0, 0, 0.18) 96px,
      rgba(1, 1, 1, 0.15) 96px,
      rgba(1, 1, 1, 0.15) 108px,
      rgba(1, 1, 1, 0.09) 108px,
      rgba(1, 1, 1, 0.09) 120px,
      rgba(1, 1, 1, 0.07) 120px,
      rgba(1, 1, 1, 0.07) 132px,
      rgba(1, 1, 1, 0.05) 132px,
      rgba(1, 1, 1, 0.05) 144px,
      rgba(0, 0, 0, 0.1) 144px,
      rgba(0, 0, 0, 0.1) 156px,
      rgba(1, 1, 1, 0.18) 156px,
      rgba(1, 1, 1, 0.18) 168px
    ),
    repeating-linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.24) 0px,
      rgba(0, 0, 0, 0.24) 16px,
      rgba(1, 1, 1, 0.06) 16px,
      rgba(1, 1, 1, 0.06) 32px,
      rgba(0, 0, 0, 0.16) 32px,
      rgba(0, 0, 0, 0.16) 48px,
      rgba(1, 1, 1, 0) 48px,
      rgba(1, 1, 1, 0) 64px,
      rgba(1, 1, 1, 0.12) 64px,
      rgba(1, 1, 1, 0.12) 80px,
      rgba(1, 1, 1, 0.22) 80px,
      rgba(1, 1, 1, 0.22) 96px,
      rgba(0, 0, 0, 0.24) 96px,
      rgba(0, 0, 0, 0.24) 112px,
      rgba(0, 0, 0, 0.25) 112px,
      rgba(0, 0, 0, 0.25) 128px,
      rgba(1, 1, 1, 0.12) 128px,
      rgba(1, 1, 1, 0.12) 144px,
      rgba(0, 0, 0, 0.18) 144px,
      rgba(0, 0, 0, 0.18) 160px,
      rgba(1, 1, 1, 0.03) 160px,
      rgba(1, 1, 1, 0.03) 176px,
      rgba(1, 1, 1, 0.1) 176px,
      rgba(1, 1, 1, 0.1) 192px
    ),
    repeating-linear-gradient(
      225deg,
      rgba(1, 1, 1, 0.18) 0px,
      rgba(1, 1, 1, 0.18) 3px,
      rgba(0, 0, 0, 0.09) 3px,
      rgba(0, 0, 0, 0.09) 6px,
      rgba(0, 0, 0, 0.08) 6px,
      rgba(0, 0, 0, 0.08) 9px,
      rgba(1, 1, 1, 0.05) 9px,
      rgba(1, 1, 1, 0.05) 12px,
      rgba(0, 0, 0, 0.01) 12px,
      rgba(0, 0, 0, 0.01) 15px,
      rgba(1, 1, 1, 0.12) 15px,
      rgba(1, 1, 1, 0.12) 18px,
      rgba(0, 0, 0, 0.05) 18px,
      rgba(0, 0, 0, 0.05) 21px,
      rgba(1, 1, 1, 0.16) 21px,
      rgba(1, 1, 1, 0.16) 24px,
      rgba(1, 1, 1, 0.07) 24px,
      rgba(1, 1, 1, 0.07) 27px,
      rgba(1, 1, 1, 0.23) 27px,
      rgba(1, 1, 1, 0.23) 30px,
      rgba(0, 0, 0, 0.2) 30px,
      rgba(0, 0, 0, 0.2) 33px,
      rgba(0, 0, 0, 0.18) 33px,
      rgba(0, 0, 0, 0.18) 36px,
      rgba(1, 1, 1, 0.12) 36px,
      rgba(1, 1, 1, 0.12) 39px,
      rgba(1, 1, 1, 0.13) 39px,
      rgba(1, 1, 1, 0.13) 42px,
      rgba(1, 1, 1, 0.2) 42px,
      rgba(1, 1, 1, 0.2) 45px,
      rgba(1, 1, 1, 0.18) 45px,
      rgba(1, 1, 1, 0.18) 48px,
      rgba(0, 0, 0, 0.2) 48px,
      rgba(0, 0, 0, 0.2) 51px,
      rgba(1, 1, 1, 0) 51px,
      rgba(1, 1, 1, 0) 54px,
      rgba(0, 0, 0, 0.03) 54px,
      rgba(0, 0, 0, 0.03) 57px,
      rgba(1, 1, 1, 0.06) 57px,
      rgba(1, 1, 1, 0.06) 60px,
      rgba(1, 1, 1, 0) 60px,
      rgba(1, 1, 1, 0) 63px,
      rgba(0, 0, 0, 0.1) 63px,
      rgba(0, 0, 0, 0.1) 66px,
      rgba(1, 1, 1, 0.19) 66px,
      rgba(1, 1, 1, 0.19) 69px
    ),
    linear-gradient(180deg, rgb(0, 0, 0), rgb(34, 125, 145));
  display: grid;
  justify-content: center;
  grid-template-rows: 1fr 1fr 3fr;
}

.about__upperContainer {
  min-height: 60vh;
  overflow-y: scroll;
  border-bottom: 3px solid rgba(72, 234, 255, 0.911);
}

a:hover {
  color: red;
}

.about__aboutOrganizing {
  text-overflow: ellipsis;
  text-align: center;
  display: flex;
  justify-content: center;
  white-space: pre-wrap;
  color: rgb(125, 248, 236);
  padding: 32px 240px 16px 240px;
  padding-bottom: 16px;
  margin-top: 0;
  font-weight: bold;
  font-size: 17.6px;
  text-shadow: 0 0 8px turquoise;
  letter-spacing: 1px;
}

.about__aboutApp {
  text-align: center;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  color: rgb(125, 248, 236);
  padding: 24px 240px 16px 240px;
  font-weight: 550;
  font-size: 17.6px;
  text-shadow: 0 0 8px turquoise;
  letter-spacing: 1px;
}

.movies {
  border-top: 3px solid rgba(72, 234, 255, 0.2);
  border-right: 3px solid rgba(72, 234, 255, 0.2);
  padding: 4.8px 8px;
}
.articles {
  border-top: 3px solid rgba(72, 234, 255, 0.2);
  padding: 4.8px 8px;
}
.books {
  border-top: 3px solid rgba(72, 234, 255, 0.2);
  border-left: 3px solid rgba(72, 234, 255, 0.2);
  padding: 4.8px 8px;
}

ul > li {
  list-style-type: square;
  list-style-position: inside;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 2px rgb(248, 255, 254);
  font-weight: 500;
  padding-bottom: 8px;
}

li:hover {
  color: red;
  font-weight: bold;
}
.movies > ul > li > a,
.articles > ul > li > a,
.books > ul > li > a {
  list-style-type: square;
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.books > ul {
  white-space: pre-wrap;
}
.book {
  color: whitesmoke;
}

.about__info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow-y: scroll;
  height: 28vh;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19.2px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: rgba(49, 255, 238, 0.8);
  text-shadow: 0 0 3px turquoise;
  margin-bottom: 8px;
}

.bi {
  margin-right: 16px;
  font-size: 24px;
}

.movies > ul > li > a:hover,
.articles > ul > li > a:hover {
  color: red;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.555);
}

@media (max-width: 1045px) {
  .about__aboutOrganizing {
    color: rgb(125, 248, 236);
    padding: 32px 80px 16px 80px;
  }
  .about__aboutApp {
    color: rgb(125, 248, 236);
    padding: 0 80px 16px 80px;
  }
}

ul {
  background: none;
}
li {
  font-size: 16px;
  color: white !important;
}

@media (max-width: 720px) {
  .about__upperContainer {
    overflow-y: scroll;
    height: 70%;
  }

  .about__aboutOrganizing {
    color: rgb(125, 248, 236);
    padding: 32px 16px 16px 16px;
  }
  .about__aboutApp {
    color: rgb(125, 248, 236);
    padding: 0 16px 16px 16px;
    height: 70vh;
  }
  .about__info {
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    min-height: 100%;
  }

  .movies {
    text-align: center;
    width: 100vw;
    padding: 4.8px 8px;
  }
  .articles {
    text-align: center;
    width: 100vw;
    border-top: 3px solid rgba(72, 234, 255, 0.2);
    padding: 4.8px 8px;
  }
  .books {
    text-align: center;
    width: 100vw;
    border-top: 3px solid rgba(72, 234, 255, 0.2);
    border-left: none;
    padding: 4.8px 8px;
  }
  #app {
    overflow-y: hidden;
  }
}
</style>
