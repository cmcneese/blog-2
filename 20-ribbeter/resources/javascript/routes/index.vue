<template lang="html">
  <div class="">
    <div class="app">
      <div class="container">
        <h2 class="title">Recent Ribbits</h2>
        <div class="row">
          <div class="row__item row__item--sidebar">
            <form class="card" @submit.prevent="submitRibbit">
              <h2 class="card__header">New Ribbit</h2>
              <div class="card__content">
                <div class="input-container">
                  <label for="ribbit-post">What's Going On?</label>
                  <textarea rows="4" v-model="formValues.body"></textarea>
                </div>
              </div>
              <div class="card__buttons">
                <a href="/users" @click.prevent="clearRibbit" class="btn btn-success">Clear</a>
                <button class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
          <div class="row__item row__item--right">
            <div class="card">
                <h2 class="card__header">See what's Happening!</h2>
                <div class="card-content">
                  <div class="button">
                    <a href="" class="btn card-content__button">Load new Ribbits</a>
                  </div>
                </div>
                <div class="card__row" v-for="ribbit in ribbits">
                  <h3>
                    {{ribbit.body}}
                  </h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ribbits: [],
      formValues: {
        body: '',
      },
    };
  },

  mounted() {
    this.getData();
    this.x();
  },

  methods: {
    getData() {
      fetch('/api/ribbits', {
          credentials: 'same-origin', // sends cookies so that we know the user is logged in
        })
        .then((r) => r.json())
        .then((ribbits) => {
          this.ribbits = ribbits;
        });
    },

    submitRibbit() {
      fetch('/api/ribbits', {
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(this.formValues),
        })
        .then((r) => r.json())
        .then((post) => {
          this.ribbits = [post, ...this.ribbits];
        })
    },

    clearRibbit() {
      this.formValues = {};
    },
  },
};
</script>
