<template>
  <div class="item-page">
    <div class="item-page__header mb-l">
      <div class="grid align-middle">
        <div class="col-auto">
          <v-btn color="primary" depressed @click="backHistory()">回上一頁</v-btn>
        </div>
        <div class="col flexible">
          <div class="item-page__breadcrumbs-wrapper">
            <v-breadcrumbs divider="/">
              <v-breadcrumbs-item href="#/">首頁</v-breadcrumbs-item>
              <v-breadcrumbs-item disabled>{{ item.name }}</v-breadcrumbs-item>
            </v-breadcrumbs>
          </div>
        </div>
      </div>
    </div>
    <div class="card elevation-1">
      <figure class="card__figure">
        <img :src="item.picture" alt="picture">
      </figure>
      <div class="card__content">
        <h1 class="text-xl primary--text mb-b">{{ item.name }}</h1>
        <div class="text-s text--light mb-b">
          <span class="mr-m">
            <v-icon class="mr-s" title="開放時間">far fa-clock</v-icon>{{ item.openTime }}
          </span>
          <span class="mr-m" v-if="item.ticketInfo !== ''">
            <v-icon class="mr-s" title="購票資訊">fas fa-ticket-alt</v-icon>{{ item.ticketInfo }}
          </span>
        </div>
        <div class="text-s text--light mb-l">
          <v-icon class="mr-s" title="地址">fas fa-map-marker-alt</v-icon>{{ item.address }}
        </div>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { scrollToTop } from '@/shared/util';

export default {
  name: 'Item',
  data() {
    return {
      item: {},
    };
  },
  computed: {
    ...mapGetters([
      'getListItemById',
    ]),
  },
  mounted() {
    this.item = this.getListItemById(this.$route.params.id);
    scrollToTop();
  },

  methods: {
    backHistory() {
      window.history.go(-1);
    },
  },
};
</script>

<style lang="scss">
.item-page {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: $spacing-l $spacing-xl $spacing-xl $spacing-xl;

  @include respond-to('mobile') {
    padding-left: 0;
    padding-right: 0;
  }

  &__header {
    @include respond-to('mobile') {
      padding: 0 $spacing-m;
    }
  }

  &__breadcrumbs-wrapper {
    display: flex;
    align-items: center;
    height: 2.5rem;
    background-color: $color-bg-dark;

    .v-breadcrumbs {
      flex-wrap: nowrap;
      padding: ($spacing - 0.25rem) $spacing;

      li {
        font-size: $font-size;
      }

      &__item {
        white-space: nowrap;
      }
    }
  }
}
</style>
