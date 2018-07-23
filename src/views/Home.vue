<template>
  <div class="main container-fluid mb-m">
    {{ loading ? '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' : ''}}
    <div class="grid no-gap mobile-1">
      <div class="col-auto">
        <aside class="filter">
          <div
            v-for="selector in selectors"
            :key="selector.id"
            class="filter__item"
          >
            <h3
              class="filter__item__title"
              :class="{'is-expanded': filterType === `s-${selector.id}`}"
              @click="selectFilterType(`s-${selector.id}`)"
            >
              {{ selector.typeName }}
            </h3>
            <div class="expansion expansion--mobile" v-slide-toggle="filterType === `s-${selector.id}`">
              <div class="filter__item__content">
                <v-select
                  :items="selector.items"
                  :value="selector.value"
                  solo
                  flat
                  hide-details
                  @input="updateSelector({id: selector.id, value: $event})"
                ></v-select>
              </div>
            </div>
          </div>
          <div class="filter__item">
            <h3
              class="filter__item__title"
              :class="{'is-expanded': filterType === 'checkbox'}"
              @click="selectFilterType('checkbox')"
            >
              進階篩選
            </h3>
            <div class="expansion expansion--mobile" v-slide-toggle="filterType === 'checkbox'">
              <div class="filter__item__content">
                <v-checkbox
                  v-for="(name, index) in checkboxItems"
                  :key="index"
                  v-model="$_checkboxValue"
                  :label="name"
                  :value="name"
                  color="primary"
                  hide-details
                ></v-checkbox>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div class="col flexible">
        <div class="main__content">
          <p class="text-l mb-s">
            共 <strong class="primary--text">{{ listTotal }}</strong> 筆搜尋結果...
          </p>
          <div class="main__tags mb-m">
            <v-chip
              v-if="search"
              color="primary"
              close
              outline
              @input="closeTagSearch()"
            >
              {{ search }}
            </v-chip>
            <v-chip
              v-for="item in tagSelectors"
              :key="`s-${item.id}`"
              color="primary"
              close
              outline
              @input="closeTagSelector(item.id)"
            >
              {{ item.value }}
            </v-chip>
            <v-chip
              v-for="(name, index) in checkboxValue"
              :key="`c-${index}`"
              color="primary"
              close
              outline
              @input="closeTagCheckbox(name)"
            >
              {{ name }}
            </v-chip>
          </div>
          <ul class="main__cards mb-m">
            <li
               v-for="item in list"
               :key="item.id"
               class="card card--pointer"
            >
              <router-link class="card__link-item" :to="routerLinkItem(item.id)">
                <div class="grid no-gap tablet-1 mobile-1">
                  <div class="col-auto">
                    <figure class="card__figure card__figure--desktop-height">
                      <img :src="item.picture" alt="picture">
                    </figure>
                  </div>
                  <div class="col flexible">
                    <div class="card__content">
                      <h2 class="text-l primary--text mb-b">{{ item.name }}</h2>
                      <p class="card__text mb-b">{{ item.description }}</p>
                      <div class="mb-s d-f-center-height">
                        <span class="text-s text--light mr-m">
                          <v-icon class="mr-s">fas fa-map-marker-alt</v-icon>{{ item.zone }}
                        </span>
                        <span class="text-s text--light mr-m" v-if="item.ticketInfo !== ''">
                          <v-icon class="mr-s">fas fa-ticket-alt</v-icon>{{ item.ticketInfo }}
                        </span>
                        <v-chip small>{{ item.category }}</v-chip>
                      </div>
                      <span class="text-s text--light card__text card__text--one">
                        <v-icon class="mr-s">far fa-clock</v-icon>{{ item.openTime }}
                      </span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
          <div class="grid align-space-between mobile-1">
            <div class="col-auto hidden-mobile">
              <p class="d-f-center text--light">
                共 {{ pageTotal }} 頁 | 目前第 {{ pageCurrent }} 頁 ( 每頁 {{ numberPerPage }} 筆 )
              </p>
            </div>
            <div class="col-auto">
              <v-pagination
                v-model="pageCurrent"
                :length="pageTotal"
                :total-visible="7"
              ></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { slideToggle } from '@/shared/util';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Home',
  directives: {
    // 使元素隨著 binding.value 資料而改變，可以自動擴展或折疊
    slideToggle: {
      update(el, binding) {
        if (binding.value === binding.oldValue) return;
        slideToggle(el, 'is-active');
      },
    },
  },
  data() {
    return {
      pageCurrent: 1,
      numberPerPage: 10,
      filterType: null,
    };
  },

  computed: {
    ...mapGetters([
      'list',
      'search',
      'selectors',
      'tagSelectors',
      'checkboxItems',
      'checkboxValue',
      'loading',
    ]),

    $_checkboxValue: {
      get() {
        return this.checkboxValue;
      },
      set(value) {
        this.setCheckboxValue(value);
      },
    },

    listTotal() {
      return this.list.length;
    },

    // 以無條件進位法取得
    pageTotal() {
      const floatTotal = this.listTotal / this.numberPerPage;
      if (floatTotal % 1) {
        return floatTotal - (floatTotal % 1) + 1;
      }
      return floatTotal;
    },

    routerLinkItem() {
      return id => ({ name: 'item', params: { id } });
    },
  },

  methods: {
    ...mapMutations([
      'setCheckboxValue',
      'updateSelector',
    ]),
    ...mapActions([
      'closeTagSearch',
      'closeTagSelector',
      'closeTagCheckbox',
    ]),

    selectFilterType(n) {
      // 開啟同一個編號就改成把編號改成 null 表示關閉
      this.filterType = (this.filterType === n) ? null : n;
    },
  },
};
</script>

<style lang="scss">
.main {

  .filter {
    width: 18.75rem;

    @include respond-to('tablet') {
      width: 16rem;
    }
    @include respond-to('mobile') {
      width: 100%;
    }
  }

  &__content {
    margin: $spacing-l $spacing-xl 0 $spacing-xl;
  }

  &__tags {
    .v-chip {
      font-size: $font-size-s;

      &:not(:last-child) {
        margin-right: $spacing-s;
      }

      &__close {
        font-size: 16px;
      }
    }
  }

  &__cards .card {
    &:not(:last-child) {
      margin-bottom: $spacing-m;
    }
  }

  .v-pagination {
    justify-content: center;
    width: 100%;

    &__item {
      margin: $spacing-s / 2;
      color: $color-primary;
      font-size: $font-size;

      &--active {
        color: #fff;
      }
    }
    &__navigation {
      margin: $spacing-s / 2;
    }

    @include respond-to('mobile') {
      &__item,
      &__navigation {
        margin: $spacing-s / 4;
      }
    }

    &__more {
      margin: $spacing-s / 2;
      width: 1rem;
    }

    .v-icon {
      color: $color-primary;
      font-size: $font-size-s;
    }
  }
}

</style>
