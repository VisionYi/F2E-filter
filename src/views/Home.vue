<template>
  <div class="main container-fluid">
    <div class="grid no-gaps mobile-1">
      <div class="col-auto">
        <aside class="filter">
          <div class="filter__search show-only-mobile">
            <v-text-field
              v-model="$_search"
              label="search"
              placeholder="search..."
              color="black"
              prepend-inner-icon="fas fa-search"
              single-line
              hide-details
              clearable
              @click:clear="setSearch('')"
            ></v-text-field>
          </div>
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
            <div
              v-watch-data="{fn: slideToggle, data: filterType === `s-${selector.id}`}"
              class="expansion expansion--mobile"
            >
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
            <div
              v-watch-data="{fn: slideToggle, data: filterType === 'checkbox'}"
              class="expansion expansion--mobile"
            >
              <div class="filter__item__content">
                <v-checkbox
                  v-for="(value, key) in checkboxItems"
                  :key="key"
                  v-model="$_checkboxValue"
                  :label="key"
                  :value="key"
                  color="primary"
                  hide-details
                ></v-checkbox>
              </div>
            </div>
          </div>
        </aside>
        <div class="author-footer hidden-mobile">
          <div class="mb-s">
            資料來源:
            <a class="author-footer-link" href="https://data.kcg.gov.tw/dataset/attractions-information" target="_black">
              高雄市政府 Open Data
            </a>
          </div>
          <i class="fas fa-pen-square author-footer-pen" title="Author"></i>
          - Created by Visionyi
          <a class="author-footer-link" href="https://github.com/VisionYi/F2E-filter" target="_black" title="Source Code">
            <i class="fas fa-code"></i>
          </a>
        </div>
      </div>
      <div class="col flexible">
        <div class="main__content" id="content">
          <p class="text-l mb-s">
            共 <strong class="primary--text">{{ filterListTotal }}</strong> 筆搜尋結果...
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
          <ul class="main__cards mb-m" v-if="filterListTotal !== 0">
            <li
               v-for="item in pageFilterList"
               :key="item.id"
               class="card card--pointer"
            >
              <router-link class="card__link-item" :to="routerLinkItem(item.id)">
                <div class="grid no-gaps tablet-1 mobile-1">
                  <div class="col-auto">
                    <figure class="card__figure card__figure--desktop-height">
                      <img :src="item.picture" alt="picture">
                    </figure>
                  </div>
                  <div class="col flexible">
                    <div class="card__content">
                      <h2 class="text-l primary--text mb-b">{{ item.name }}</h2>
                      <p class="card__text mb-b">{{ item.description }}</p>
                      <div class="text-s text--light mb-s d-f-center-height">
                        <span class="mr-m">
                          <v-icon class="mr-s" title="地區">fas fa-map-marker-alt</v-icon>{{ item.zone }}
                        </span>
                        <span class="mr-m" v-if="item.ticketInfo !== ''">
                          <v-icon class="mr-s" title="購票資訊">fas fa-ticket-alt</v-icon>{{ item.ticketInfo }}
                        </span>
                        <v-chip small>{{ item.category }}</v-chip>
                      </div>
                      <div class="text-s text--light card__text card__text--one">
                        <v-icon class="mr-s" title="開放時間">far fa-clock</v-icon>{{ item.openTime }}
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
          <div class="grid align-space-between mobile-1" v-if="filterListTotal !== 0">
            <div class="col-auto hidden-mobile">
              <p class="d-f-center text--light">
                共 {{ pageTotal }} 頁 | 目前第 {{ pageCurrent }} 頁 ( 每頁 {{ numberPerPage }} 筆 )
              </p>
            </div>
            <div class="col-auto">
              <v-pagination
                :value="pageCurrent"
                :length="pageTotal"
                :total-visible="7"
                @input="handleChangePage($event)"
              ></v-pagination>
            </div>
          </div>
          <div class="no-data" v-if="filterListTotal === 0">No Data Available</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { slideToggle, isEmpty, scrollTo, debounce } from '@/shared/util';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Home',
  directives: {
    // 使元素隨著資料而改變，當改變後執行 binding.value.fn
    watchData: {
      update(el, binding) {
        if (binding.value.data === binding.oldValue.data) return;
        binding.value.fn(el, binding.value.data, binding.oldValue.data);
      },
    },
  },

  data() {
    return {
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
      'pageCurrent',
    ]),

    $_checkboxValue: {
      get() {
        return this.checkboxValue;
      },
      set(value) {
        this.setCheckboxValue(value);
      },
    },

    $_search: {
      get() {
        return this.search;
      },
      set: debounce(function fn(value) {
        this.setSearch(value);
      }, 400),
    },

    filterListTotal() {
      return this.filterList.length;
    },

    // 以無條件進位法取得
    pageTotal() {
      const floatTotal = this.filterListTotal / this.numberPerPage;
      if (floatTotal % 1) {
        return floatTotal - (floatTotal % 1) + 1;
      }
      return floatTotal;
    },

    routerLinkItem() {
      return id => ({ name: 'item', params: { id } });
    },

    filterList() {
      return this.list.filter((item) => {
        if (this.search && !item.name.includes(this.search)) {
          return false;
        }

        if (
          !isEmpty(this.tagSelectors)
          && !this.tagSelectors.every(selector => item[selector.type] === selector.value)
        ) {
          return false;
        }

        if (
          !isEmpty(this.checkboxValue)
          && !this.checkboxValue.every(name => item[this.checkboxItems[name]] === name)
        ) {
          return false;
        }

        return true;
      });
    },

    pageFilterList() {
      const start = (this.pageCurrent - 1) * this.numberPerPage;
      const end = start + this.numberPerPage;
      return this.filterList.slice(start, end); // end 最後一個編號不會算進去
    },
  },

  watch: {
    search() {
      this.setPageCurrent(1);
    },
    tagSelectors() {
      this.setPageCurrent(1);
    },
    checkboxValue() {
      this.setPageCurrent(1);
    },
  },

  methods: {
    ...mapMutations([
      'setCheckboxValue',
      'setPageCurrent',
      'updateSelector',
      'setSearch',
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

    handleChangePage(page) {
      if (this.pageCurrent === page) return;
      this.setPageCurrent(page);
      scrollTo('#content');
    },

    slideToggle(el) {
      slideToggle(el, 'is-active');
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
    padding: $spacing-l $spacing-xl 0 $spacing-xl;
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
