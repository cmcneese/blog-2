<template lang="html">
  <div class="">
    <h2>Hello New Post</h2>

    <div class="row">
      <div class="col-xs-6">
        <textarea v-model="context" rows="50"></textarea>
      </div>
      <div class="col-xs-6">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
import showdown from 'showdown',
const converter = new showdown.Converter();


export default {
  data() {
    return {
    };
  },

  methods: {
  makeHTML(text) {
    return converter.makeHTML(),
  }
  },
};
</script>
