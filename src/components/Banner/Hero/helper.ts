export class WritingHero {
  hero: HTMLElement|null;

  text: string[] = [];

  isWriting = false;

  index = 1;

  constructor() {
    this.hero = document.querySelector('.banner-hero h1');
    if (this.hero) {
      this.text = this.hero.innerText.split(' ');
      this.writing();
    }
  }

    typing = async () => {
      if (!this.hero) return;
      const newText = this.text.slice(0, this.index).join(' ');
      this.hero.innerText = newText;
      if (this.index === this.text.length) {
        this.isWriting = false;
      }
      this.index += 1;
      await this.waitForMs(450);
    }

    deleting = async () => {
      if (!this.hero) return;
      await this.waitForMs(500);
      const deleted = this.hero.innerText.split(' ');
      deleted.pop();
      this.hero.innerText = deleted.join(' ');
      if (!this.hero.innerText) {
        this.index = 1;
        this.isWriting = true;
      }
    }

    writing = async () => {
      while (true) {
        if (this.isWriting) {
          // eslint-disable-next-line no-await-in-loop
          await this.typing();
        } else {
          // eslint-disable-next-line no-await-in-loop
          await this.deleting();
        }
      }
    }

   waitForMs = (ms: number) => {
     return new Promise((resolve) => setTimeout(resolve, ms));
   }
}
