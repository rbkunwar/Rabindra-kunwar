import React from 'react'
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
    <input type="checkbox" id="darkMode" class="dark-mode-checkbox" />
<div class="wrapper">
<label htmlFor="darkMode">
<i class="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
</label>

<Header />

{children}

<Footer />
</div>
    </>
  )
}

