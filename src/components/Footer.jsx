import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__name">jerriand<span>.</span></p>
          <p className="footer__text">
            © {new Date().getFullYear()} Jerriand Rodelas — Built with React & deployed on Railway.
          </p>
        </div>
      </div>
    </footer>
  )
}
