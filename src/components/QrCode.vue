<template>
  <div>
    <p>{{ time }}</p>
    <vue-qrcode v-if="targetText" :value="targetText" :options="option" tag="img"></vue-qrcode>
  </div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'
export default {
  components: {
    VueQrcode
  },
  data () {
    return {
      time: 0,
      entry: 1,
      targetText: '',
      option: {
        errorCorrectionLevel: 'M',
        maskPattern: 0,
        margin: 10,
        scale: 4,
        width: 300,
        color: {
          dark: '#000000FF',
          light: '#FFFFFFFF'
        }
      }
    }
  },
  methods: {
    generate: function (entry) {
      this.targetText = 'https://blog.risouf.net/entry/' + entry
    }
  },
  created: function () {
    setInterval(() => { this.time-- }, 1000)
  },

  watch: {
    time: function (v) {
      if (v <= 0) {
        this.generate(this.entry)
        this.entry++
        this.time = 5
      }
    }
  }
}
</script>
<style scoped>
</style>
