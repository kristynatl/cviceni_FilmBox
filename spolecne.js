// Na všech stránkách webu je horní navigace se třemi odkazy. Pro úsporu místa na malých zařízeních se mění na tlačítko s ikonkou hamburgeru. Zařiďte, aby klikání na tlačítko rozbalovalo a opět skrývalo položky menu.

// V souboru spolecne.js najděte pomocí document.querySelector prvek s id menu-tlacitko.
const hamburgerMenu = document.querySelector('#menu-tlacitko');

// Přidejte mu posluchač události kliknutí.
// Přidejte/odeberte prvku s id menu-polozky třídu show ve chvíli, kdy událost nastane.
hamburgerMenu.addEventListener('click', () => {
  document.querySelector('#menu-polozky').classList.toggle('show');

  // BONUS - Změňte ikonku tlačítka na křížek, pokud je menu rozbalené a na hamburger, pokud je sbalené. HTML ikonky křížku: <i class="fas fa-xmark"></i>, HTML ikonky hamburgeru: <i class="fas fa-bars"></i>
  const bars = document.querySelector('.fas');
  if (bars.classList.contains('fa-bars')) {
    bars.classList.remove('fa-bars');
    bars.classList.add('fa-xmark');
  } else {
    bars.classList.remove('fa-xmark');
    bars.classList.add('fa-bars');
  }
});
