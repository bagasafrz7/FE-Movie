<template>
  <div>
    <nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 col-sm-6 nav-logo">
            <!-- <div class="nav-logo"> -->
            <input id="nav-toggle" type="checkbox" />
            <router-link to="/">
              <img src="@/assets/img/main-logo.png" alt="" srcset="" />
            </router-link>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Title / Theatre Here"
            />
            <!-- </div> -->
          </div>
          <div class="col-md-4 col-sm-6">
            <ul class="links">
              <li>
                <router-link to="/about">
                  <img src="@/assets/img/logo-imax.png" alt="" srcset="" />
                </router-link>
              </li>
              <li>
                <router-link to="/blog">
                  <img src="@/assets/img/logo-dolby.png" alt="" srcset="" />
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  background-color: #c0222e;
  width: 100%;
  padding: 20px 0;
}
nav .nav-logo {
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  /* margin: 0 5px; */
  padding: 0 40px;
  justify-content: space-between;
}
nav .logo img {
  width: 100%;
  height: auto;
}
nav input {
  box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  border: none;
  width: 100%;
  height: 50px;
  padding: 15px;
  /* margin: 0 15px; */
  margin: 0 0 0 150px;
}
nav .links {
  float: right;
  padding: 0;
  margin: 0;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
nav .links li {
  list-style: none;
}
nav .links a {
  display: block;
  padding: 1em 0;
}
nav .links img {
  width: 100%;
  height: auto;
}
#nav-toggle {
  position: absolute;
  top: -100px;
}
nav .icon-burger {
  display: none;
  position: absolute;
  right: 5%;
  top: 4%;
  display: none;
  /* background: #f7b633; */
}
nav .menu-burger {
  display: none;
  position: absolute;
  right: 5%;
  top: 4%;
  display: none;
}
nav .icon-burger .line {
  width: 30px;
  height: 5px;
  background-color: #fff;
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}
h1 a {
  font-size: 80px;
  color: #f7b633;
  text-decoration: none;
  text-transform: uppercase;
}
.popover {
  box-shadow: 0px 6px 8px rgb(19 19 19 / 70%);
}
.popover:target {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #191919;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
}
.popover .content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--bg1);
  -webkit-animation: 1s grow-data-v-81a679f4 ease forwards;
  animation: 1s grow-data-v-81a679f4 ease forwards;
  text-align: center;
}
.nav_list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav_list a {
  text-decoration: none;
  font-size: 32px;
  /* color: #fff; */
  color: var(--color-nav);
  font-family: 'Poppins', sans-serif;
}
.nav_list_item {
  height: 100%;
  overflow: hidden;
}
.nav_list_item a {
  font-family: 'Poppins', sans-serif;
}
.nav_list li {
  padding: 15px 0;
  text-transform: uppercase;
  transform: translateY(200px);
  opacity: 0;
  animation: 0.5s slideUp ease forwards 0.5s;
  position: relative;
}
.nav_list li::before {
  content: '';
  position: absolute;
  height: 2px;
  width: 0px;
  left: 0;
  bottom: 10px;
  background: #f7b633;
  transition: all 0.5s ease;
}
.nav_list li:hover:before {
  width: 100%;
}
.popover p {
  padding: 50px;
  opacity: 0;
  animation: 1s fadeIn ease forwards 1s;
}
.popover .close::after {
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  position: absolute;
  display: flex;
  z-index: 1;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  background-color: #f7b633;
  color: #fff;
  content: 'X';
  cursor: pointer;
  opacity: 0;
  animation: 1s fadeIn ease forwards 0.5s;
}
.lang-close {
  left: 0;
  top: 0;
  position: absolute;
  display: flex;
  z-index: 1;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: var(--color-nav);
  cursor: pointer;
  opacity: 0;
  margin: 5px 15px;
  animation: 1s fadeIn ease forwards 0.5s;
}
@keyframes grow {
  100% {
    height: 100%;
    width: 100%;
  }
}
@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}
@keyframes slideUp {
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media screen and (min-width: 2560px) {
  nav input {
    margin: 0 0 0 500px;
  }
  nav .links {
    width: 50%;
  }
}

@media screen and (max-width: 1024px) {
  nav .links a {
    font-size: 16px;
    text-align: center;
  }
}
@media screen and (max-width: 768px) {
  nav .links {
    width: 100%;
  }
  nav input {
    margin: 0 0 0 10px;
  }
  nav .logo {
    float: none;
    width: 30%;
    justify-content: center;
  }
  .header-nav {
    padding: 15px 0;
  }
  ul,
  li {
    list-style: none;
  }
  ul li a {
    /* color: #000; */
  }
  nav .links a {
    font-size: 20px;
    color: #fff;
  }
  nav :checked ~ .links {
    bottom: 0;
  }
  nav .icon-burger {
    display: block;
    margin: 10px;
  }
  nav .menu-burger {
    display: block;
    margin: 10px;
    position: absolute;
    z-index: 9;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 55px;
    border-radius: 50%;
    font-size: 20px;
    /* color: #fff; */
    color: var(--color-nav);
    cursor: pointer;
    background-color: var(--bg1);
    /* background: #000; */
    animation: 1s fadeIn ease forwards 0.5s;
  }
  nav :checked ~ .icon-burger .line:nth-child(1) {
    transform: translateY(10px) rotate(225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(3) {
    transform: translateY(-10px) rotate(-225deg);
  }
  nav :checked ~ .icon-burger .line:nth-child(2) {
    opacity: 0;
  }
}
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: all 0.3s ease-in-out;
}
#active:checked ~ .wrapper {
  background: #000;
  clip-path: circle(75%);
  z-index: 8;
}
.menu-btn {
  position: absolute;
  z-index: 9;
  right: 0px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 55px;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  background: #000;
  transition: all 0.3s ease-in-out;
}
.wrapper ul {
  position: absolute;
  /* top: 50%;
  left: 50%; */
  top: 35%;
  left: 35%;
  transform: translate(-50%, -50%);
  list-style: none;
}
.wrapper ul li {
  margin: 5px 0;
}
.wrapper ul li a {
  color: none;
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
  /* padding: 5px 30px; */
  color: #fff;
  border-radius: 50px;
  background: #000;
  position: relative;
  line-height: 50px;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}
input[type='checkbox'] {
  display: none;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  text-align: center;
  width: 100%;
  color: #202020;
}
.content .title {
  font-size: 40px;
  font-weight: 700;
}
.content p {
  font-size: 35px;
  font-weight: 600;
}
@keyframes rotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
@media screen and (max-width: 576px) {
  nav .links {
    display: none;
  }
  .nav .nav-logo {
    padding: 0 10px;
  }
  .nav-logo img {
    width: 100%;
    height: 50px;
    object-fit: contain;
  }
  nav input {
    height: 40px;
  }
}
</style>
