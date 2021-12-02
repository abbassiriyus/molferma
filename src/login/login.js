import React, { Component } from 'react'
import './login.css'
export default class login extends Component {
  render() {
    return (
      <div>
       <form method="get" action="javascript: void(0);" id="login-form" class="login-form" autocomplete="off" role="main">
  <h1 class="a11y-hidden">Boshqaruvchilar uchun</h1>
  <div>
    <label class="label-email">
      <input type="login" class="text" name="username" placeholder="login" tabindex="1" required />
      <span class="required">Login</span>
    </label>
  </div>
  <input type="checkbox" name="show-password" class="show-password a11y-hidden" id="show-password" tabindex="3" />
  <label class="label-show-password" for="show-password">
    <span>parolni ko`rish</span>
  </label>
  <div>
    <label class="label-password">
      <input type="password" class="text" name="password" placeholder="Parol" tabindex="2" required />
      <span class="required">Parol</span>
    </label>
  </div>
  <input type="submit" value="Log In" />
  <div class="email">
    <a href="#">Kodni terishda extiyot boling! <br/>Xavfsizlik tizimi mavjud!  </a>
  </div>
  <figure aria-hidden="true">
    <div class="person-body"></div>
    <div class="neck skin"></div>
    <div class="head skin">
      <div class="eyes"></div>
      <div class="mouth"></div>
    </div>
    <div class="hair"></div>
    <div class="ears"></div>
    <div class="shirt-1"></div>
    <div class="shirt-2"></div>
  </figure>
</form>

      </div>
    )
  }
}
