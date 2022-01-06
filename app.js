const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      resetButtonStatus: 'Reset',
      copyButtonStatus: 'Copy',
      resetIsClicked: false,
      copyIsClicked: false,
    };
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.resetButtonStatus = 'Reseted!';
      this.resetIsClicked = true;
      setTimeout(() => {
        this.resetButtonStatus = 'Reset';
        this.resetIsClicked = false;
      }, 2000);
    },
    copy() {
      const el = document.createElement('textarea');

      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      el.value = `transform: ${this.box.transform}`;

      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.copyButtonStatus = 'Copied!';
      this.copyIsClicked = true;
      setTimeout(() => {
        this.copyButtonStatus = 'Copy';
        this.copyIsClicked = false;
      }, 2000);
    },
  },
  computed: {
    box() {
      return {
        transform: `
               perspective(${this.perspective}px)
               rotateX(${this.rotateX}deg)
               rotateY(${this.rotateY}deg)
               rotateZ(${this.rotateZ}deg)
                `,
      };
    },
  },
}).mount('#app');
