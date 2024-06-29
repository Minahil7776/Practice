import React from 'react'
import {Link} from "react-router-dom"
export default function Footer() {
  return (
    <div>
      <footer>
        <div class="social-links">
          <Link to="https://www.facebook.com/yourpage" target="_blank">Facebook</Link>
          <Link to="https://www.twitter.com/yourpage" target="_blank">Twitter</Link>
          <Link to="https://www.instagram.com/yourpage" target="_blank">Instagram</Link>
        </div>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>

    </div>
  )
}
