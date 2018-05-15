<template>
  <div id="counter">
    <div class="counter-component">
      <div class="counter-btn" @click="minus">-</div>
      <div class="counter-show">
        <input type="text" v-model="number" @keyup="fixNumber" />
      </div>
      <div class="counter-btn" @click="add">+</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    props: {
      min: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: 5
      }
    },
    data () {
      return {
        number: this.min
      }
    },
    methods: {
      minus () {
        if (this.number > this.min) this.number --
      },
      add () {
        if (this.number < this.max) this.number ++
      },
      fixNumber () {
        let fix
        if (typeof this.number === 'string') fix = this.number.replace(/\D/g, '')
        if (this.number > this.max) fix = this.max
        if (this.number < this.min) fix = this.min
        this.number = fix
      }
    },
    watch: {
      number () {
        this.$emit('on-change', this.number)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  
  .counter-show {
    float: left;
  }
  
  .counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 30px;
    outline: none;
    text-indent: 4px;
  }
  
  .counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
  }
  
  .counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>