// Select all FAQ toggle buttons
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  const answerId = button.getAttribute('aria-controls');
  const answer = document.getElementById(answerId);
  const icon = button.querySelector('img');

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Close all other FAQs before opening the clicked one
    faqButtons.forEach(btn => {
      const otherAnswer = document.getElementById(btn.getAttribute('aria-controls'));
      const otherIcon = btn.querySelector('img');
      btn.setAttribute('aria-expanded', 'false');
      otherAnswer.hidden = true;
      otherAnswer.setAttribute('aria-hidden', 'true');
      otherIcon.src = './assets/images/icon-plus.svg';
    });

    // Toggle the clicked FAQ
    if (!isExpanded) {
      button.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
      answer.setAttribute('aria-hidden', 'false');
      icon.src = './assets/images/icon-minus.svg';
    } else {
      button.setAttribute('aria-expanded', 'false');
      answer.hidden = true;
      answer.setAttribute('aria-hidden', 'true');
      icon.src = './assets/images/icon-plus.svg';
    }
  });

  // Enable keyboard toggle using Enter or Space
  button.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      button.click();
    }
  });
});
