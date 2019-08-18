import React from 'react';
import 'components/footer/footer.css';

function Footer() {
  return (
    <div className="row align-items-center footer">
      <span className="rights text-wrap">
        © 2019 Aleksandra Skirnevskaia, Email for contacts
        <a className="footer-mail font-weight-bold" href="mailto:a.skirnevskaia@gmail.com">
          a.skirnevskaia@gmail.com
        </a>
      </span>
    </div>
  );
}

export default Footer;
