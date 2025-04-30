function autofillForm() {
    // Text fields
    document.querySelectorAll('input[type="text"]').forEach((el, i) => {
      el.value = `Sample text ${i + 1}`;
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
  
    // Email inputs
    document.querySelectorAll('input[type="email"]').forEach((el) => {
      el.value = 'example@example.com';
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
  
    // Radio groups
    document.querySelectorAll('[role="radiogroup"]').forEach(group => {
      const first = group.querySelector('[role="radio"]');
      if (first) first.click();
    });
  
    // Checkbox groups
    document.querySelectorAll('[role="checkbox"]').forEach((el, i) => {
      if (i % 2 === 0) el.click(); // click half of them
    });
  
    // Paragraph/textarea answers
    document.querySelectorAll('textarea').forEach((el, i) => {
      el.value = `Sample paragraph ${i + 1}`;
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
  
    // Drop-downs
    document.querySelectorAll('div[role="listbox"]').forEach(dropdown => {
      dropdown.click();
      const options = dropdown.parentElement.querySelectorAll('[role="option"]');
      if (options.length > 0) options[0].click();
    });
  }
  
  // Run autofill after DOM is ready
  window.addEventListener('load', () => {
    setTimeout(autofillForm, 1000); // slight delay to let form render
  });