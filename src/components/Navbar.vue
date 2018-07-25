<template>
  <header class="navbar">
    <div class="container-fluid navbar__container">
      <ul class="grid no-gap w-100">
        <li class="col-auto flexible-mobile">
          <h3 class="navbar__title">
            <a href="#/">高雄 Fun</a>
          </h3>
        </li>
        <li v-if="$route.name === 'home'" class="col flexible hidden-mobile" >
          <v-text-field
            v-model="$_search"
            label="search"
            placeholder="search..."
            color="white"
            prepend-inner-icon="fas fa-search"
            single-line
            hide-details
            clearable
            @click:clear="setSearch('')"
          ></v-text-field>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { debounce } from '@/shared/util';

export default {
  name: 'Navbar',

  computed: {
    ...mapGetters([
      'search',
    ]),

    $_search: {
      get() {
        return this.search;
      },
      set: debounce(function fn(value) {
        this.setSearch(value);
      }, 400),
    },
  },
  methods: {
    ...mapMutations([
      'setSearch',
    ]),
  },
};
</script>

<style lang="scss">
.navbar {
  height: 4rem;
  background-color: $color-primary;

  &__container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__title {
    display: block;
    width: 18.75rem;
    padding-left: $spacing-xl;
    font-size: $font-size-xl;
    line-height: $line-height-xl;
    font-weight: bold;
    color: #fff;

    @include respond-to('tablet') {
      width: 16rem;
    }

    @include respond-to('mobile') {
      width: 100%;
      padding: 0;
      text-align: center;
    }

    a {
      color: inherit;

      &:hover {
        color: $color-bg;
      }
    }
  }

  .v-text-field {
    font-size: $font-size-m;
    max-width: 25rem;
    width: 100%;
    margin: 0 $spacing-xl;

    @include respond-to('tablet-down') {
      max-width: 24rem;
    }

    .v-input__prepend-inner {
      padding-right: $spacing-s;
    }
  }
}
</style>
