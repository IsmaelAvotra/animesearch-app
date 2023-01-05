import './Footer.css'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer>
      <p>
        © Created by{' '}
        <a href='https://portfolio-ismael.vercel.app/' target='_blank'>
          <span>Ismael Avotra</span>
        </a>{' '}
        {date} | All rights reserved
      </p>
    </footer>
  )
}

export default Footer
