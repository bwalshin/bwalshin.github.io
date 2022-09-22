function FullCard() {
  return /*#__PURE__*/ React.createElement(
    'div',
    { id: 'card-container', className: 'card-dark' } /*#__PURE__*/,
    React.createElement(Info, null) /*#__PURE__*/,
    React.createElement(Headline, null) /*#__PURE__*/,
    React.createElement(About, null) /*#__PURE__*/,
    // React.createElement(Interests, null) /*#__PURE__*/,
    React.createElement(Footer, null)
  );
}
function Headline() {
  return /*#__PURE__*/ React.createElement(
    'section',
    { className: 'headline' } /*#__PURE__*/,
    null /*#__PURE__*/,
    React.createElement(
      'h4',
      null,
      'I am a great problem solver, and I use objectivity, vision, and pragmatism, to approach solutions to a challenge.'
    )
  );
}

function About() {
  return /*#__PURE__*/ React.createElement(
    'section',
    null /*#__PURE__*/,
    React.createElement('h4', null, 'About') /*#__PURE__*/,
    React.createElement(
      'p',
      null,
      'I like to work in learning and challenging environment, utilizing my skills and knowledge and contribute positively to my personal growth as well as the growth of the organization. I like to use my experiences and skills in solving problems in a creative manner to contribute to the continued growth and success of the organization and its clients.'
    )
  );
}

function Interests() {
  return /*#__PURE__*/ React.createElement(
    'section',
    null /*#__PURE__*/,
    React.createElement('h4', null, 'Interests') /*#__PURE__*/,
    React.createElement(
      'p',
      null,
      'Lover (and sometimes maker) of music. Always watching YouTube or a good movie / television show. Traveler and photo taker. '
    )
  );
}

function Info() {
  function changeMode(e) {
    e.preventDefault();
    document.getElementById('card-container').classList.toggle('card-dark');
    document.getElementById('card-container').classList.toggle('card-light');
    document.getElementById('toggle-mode').classList.toggle('button-light');
    document.getElementById('toggle-mode').classList.toggle('button-dark');
    document.getElementById('contact-links').classList.toggle('footer-light');
    document.getElementById('portfolio-link').classList.toggle('text-light');
    document.body.classList.toggle('light-bg');
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    { className: 'info' } /*#__PURE__*/,
    React.createElement(
      'header',
      null /*#__PURE__*/,
      React.createElement(
        'button',
        {
          onClick: changeMode,
          className: 'button-dark',
          id: 'toggle-mode',
        } /*#__PURE__*/,
        React.createElement('i', {
          class: 'fa-solid fa-moon xl',
        }) /*#__PURE__*/,
        React.createElement('span', null, 'Toggle dark / light Mode')
      )
    ) /*#__PURE__*/,

    React.createElement('div', { className: 'profile-picture' }) /*#__PURE__*/,
    React.createElement('h2', null, 'Brandon Walshin') /*#__PURE__*/,
    React.createElement('h5', null, 'Web Developer') /*#__PURE__*/,
    React.createElement(
      'h6',
      null /*#__PURE__*/,
      React.createElement(
        'a',
        {
          id: 'portfolio-link',
          href: 'www.brandonwalshin.com',
          target: '_blank',
        },
        'www.brandonwalshin.com'
      )
    ) /*#__PURE__*/,

    React.createElement(
      'div',
      { className: 'contact-links' } /*#__PURE__*/,
      React.createElement(
        'a',
        {
          href: 'mailto:brandonwalshin@gmail.com',
          className: 'contact-button email',
        } /*#__PURE__*/,
        React.createElement('i', { className: 'fa-solid fa-envelope' }),
        'Email'
      ) /*#__PURE__*/,

      React.createElement(
        'a',
        {
          href: 'https://www.linkedin.com/in/brandonwalshin/',
          target: '_blank',
          className: 'contact-button linkedin',
        } /*#__PURE__*/,
        React.createElement('i', { className: 'fa-brands fa-linkedin' }),
        'LinkedIn'
      ),

      React.createElement(
        'a',
        {
          href: 'https://github.com/bwalshin',
          target: '_blank',
          className: 'contact-button github',
        } /*#__PURE__*/,
        React.createElement('i', { className: 'fa-brands fa-github' }),
        'Github'
      )
    )
  );
}

function Footer() {
  return /*#__PURE__*/ React.createElement(
    'footer',
    { id: 'contact-links' } /*#__PURE__*/,
    React.createElement(
      'a',
      { href: '#',} /*#__PURE__*/,
      React.createElement('i', { className: 'fa-brands fa-html5 fa-xl' })
    ) /*#__PURE__*/,

    React.createElement(
      'a',
      {
        href: '#',
      } /*#__PURE__*/,
      React.createElement('i', { class: 'fa-brands fa-css3-alt fa-xl' })
    ) /*#__PURE__*/,

    React.createElement(
      'a',
      {
        href: '#',
      } /*#__PURE__*/,
      React.createElement('i', { className: 'fa-brands fa-js fa-xl' })
    ) /*#__PURE__*/,

    React.createElement(
      'a',
      {
        href: '#',
      } /*#__PURE__*/,
      React.createElement('i', { className: 'fa-brands fa-react fa-xl' })
    ) /*#__PURE__*/,

    React.createElement(
      'a',
      {
        href: '#',
      } /*#__PURE__*/,
      React.createElement('i', { className: 'fa-brands fa-node fa-xl' })
    )
  );
  // return /*#__PURE__*/ React.createElement(
  //   'footer',
  //   { id: 'contact-links' } /*#__PURE__*/,
  //   React.createElement(
  //     'a',
  //     { href: '#', target: '_blank' } /*#__PURE__*/,
  //     React.createElement('i', { className: 'fa-brands fa-twitter fa-xl' })
  //   ) /*#__PURE__*/,

  //   React.createElement(
  //     'a',
  //     {
  //       href: 'https://www.linkedin.com/in/brandonwalshin/',
  //       target: '_blank',
  //     } /*#__PURE__*/,
  //     React.createElement('i', { class: 'fa-brands fa-linkedin fa-xl' })
  //   ) /*#__PURE__*/,

  //   React.createElement(
  //     'a',
  //     {
  //       href: '#',
  //       target: '_blank',
  //     } /*#__PURE__*/,
  //     React.createElement('i', { className: 'fa-brands fa-instagram fa-xl' })
  //   ) /*#__PURE__*/,

  //   React.createElement(
  //     'a',
  //     {
  //       href: 'https://github.com/bwalshin',
  //       target: '_blank',
  //     } /*#__PURE__*/,
  //     React.createElement('i', { className: 'fa-solid fa-envelope fa-xl' })
  //   )
  // );
}

ReactDOM.render(
  /*#__PURE__*/ React.createElement(FullCard, null),
  document.getElementById('root')
);

