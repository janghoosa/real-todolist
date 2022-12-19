import GitHubIcon from 'assets/icons/icon-github.svg';
import LogoutIcon from 'assets/icons/icon-logout.svg';

import Component from '../../core/Component';

class HamburgerModal extends Component {
  template() {
    return `
      <div class='Modal'>
        <div class='Modal__Overlay'></div>
        <div class='Modal__Content'>
          <button class='Modal__Button' id='logout'>
            <img class='Modal__Icon' alt='logout' src=${LogoutIcon} />
            <h2>Logout</h2>
          </button>
          <button class='Modal__Button' id='github'>
            <img class='Modal__Icon' alt='github' src=${GitHubIcon} />
            <h2>GitHub</h2>
          </button>
        </div>
      </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '.Modal__Overlay', () => {
      const modal = document.querySelector('.Modal');
      modal.remove();
    });
    this.addEvent('click', '#logout', () => {
      console.log('logout');
    });
    this.addEvent('click', '#github', () => {
      window.open(
        'https://github.com/shinwonse/real-todolist',
        'real-todolist-github'
      );
    });
  }
}

export default HamburgerModal;
